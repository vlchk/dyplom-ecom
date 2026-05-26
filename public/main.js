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
    const cartIcon = document.querySelector("#cart-icon");
    const cart = document.querySelector(".cart");
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
    const section = button.closest(".sproduct") || document;
    const card = button.closest(".product") || section;

    const titleEl = card.querySelector(".product-title") || section.querySelector(".product-title");
    const priceEl = card.querySelector(".price") || section.querySelector(".price");

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

    const title = titleEl.textContent.trim();
    const price = priceEl.textContent.trim();
    const productImg = imgEl.src;
    const normalizedSize = (size || "").trim();

    // 1) Перевірка дубля по localStorage: title + size + productImg (колір)
    try {
        const stored = localStorage.getItem("cartItems");
        if (stored) {
            const items = JSON.parse(stored);
            const hasDuplicate = items.some(it =>
                (it.title || "").trim() === title &&
                (it.size || "").trim() === normalizedSize &&
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
            const sizeText = box.querySelector(".cart-size")?.textContent || "";
            const existingSize = sizeText.replace("Size:", "").trim();
            const existingImg = box.querySelector(".cart-img")?.src || "";

            if (
                existingTitle === title &&
                existingSize === normalizedSize &&
                existingImg === productImg
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
        const cartBox = cartBoxes[i];
        const priceElement = cartBox.getElementsByClassName("cart-price")[0];
        const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

        const price = parseFloat(priceElement.innerText.replace("грн", "").trim());
        const quantity = parseInt(quantityElement.value, 10) || 0;

        total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    const totalEl = document.querySelector(".total-price");
    if (totalEl) totalEl.innerText = total + " грн";

    localStorage.setItem("cartTotal", total);
}

// Зберегти корзину в localStorage
function saveCartItems() {
    const cartContent = document.querySelector(".cart-content");
    if (!cartContent) return;

    const cartBoxes = cartContent.getElementsByClassName("cart-box");
    const cartItems = [];

    for (let i = 0; i < cartBoxes.length; i++) {
        const cartBox = cartBoxes[i];
        const titleElement = cartBox.querySelector(".cart-product-title");
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".cart-quantity");
        const imgElement = cartBox.querySelector(".cart-img");
        const sizeElement = cartBox.querySelector(".cart-size");

        const item = {
            title: titleElement?.innerText || "",
            price: priceElement?.innerText || "",
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

            const cartBoxes = document.getElementsByClassName("cart-box");
            const cartBox = cartBoxes[cartBoxes.length - 1];
            const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            quantityElement.value = item.quantity;
        }
    }

    const cartTotal = localStorage.getItem("cartTotal");
    if (cartTotal) {
        const totalEl = document.querySelector(".total-price");
        if (totalEl) totalEl.innerHTML = cartTotal + " грн";
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
    if (type === "error") toast.classList.add("toast-error");
    if (type === "info") toast.classList.add("toast-info");

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
            const darkBg = homeSection.getAttribute("data-dark");

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
            const darkSrc = img.getAttribute("data-dark");

            if (theme === "dark" && darkSrc) {
                img.src = darkSrc;
            } else if (lightSrc) {
                img.src = lightSrc;
            }
        });
    }

    let saved = localStorage.getItem(THEME_KEY);
    let current = saved === "dark" ? "dark" : "light";

    applyTheme(current);

    icon.addEventListener("click", function () {
        current = current === "dark" ? "light" : "dark";
        localStorage.setItem(THEME_KEY, current);
        applyTheme(current);
    });
}



// Grocery hero slider

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

let currentHeroSlide = 0;
let heroSliderInterval;

function showHeroSlide(index) {
    if (!heroSlides.length || !heroDots.length) return;

    heroSlides.forEach((slide) => slide.classList.remove("active"));
    heroDots.forEach((dot) => dot.classList.remove("active"));

    heroSlides[index].classList.add("active");
    heroDots[index].classList.add("active");

    currentHeroSlide = index;
}

function nextHeroSlide() {
    const nextIndex = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(nextIndex);
}

function startHeroSlider() {
    heroSliderInterval = setInterval(nextHeroSlide, 4000);
}

