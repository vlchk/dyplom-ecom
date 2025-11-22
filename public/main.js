// Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open Cart
if (cartIcon && cart) {
    cartIcon.onclick = () => {
        cart.classList.add("active");
    };
}

// Close Cart
if (closeCart && cart) {
    closeCart.onclick = () => {
        cart.classList.remove("active");
    };
}


// Making Add to cart
// Cart Working JS

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// Making Function
function ready() {
    // Remove Item From Cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantity Change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    loadCartItems();
}

// Remove Cart Item 
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
    saveCartItems();
}

// Quantity Change 
function quantityChanged(event) {
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// Add Cart Function
function addCartClicked(event) {
    var button = event.target;

    // Базовий контейнер як раніше (для test.html)
    var container = button.parentElement;

    var titleEl = container.getElementsByClassName("product-title")[0];
    var priceEl = container.getElementsByClassName("price")[0];
    var imgEl   = container.getElementsByClassName("product-img")[0];

    // Якщо не знайшли (product.html) - шукаємо в .sproduct
    if (!titleEl || !priceEl) {
        var section = button.closest(".sproduct") || document;

        if (!titleEl) {
            titleEl = section.getElementsByClassName("product-title")[0];
        }
        if (!priceEl) {
            priceEl = section.getElementsByClassName("price")[0];
        }
    }

    // 🔑 На product.html – завжди беремо картинку з #mainImg (обраний колір)
    var mainImgEl = document.getElementById("mainImg");
    if (mainImgEl) {
        imgEl = mainImgEl;
    } else if (!imgEl) {
        // fallback для test.html
        var section = button.closest(".product") || document;
        imgEl = section.getElementsByClassName("product-img")[0];
    }

    if (!titleEl || !priceEl || !imgEl) {
        console.error("Cannot find product data for cart");
        return;
    }

    var title = titleEl.innerText;
    var price = priceEl.innerText;
    var productImg = imgEl.src;

    addProductToCart(title, price, productImg);
    updateTotal();
    saveCartItems();
    updateCartIcon();
}
 
function addProductToCart(title, price, productImg) {
    var cartContent = document.getElementsByClassName("cart-content")[0];

    // 🔍 перевіряємо дубль по НАЗВІ + КАРТИНЦІ
    var existingBoxes = cartContent.getElementsByClassName("cart-box");
    for (var i = 0; i < existingBoxes.length; i++) {
        var existingTitle = existingBoxes[i]
            .getElementsByClassName("cart-product-title")[0].innerText;
        var existingImg = existingBoxes[i]
            .getElementsByClassName("cart-img")[0].src;

        if (existingTitle === title && existingImg === productImg) {
            alert("You have already added this item to cart");
            return;
        }
    }

    // якщо такого поєднання title+image ще немає – додаємо новий блок
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bxs-trash-alt cart-remove"></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartContent.append(cartShopBox);

    // вішаємо слухачі як раніше
    cartShopBox
        .getElementsByClassName("cart-remove")[0]
        .addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0]
        .addEventListener("change", quantityChanged);
}


// Update Total
function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value;
        total += price * quantity;
    }
    // If price contains some cents
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    // Save Total to LocalStorage
        localStorage.setItem("cartTotal", total);
}

// Keep Item in cart when page refresh with localstorage
function saveCartItems () {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++) {
        cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName("cart-product-title")[0];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var productImg = cartBox.getElementsByClassName("cart-img")[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

//Loads in cart
function loadCartItems () {
    var cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
        cartItems = JSON.parse(cartItems);

        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg);

            var cartBoxes = document.getElementsByClassName("cart-box");
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }

    var cartTotal = localStorage.getItem("cartTotal");
    if(cartTotal) {
        document.getElementsByClassName("total-price")[0].innerHTML = "$" + cartTotal;
    }
    updateCartIcon();
}

// Quantity in cart icon 
function updateCartIcon () {
    var cartBoxes = document.getElementsByClassName("cart-box");
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        quantity += parseInt(quantityElement.value);
    }
     var cartIcon = document.querySelector("#cart-icon");
    if (cartIcon) {
        cartIcon.setAttribute("data-quantity", quantity);
    }
}

// Clear cart item after seccessful payment
function clearCart () {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    cartContent.innerHTML = "";
    updateTotal();
    localStorage.removeItem("cartItems");
}

// ---------- THEME TOGGLE (Light / Dark) ----------
(function () {
  var body = document.body;
  var icon = document.getElementById("theme-toggle");
  if (!icon) return;

  var THEME_KEY = "shop-theme";

  function applyTheme(theme) {

    // ----- Системні стилі -----
    if (theme === "dark") {
        body.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        body.classList.remove("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

    // ----- Hero background -----
    var homeSection = document.getElementById("home");
    if (homeSection) {
        var lightBg = homeSection.getAttribute("data-light");
        var darkBg  = homeSection.getAttribute("data-dark");

        if (theme === "dark" && darkBg) {
            homeSection.style.backgroundImage = `url('${darkBg}')`;
        } else if (lightBg) {
            homeSection.style.backgroundImage = `url('${lightBg}')`;
        }
    }

    // ----- Блог / карточки з фотографіями -----
    var blogImages = document.querySelectorAll(".blog-img");
    blogImages.forEach(img => {
        var lightSrc = img.getAttribute("data-light");
        var darkSrc  = img.getAttribute("data-dark");

        if (theme === "dark" && darkSrc) {
            img.src = darkSrc;
        } else if (lightSrc) {
            img.src = lightSrc;
        }
    });

}



  // читаємо збережену тему
  var saved = localStorage.getItem(THEME_KEY);
  var current = (saved === "dark") ? "dark" : "light";

  // застосувати при завантаженні
  applyTheme(current);

  // клік по іконці
  icon.addEventListener("click", function () {
    current = (current === "dark") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, current);
    applyTheme(current);
  });
})();
