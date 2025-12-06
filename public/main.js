// =======================
//  CART + THEME MAIN.JS
// =======================

// Ініціалізація після завантаження DOM
document.addEventListener("DOMContentLoaded", function () {
    initCart();
    initThemeToggle();
});

// ----------------------
// CART
// ----------------------

function initCart() {
    const cartIcon  = document.querySelector("#cart-icon");
    const cart      = document.querySelector(".cart");
    const closeCart = document.querySelector("#close-cart");

    // Відкрити / закрити корзину
    if (cartIcon && cart) {
        cartIcon.addEventListener("click", () => {
            cart.classList.add("active");
        });
    }
    if (closeCart && cart) {
        closeCart.addEventListener("click", () => {
            cart.classList.remove("active");
        });
    }

    // Кнопки видалення
    const removeCartButtons = document.getElementsByClassName("cart-remove");
    for (let i = 0; i < removeCartButtons.length; i++) {
        removeCartButtons[i].addEventListener("click", removeCartItem);
    }

    // Інпути кількості
    const quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", quantityChanged);
    }

    // Кнопки додавання в корзину
    const addCartButtons = document.getElementsByClassName("add-cart");
    for (let i = 0; i < addCartButtons.length; i++) {
        addCartButtons[i].addEventListener("click", addCartClicked);
    }

    // Завантажити з localStorage
    loadCartItems();
    updateCartIcon();
}