function resetHeroSlider() {
    clearInterval(heroSliderInterval);
    startHeroSlider();
}

heroDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        const slideIndex = Number(dot.dataset.slide);
        showHeroSlide(slideIndex);
        resetHeroSlider();
    });
});

if (heroSlides.length && heroDots.length) {
    startHeroSlider();
}

const promoProductsSlider = document.getElementById("promoProductsSlider");

function renderPromoProducts() {
    if (!promoProductsSlider || typeof PROMO_PRODUCTS === "undefined") return;

    promoProductsSlider.innerHTML = PROMO_PRODUCTS.map((product) => {
        if (product.type === "more") {
            return `
        <a href="${product.link}" class="promo-more-card">
          <span>Більше товарів</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      `;
        }

        return `
      <div class="promo-product-card">
        <div class="promo-product-img-wrap">
          <img src="${product.image}" alt="${product.name}">
          <span class="promo-label">${product.label}</span>
        </div>

        <h3>${product.name}</h3>

        <div class="promo-product-price">
          <span class="new-price">${product.price.toFixed(2)} грн</span>
          <span class="old-price">${product.oldPrice.toFixed(2)} грн</span>
        </div>

        <button class="promo-add-to-cart" data-id="${product.id}">
          У кошик
        </button>
      </div>
    `;
    }).join("");
}

renderPromoProducts();

document.addEventListener("click", function (e) {
    const button = e.target.closest(".promo-add-to-cart");
    if (!button) return;

    const productId = button.dataset.id;
    const product = PROMO_PRODUCTS.find((item) => item.id === productId);
    if (!product) return;

    const title = product.name;
    const price = product.price.toFixed(2) + " грн";
    const productImg = product.image;
    const size = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyInCart = cartItems.some((item) => {
        return item.title === title;
    });

    if (alreadyInCart) {
        showToast("Цей товар вже додано. Змініть кількість у кошику.", {
            type: "info",
            title: "Товар вже додано"
        });
        return;
    }

    addProductToCart(title, price, productImg, size);

    updateTotal();
    saveCartItems();
    updateCartIcon();

    showToast("Товар додано у кошик", {
        type: "success",
        title: "Додано"
    });
});
const promoArrowLeft = document.querySelector(".promo-arrow-left");
const promoArrowRight = document.querySelector(".promo-arrow-right");

if (promoProductsSlider && promoArrowLeft && promoArrowRight) {
    promoArrowLeft.addEventListener("click", () => {
        promoProductsSlider.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    });

    promoArrowRight.addEventListener("click", () => {
        promoProductsSlider.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    });
}

const categoryProductsContainer = document.getElementById("categoryProducts");
const sortProductsSelect = document.getElementById("sortProducts");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const applyFilterBtn = document.getElementById("applyFilterBtn");
const resetFilterBtn = document.getElementById("resetFilterBtn");
function getCurrentCategoryProducts() {
    if (document.body.classList.contains("milk-page")) {
        return typeof dairyProducts !== "undefined" ? dairyProducts : [];
    }

    if (document.body.classList.contains("meat-page")) {
        return typeof meatProducts !== "undefined" ? meatProducts : [];
    }

    if (document.body.classList.contains("drinks-page")) {
        return typeof drinksProducts !== "undefined" ? drinksProducts : [];
    }

    if (document.body.classList.contains("sweets-page")) {
        return typeof sweetsProducts !== "undefined" ? sweetsProducts : [];
    }

    return typeof CATEGORY_PRODUCTS !== "undefined" ? CATEGORY_PRODUCTS : [];
}

function getFilteredCategoryProducts() {
    const currentProducts = getCurrentCategoryProducts();

if (!currentProducts.length) return [];

let products = [...currentProducts];

    const checkedSubcategories = Array.from(
        document.querySelectorAll(".subcategory-filter:checked")
    ).map((input) => input.value);

    if (checkedSubcategories.length > 0) {
        products = products.filter((product) =>
            checkedSubcategories.includes(product.subcategory || product.category)
        );
    }

    const maxPrice = priceRange ? Number(priceRange.value) : 250;
    products = products.filter((product) => product.price <= maxPrice);

    const sortValue = sortProductsSelect ? sortProductsSelect.value : "popular";

    if (sortValue === "popular") {
        products.sort((a, b) => b.popularity - a.popularity);
    }

    if (sortValue === "price-asc") {
        products.sort((a, b) => a.price - b.price);
    }

    if (sortValue === "price-desc") {
        products.sort((a, b) => b.price - a.price);
    }

    return products;
}

function renderCategoryProducts() {
    if (!categoryProductsContainer) return;

    const products = getFilteredCategoryProducts();

    if (!products.length) {
        categoryProductsContainer.innerHTML = `
      <p class="category-empty">Товари не знайдено</p>
    `;
        return;
    }

    categoryProductsContainer.innerHTML = products.map((product) => `
    <div class="category-product-card">
      <a href="product.html?id=${product.id}" class="category-product-link">
  <div class="category-product-img">
    <img src="${product.image}" alt="${product.name}">
  </div>

  <h3>${product.name}</h3>
</a>

      <div class="category-product-price ${product.oldPrice ? 'red-price' : ''}">

    <div class="category-product-price-main">
    <span>${Number(product.price).toFixed(2)} грн</span>
    ${product.unit ? `<small>/${product.unit}</small>` : ""}
</div>

  ${product.oldPrice ? `
    <span class="category-product-old-price">
      ${Number(product.oldPrice).toFixed(2)} грн
    </span>
` : ""}

</div>

      <button class="category-add-to-cart" data-id="${product.id}">
        У кошик
      </button>
    </div>
  `).join("");
}

if (priceRange && priceValue) {
    priceRange.addEventListener("input", () => {
        priceValue.textContent = priceRange.value;
    });
}

if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", renderCategoryProducts);
}

if (sortProductsSelect) {
    sortProductsSelect.addEventListener("change", renderCategoryProducts);
}

if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
        document.querySelectorAll(".subcategory-filter").forEach((input) => {
            input.checked = false;
        });

        if (priceRange) priceRange.value = 250;
        if (priceValue) priceValue.textContent = "250";
        if (sortProductsSelect) sortProductsSelect.value = "popular";

        renderCategoryProducts();
    });
}

document.addEventListener("click", function (e) {
    const button = e.target.closest(".category-add-to-cart");
    if (!button) return;

    const productId = button.dataset.id;
    const allProducts = getSearchProductsSafe();

    const product = allProducts.find((item) => String(item.id) === String(productId));
    if (!product) return;

    const title = product.name;
    const price = product.price.toFixed(2) + " грн";
    const productImg = product.image;
    const size = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyInCart = cartItems.some((item) => {
        return item.title === title;
    });

    if (alreadyInCart) {
        showToast("Цей товар вже є у кошику. Змініть кількість у кошику.", {
            type: "info",
            title: "Товар вже додано"
        });
        return;
    }

    addProductToCart(title, price, productImg, size);

    updateTotal();
    saveCartItems();
    updateCartIcon();

    showToast("Товар додано у кошик", {
        type: "success",
        title: "Додано"
    });
});

renderCategoryProducts();

const marketCatalog = document.querySelector(".market-catalog");

if (marketCatalog) {
    const catalogDropdown = marketCatalog.querySelector(".catalog-dropdown");

    marketCatalog.addEventListener("click", function (e) {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            e.stopPropagation();

            marketCatalog.classList.toggle("open");
        }
    });

    if (catalogDropdown) {
        catalogDropdown.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    }

    document.addEventListener("click", function () {
        marketCatalog.classList.remove("open");
    });
}

// =======================
// PRODUCT PAGE
// =======================

// =======================
// PRODUCT PAGE
// =======================

const productDetails = document.getElementById("productDetails");
const relatedProductsContainer = document.getElementById("relatedProducts");

function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function getAllStoreProducts() {
    return [
        ...(typeof CATEGORY_PRODUCTS !== "undefined" ? CATEGORY_PRODUCTS : []),
        ...(typeof dairyProducts !== "undefined" ? dairyProducts : []),
        ...(typeof meatProducts !== "undefined" ? meatProducts : []),
        ...(typeof drinksProducts !== "undefined" ? drinksProducts : []),
        ...(typeof sweetsProducts !== "undefined" ? sweetsProducts : [])
    ];
}