// Видалити товар
function removeCartItem(event) {
    const box = event.target.closest(".cart-box");
    if (box) box.remove();

    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// Зміна кількості
function quantityChanged(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// ----------------------
// Клік по "ADD TO CART"
// ----------------------
function addCartClicked(event) {
    const button = event.target;

    // контейнер карточки товару або секція .sproduct
    const section  = button.closest(".sproduct") || document;
    const card     = button.closest(".product") || section;

    const titleEl = card.querySelector(".product-title") || section.querySelector(".product-title");
    const priceEl = card.querySelector(".price")         || section.querySelector(".price");

    let imgEl = card.querySelector(".product-img") || section.querySelector(".product-img");
    const mainImgEl = document.getElementById("mainImg");
    if (mainImgEl) imgEl = mainImgEl;

    if (!titleEl || !priceEl || !imgEl) {
        console.error("Cannot find product data for cart");
        return;
    }

    // читаємо розмір
    let size = "";
    const sizeSelect = section.querySelector("select");
    if (sizeSelect) {
        size = (sizeSelect.value || "").trim();
        if (!size || size.toLowerCase() === "select size") {
            showToast("Please select a size before adding to cart", {
                type: "error",
                title: "Size required"
            });
            return;
        }
    }

    const title          = titleEl.textContent.trim();
    const price          = priceEl.textContent.trim();
    const productImg     = imgEl.src;
    const normalizedSize = (size || "").trim();

    // 1) Перевірка дубля по localStorage: title + size + productImg (колір)
    try {
        const stored = localStorage.getItem("cartItems");
        if (stored) {
            const items = JSON.parse(stored);
            const hasDuplicate = items.some(it =>
                (it.title || "").trim() === title &&
                (it.size  || "").trim() === normalizedSize &&
                (it.productImg || "") === productImg
            );
            if (hasDuplicate) {
                showToast("You have already added this item with the same size and color.", {
                    type: "info",
                    title: "Already in cart"
                });
                return;
            }
        }
    } catch (e) {
        console.warn("Cannot read cartItems from localStorage", e);
    }

    // 2) Перевірка по DOM (на випадок невідповідності з localStorage)
    const cartContent = document.querySelector(".cart-content");
    if (cartContent && normalizedSize) {
        const boxes = cartContent.querySelectorAll(".cart-box");
        for (const box of boxes) {
            const existingTitle = box.querySelector(".cart-product-title")?.textContent.trim() || "";
            const sizeText      = box.querySelector(".cart-size")?.textContent || "";
            const existingSize  = sizeText.replace("Size:", "").trim();
            const existingImg   = box.querySelector(".cart-img")?.src || "";

            if (
                existingTitle === title &&
                existingSize  === normalizedSize &&
                existingImg   === productImg
            ) {
                showToast("You have already added this item with the same size and color.", {
                    type: "info",
                    title: "Already in cart"
                });
                return;
            }
        }
    }

    // якщо дубля немає – додаємо
    addProductToCart(title, price, productImg, normalizedSize);


    showToast("Item added to your cart", {
        type: "success",
        title: "Added to cart"
    });

    updateTotal();
    saveCartItems();
    updateCartIcon();
}

// Створити елемент товару в корзині
function addProductToCart(title, price, productImg, size) {
    const cartContent = document.querySelector(".cart-content");
    if (!cartContent) return;

    const normalizedSize = (size || "").trim();

    const cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");

    const sizeHtml = normalizedSize
        ? `<div class="cart-size">Size: ${normalizedSize}</div>`
        : "";

    cartShopBox.innerHTML = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            ${sizeHtml}
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bxs-trash-alt cart-remove"></i>
    `;

    cartContent.append(cartShopBox);

    cartShopBox.querySelector(".cart-remove")
        .addEventListener("click", removeCartItem);
    cartShopBox.querySelector(".cart-quantity")
        .addEventListener("change", quantityChanged);
}

// Порахувати суму
function updateTotal() {
    const cartContent = document.querySelector(".cart-content");
    if (!cartContent) return;

    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;

    for (let i = 0; i < cartBoxes.length; i++) {
        const cartBox         = cartBoxes[i];
        const priceElement    = cartBox.getElementsByClassName("cart-price")[0];
        const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

        const price    = parseFloat(priceElement.innerText.replace("$", ""));
        const quantity = parseInt(quantityElement.value, 10) || 0;

        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    const totalEl = document.querySelector(".total-price");
    if (totalEl) totalEl.innerText = "$" + total;

    localStorage.setItem("cartTotal", total);
}

// Зберегти корзину в localStorage
function saveCartItems() {
    const cartContent = document.querySelector(".cart-content");
    if (!cartContent) return;

    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    const cartItems = [];

    for (let i = 0; i < cartBoxes.length; i++) {
        const cartBox         = cartBoxes[i];
        const titleElement    = cartBox.querySelector(".cart-product-title");
        const priceElement    = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".cart-quantity");
        const imgElement      = cartBox.querySelector(".cart-img");
        const sizeElement     = cartBox.querySelector(".cart-size");

        const item = {
            title:    titleElement?.innerText || "",
            price:    priceElement?.innerText || "",
            quantity: quantityElement?.value || "1",
            productImg: imgElement?.src || "",
            size: sizeElement
                ? sizeElement.innerText.replace("Size:", "").trim()
                : ""
        };
        cartItems.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Завантажити корзину з localStorage
function loadCartItems() {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
        const cartItems = JSON.parse(stored);
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            addProductToCart(item.title, item.price, item.productImg, item.size);

            const cartBoxes       = document.getElementsByClassName("cart-box");
            const cartBox         = cartBoxes[cartBoxes.length - 1];
            const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }

    const cartTotal = localStorage.getItem("cartTotal");
    if (cartTotal) {
        const totalEl = document.querySelector(".total-price");
        if (totalEl) totalEl.innerHTML = "$" + cartTotal;
    }
}

// Оновити цифру на іконці корзини
function updateCartIcon() {
    const cartBoxes = document.getElementsByClassName("cart-box");
    let quantity = 0;

    for (let i = 0; i < cartBoxes.length; i++) {
        const q = parseInt(
            cartBoxes[i].getElementsByClassName("cart-quantity")[0].value,
            10
        );
        quantity += isNaN(q) ? 0 : q;
    }

    const cartIcon = document.querySelector("#cart-icon");
    if (cartIcon) {
        cartIcon.setAttribute("data-quantity", quantity);
    }
}

// Очистити корзину (якщо треба)
function clearCart() {
    const cartContent = document.querySelector(".cart-content");
    if (cartContent) cartContent.innerHTML = "";

    updateTotal();
    updateCartIcon();
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotal");
}

// ===================
// Toast notifications
// ===================
function showToast(message, options = {}) {
    const {
        type = "info",      // "success" | "error" | "info"
        duration = 3000,    // час показу в мс
        title = ""          // необов’язковий заголовок
    } = options;

    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (type === "success") toast.classList.add("toast-success");
    if (type === "error")   toast.classList.add("toast-error");
    if (type === "info")    toast.classList.add("toast-info");

    toast.innerHTML = `
        <div class="toast-body">
            ${title ? `<div class="toast-title">${title}</div>` : ""}
            <div class="toast-message">${message}</div>
        </div>
        <div class="toast-close">&times;</div>
    `;

    container.appendChild(toast);

    const close = () => {
        toast.style.animation = "toast-out 0.25s forwards";
        setTimeout(() => toast.remove(), 250);
    };

    // кнопка закриття
    toast.querySelector(".toast-close").addEventListener("click", close);

    // авто-закриття
    if (duration > 0) {
        setTimeout(close, duration);
    }
}

// ----------------------
// THEME TOGGLE
// ----------------------

function initThemeToggle() {
    const body = document.body;
    const icon = document.getElementById("theme-toggle");
    if (!icon) return;

    const THEME_KEY = "shop-theme";

    function applyTheme(theme) {
        // базовий клас
        if (theme === "dark") {
            body.classList.add("dark-mode");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            body.classList.remove("dark-mode");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }

        // фон головного блоку
        const homeSection = document.getElementById("home");
        if (homeSection) {
            const lightBg = homeSection.getAttribute("data-light");
            const darkBg  = homeSection.getAttribute("data-dark");

            if (theme === "dark" && darkBg) {
                homeSection.style.backgroundImage = `url('${darkBg}')`;
            } else if (lightBg) {
                homeSection.style.backgroundImage = `url('${lightBg}')`;
            }
        }

        // картинки блогу
        const blogImages = document.querySelectorAll(".blog-img");
        blogImages.forEach((img) => {
            const lightSrc = img.getAttribute("data-light");
            const darkSrc  = img.getAttribute("data-dark");

            if (theme === "dark" && darkSrc) {
                img.src = darkSrc;
            } else if (lightSrc) {
                img.src = lightSrc;
            }
        });
    }

    let saved   = localStorage.getItem(THEME_KEY);
    let current = saved === "dark" ? "dark" : "light";

    applyTheme(current);

    icon.addEventListener("click", function () {
        current = current === "dark" ? "light" : "dark";
        localStorage.setItem(THEME_KEY, current);
        applyTheme(current);
    });
}