function getProductCategoryData(product) {
    const id = String(product.id);

    if (typeof dairyProducts !== "undefined" &&
        dairyProducts.some((item) => String(item.id) === id)) {
        return {
            link: "milk-products.html",
            name: "Молокопродукти, яйця"
        };
    }

    if (typeof meatProducts !== "undefined" &&
        meatProducts.some((item) => String(item.id) === id)) {
        return {
            link: "meat.html",
            name: "М’ясо та ковбаси"
        };
    }

    if (typeof drinksProducts !== "undefined" &&
        drinksProducts.some((item) => String(item.id) === id)) {
        return {
            link: "drinks.html",
            name: "Напої"
        };
    }

    if (typeof sweetsProducts !== "undefined" &&
    sweetsProducts.some((item) => String(item.id) === id)) {
    return {
        link: "sweets.html",
        name: "Солодощі"
    };
}
    

    return {
        link: "vegetables.html",
        name: "Овочі, фрукти, гриби"
    };
}

function renderProductPage() {
    if (!productDetails) return;

    const productId = getProductIdFromUrl();
    const allProducts = getAllStoreProducts();

    const product = allProducts.find(
        (item) => String(item.id) === String(productId)
    );

    if (!product) {
        productDetails.innerHTML = `
            <p>Товар не знайдено</p>
        `;
        return;
    }

    const productBreadcrumb = document.getElementById("productBreadcrumb");
    const categoryData = getProductCategoryData(product);

    if (productBreadcrumb) {
        productBreadcrumb.innerHTML = `
            <a href="index.html"><i class="fas fa-home"></i></a>
            <span>></span>
            <a href="${categoryData.link}">${categoryData.name}</a>
        `;
    }

    productDetails.innerHTML = `
        <div class="product-image-main">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info-main">
            <h1>${product.name}</h1>

            <div class="product-price-main">
                ${Number(product.price).toFixed(2)} грн
                ${product.unit ? `<small>/${product.unit}</small>` : ""}
            </div>

            <button class="product-add-btn" data-id="${product.id}">
                У кошик
            </button>

            ${product.description ? `
                <div class="product-description">
                    <strong>Опис товару</strong><br><br>
                    ${product.description}
                </div>
            ` : ""}
        </div>
    `;

    renderRelatedProducts(product);
}

function renderRelatedProducts(currentProduct) {
    if (!relatedProductsContainer) return;

    const allProducts = getAllStoreProducts();
    const currentCategory = currentProduct.subcategory || currentProduct.category;

    let related = allProducts
        .filter((item) =>
            String(item.id) !== String(currentProduct.id) &&
            (item.subcategory || item.category) === currentCategory
        )
        .slice(0, 4);

    if (!related.length) {
        related = allProducts
            .filter((item) => String(item.id) !== String(currentProduct.id))
            .slice(0, 4);
    }

    relatedProductsContainer.innerHTML = related.map((product) => `
        <div class="related-product-card">
            <a href="product.html?id=${product.id}">
                <div class="related-product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <h3>${product.name}</h3>

                <div class="related-product-price">
                    ${Number(product.price).toFixed(2)} грн
                    ${product.unit ? `/${product.unit}` : ""}
                </div>
            </a>
        </div>
    `).join("");
}

document.addEventListener("click", function (e) {
    const button = e.target.closest(".product-add-btn");
    if (!button) return;

    const productId = button.dataset.id;
    const allProducts = getAllStoreProducts();

    const product = allProducts.find(
        (item) => String(item.id) === String(productId)
    );

    if (!product) return;

    const title = product.name;
    const price = Number(product.price).toFixed(2) + " грн";
    const productImg = product.image;
    const size = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyInCart = cartItems.some((item) => {
        return item.title === title;
    });

    if (alreadyInCart) {
        showToast("Цей товар вже є у кошику. Змініть кількість у кошику.", {
            type: "info",
            title: "Товар вже додано"
        });
        return;
    }

    addProductToCart(title, price, productImg, size);

    updateTotal();
    saveCartItems();
    updateCartIcon();

    showToast("Товар додано у кошик", {
        type: "success",
        title: "Додано"
    });
});

renderProductPage();

const promotionsGroups = document.getElementById("promotionsGroups");

function renderPromotionsPage() {
    if (!promotionsGroups) return;

    const allProducts = getAllStoreProducts();

    const promoProducts = allProducts.filter((product) => product.oldPrice);

    const groups = {
        "Овочі та фрукти": promoProducts.filter((p) =>
            CATEGORY_PRODUCTS?.some((item) => String(item.id) === String(p.id))
        ),
        "Молокопродукти, яйця": promoProducts.filter((p) =>
            dairyProducts?.some((item) => String(item.id) === String(p.id))
        ),
        "М’ясо та ковбаси": promoProducts.filter((p) =>
            meatProducts?.some((item) => String(item.id) === String(p.id))
        ),
        "Напої": promoProducts.filter((p) =>
            drinksProducts?.some((item) => String(item.id) === String(p.id))
        ),
        "Солодощі": promoProducts.filter((p) =>
            sweetsProducts?.some((item) => String(item.id) === String(p.id))
        )
    };

    promotionsGroups.innerHTML = Object.entries(groups)
        .filter(([, products]) => products.length)
        .map(([title, products]) => `
            <div class="promotion-category-block">
                <h2>${title}</h2>

                <div class="promotion-products-grid">
                    ${products.map((product) => `
                        <div class="category-product-card">
                            <a href="product.html?id=${product.id}" class="category-product-link">
                                <div class="category-product-img">
                                    <img src="${product.image}" alt="${product.name}">
                                </div>

                                <h3>${product.name}</h3>
                            </a>

                            <div class="category-product-price red-price">
                                <div class="category-product-price-main">
                                    <span>${Number(product.price).toFixed(2)} грн</span>
                                    ${product.unit ? `<small>/${product.unit}</small>` : ""}
                                </div>

                                <span class="category-product-old-price">
                                    ${Number(product.oldPrice).toFixed(2)} грн
                                </span>
                            </div>

                            <button class="category-add-to-cart" data-id="${product.id}">
                                У кошик
                            </button>
                        </div>
                    `).join("")}
                </div>
            </div>
        `).join("");
}

renderPromotionsPage();

const promotionsProducts = document.getElementById("promotionsProducts");
const promoCategoryButtons = document.querySelectorAll(".promo-category-btn");

function getPromoProductsByCategory(categoryKey = "all") {
    const groups = {
        vegetables: typeof CATEGORY_PRODUCTS !== "undefined" ? CATEGORY_PRODUCTS : [],
        milk: typeof dairyProducts !== "undefined" ? dairyProducts : [],
        meat: typeof meatProducts !== "undefined" ? meatProducts : [],
        drinks: typeof drinksProducts !== "undefined" ? drinksProducts : [],
        sweets: typeof sweetsProducts !== "undefined" ? sweetsProducts : []
    };

    if (categoryKey === "all") {
        return Object.values(groups)
            .flat()
            .filter((product) => product.oldPrice);
    }

    return (groups[categoryKey] || []).filter((product) => product.oldPrice);
}

function renderPromotionsProducts(categoryKey = "all") {
    if (!promotionsProducts) return;

    const products = getPromoProductsByCategory(categoryKey);

    if (!products.length) {
        promotionsProducts.innerHTML = `<p class="category-empty">Акційні товари не знайдено</p>`;
        return;
    }

    promotionsProducts.innerHTML = products.map((product) => `
        <div class="category-product-card">
            <a href="product.html?id=${product.id}" class="category-product-link">
                <div class="category-product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <h3>${product.name}</h3>
            </a>

            <div class="category-product-price red-price">
                <div class="category-product-price-main">
                    <span>${Number(product.price).toFixed(2)} грн</span>
                    ${product.unit ? `<small>/${product.unit}</small>` : ""}
                </div>

                <span class="category-product-old-price">
                    ${Number(product.oldPrice).toFixed(2)} грн
                </span>
            </div>

            <button class="category-add-to-cart" data-id="${product.id}">
                У кошик
            </button>
        </div>
    `).join("");
}

promoCategoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        promoCategoryButtons.forEach((item) => item.classList.remove("active"));
        btn.classList.add("active");

        renderPromotionsProducts(btn.dataset.promoCategory);
    });
});

renderPromotionsProducts();

const thirdDeliveryDay = document.getElementById("thirdDeliveryDay");

if (thirdDeliveryDay) {

    const days = [
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четвер",
        "Пʼятниця",
        "Субота"
    ];

    const today = new Date();

    const thirdDayIndex = (today.getDay() + 2) % 7;

    thirdDeliveryDay.textContent = days[thirdDayIndex];
}

const productSearchForm = document.getElementById("productSearchForm");
const productSearchInput = document.getElementById("productSearchInput");

function getSearchProductsSafe() {
    return [
        ...(typeof CATEGORY_PRODUCTS !== "undefined" ? CATEGORY_PRODUCTS : []),
        ...(typeof dairyProducts !== "undefined" ? dairyProducts : []),
        ...(typeof meatProducts !== "undefined" ? meatProducts : []),
        ...(typeof drinksProducts !== "undefined" ? drinksProducts : []),
        ...(typeof sweetsProducts !== "undefined" ? sweetsProducts : [])
    ];
}

if (productSearchForm && productSearchInput) {

    productSearchForm.onsubmit = function (e) {
        e.preventDefault();

        const query = productSearchInput.value.trim();

        if (!query) return;

        window.location.href =
            "search.html?q=" + encodeURIComponent(query);
    };

}

const searchProducts = document.getElementById("searchProducts");
const searchTitle = document.getElementById("searchTitle");

function renderSearchPage() {
    if (!searchProducts) return;

    const params = new URLSearchParams(window.location.search);
    const query = (params.get("q") || "").trim().toLowerCase();

    if (searchTitle) {
        searchTitle.textContent = query
            ? `Результати пошуку: ${params.get("q")}`
            : "Результати пошуку";
    }

    if (!query) {
        searchProducts.innerHTML =
            `<p class="category-empty">Введіть назву товару для пошуку</p>`;
        return;
    }

    const allProducts = getSearchProductsSafe();

    const results = allProducts.filter((product) => {
        const name = (product.name || "").toLowerCase();
        const category = (
            product.category ||
            product.subcategory ||
            ""
        ).toLowerCase();

        return (
            name.includes(query) ||
            category.includes(query)
        );
    });

    if (!results.length) {
        searchProducts.innerHTML =
            `<p class="category-empty">Товарів не знайдено</p>`;
        return;
    }

    searchProducts.innerHTML = results.map((product) => `
        <div class="category-product-card">
            <a href="product.html?id=${product.id}" class="category-product-link">
                <div class="category-product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>

                <h3>${product.name}</h3>
            </a>

            <div class="category-product-price ${product.oldPrice ? 'red-price' : ''}">
                <div class="category-product-price-main">
                    <span>${Number(product.price).toFixed(2)} грн</span>
                    ${product.unit ? `<small>/${product.unit}</small>` : ""}
                </div>

                ${product.oldPrice ? `
                    <span class="category-product-old-price">
                        ${Number(product.oldPrice).toFixed(2)} грн
                    </span>
                ` : ""}
            </div>

            <button class="category-add-to-cart" data-id="${product.id}">
                У кошик
            </button>
        </div>
    `).join("");
}

renderSearchPage();

const reviewsList = document.getElementById("reviewsList");
const reviewsPagination = document.getElementById("reviewsPagination");

const reviewsData = [
    {
        name: "Олена Кравчук",
        date: "14.05.2026",
        text: "Замовляла продукти вперше. Все привезли вчасно, овочі свіжі, кур’єр ввічливий. Дуже зручно, коли немає часу йти в магазин."
    },
    {
        name: "Ігор Мельник",
        date: "09.05.2026",
        text: "Хороший сервіс. Замовлення зібрали швидко, по телефону уточнили заміну одного товару. Все прийшло акуратно запаковане."
    },
    {
        name: "Марія Бондар",
        date: "02.05.2026",
        text: "Сподобалось, що можна швидко знайти товари через пошук. Молочні продукти були з нормальними строками придатності, доставка без затримок."
    },
    {
        name: "Андрій Савчук",
        date: "27.04.2026",
        text: "Замовляв м’ясо, напої та солодощі. Якість хороша, ціни відповідають сайту. Було б добре додати більше товарів у майбутньому."
    },
    {
        name: "Наталія Романюк",
        date: "21.04.2026",
        text: "Дуже виручає доставка після роботи. Кур’єр попередньо подзвонив, замовлення привезли у вибраний проміжок часу."
    },
    {
        name: "Вікторія Павлюк",
        date: "18.04.2026",
        text: "Зручно, що є категорії товарів і акції окремо. Додала кілька позицій у кошик, оплата пройшла без проблем."
    },
    {
        name: "Тарас Гнатюк",
        date: "10.04.2026",
        text: "Сайт простий і зрозумілий. Замовляв воду, фрукти і печиво. Все було в наявності, нічого не замінювали."
    },
    {
        name: "Софія Литвин",
        date: "04.04.2026",
        text: "Окремо дякую за акуратне пакування. Полуниця та яблука приїхали цілими, без пошкоджень."
    },
    {
        name: "Олександр Мороз",
        date: "28.03.2026",
        text: "Нормальний онлайн-магазин для щоденних покупок. Особливо зручно, що є сторінка з акційними товарами."
    },
    {
        name: "Катерина Шевчук",
        date: "20.03.2026",
        text: "Замовлення оформила швидко. Після підтвердження одразу було зрозуміло, коли чекати доставку."
    },
    {
        name: "Роман Петренко",
        date: "13.03.2026",
        text: "Брав товари з різних категорій. Кошик працює нормально, кількість можна змінити вже перед оплатою."
    },
    {
        name: "Юлія Коваль",
        date: "05.03.2026",
        text: "Гарний сервіс. Сподобалась сторінка товару з описом, бо можна швидко зрозуміти, що саме купуєш."
    },
    {
        name: "Дмитро Левченко",
        date: "26.02.2026",
        text: "Доставка приїхала без запізнення. Один товар був акційний, ціна в кошику підтягнулась правильно."
    },
    {
        name: "Ірина Поліщук",
        date: "18.02.2026",
        text: "Зручно користуватись з телефону. Каталог відкривається нормально, товари легко додавати в кошик."
    },
    {
        name: "Богдан Климчук",
        date: "09.02.2026",
        text: "Все добре. Замовляв продукти для дому, отримав повне замовлення без зайвих дзвінків і уточнень."
    }
];

let currentReviewsPage = 1;
const reviewsPerPage = 5;

function renderReviewsPage(page = 1) {
    if (!reviewsList || !reviewsPagination) return;

    currentReviewsPage = page;

    const start = (page - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    const pageReviews = reviewsData.slice(start, end);

    reviewsList.innerHTML = pageReviews.map((review) => `
        <div class="review-row">
            <div class="review-meta">
                <strong>${review.name}</strong>
                <span>${review.date}</span>
            </div>

            <div class="review-text">
                ${review.text}
            </div>
        </div>
    `).join("");

    const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

    reviewsPagination.innerHTML = `
        <button ${page === 1 ? "disabled" : ""} data-page="${page - 1}">«</button>

        ${Array.from({ length: totalPages }, (_, index) => `
            <button
                class="${page === index + 1 ? "active" : ""}"
                data-page="${index + 1}"
            >
                ${index + 1}
            </button>
        `).join("")}

        <button ${page === totalPages ? "disabled" : ""} data-page="${page + 1}">»</button>
    `;
}

if (reviewsPagination) {
    reviewsPagination.addEventListener("click", function (e) {
        const btn = e.target.closest("button");
        if (!btn || btn.disabled) return;

        renderReviewsPage(Number(btn.dataset.page));
    });
}

renderReviewsPage();