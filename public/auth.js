const USERS_KEY = "sparUsers";
const CURRENT_USER_KEY = "sparCurrentUser";

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null;
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = "login.html";
}

function createDefaultAdmin() {
    const users = getUsers();

    const adminExists = users.some(user => user.email === "admin@spar.ua");

    if (!adminExists) {
        users.push({
            id: Date.now(),
            name: "Адміністратор",
            email: "admin@spar.ua",
            password: "123456",
            role: "admin"
        });

        saveUsers(users);
    }
}

createDefaultAdmin();

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value.trim();

        const users = getUsers();

        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert("Користувач з таким email вже існує");
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            role: "user"
        };

        users.push(newUser);
        saveUsers(users);
        setCurrentUser(newUser);

        window.location.href = "index.html";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();

        const users = getUsers();

        const user = users.find(
            user => user.email === email && user.password === password
        );

        if (!user) {
            alert("Невірний email або пароль");
            return;
        }

        setCurrentUser(user);

        if (user.role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "index.html";
        }
    });
}

if (
    window.location.pathname.includes("admin.html")
) {

    const currentUser = getCurrentUser();

    if (
        !currentUser ||
        currentUser.role !== "admin"
    ) {
        window.location.href = "login.html";
    }

}

const ADMIN_PRODUCTS_KEY = "adminProducts";
const ORDERS_KEY = "sparOrders";

function getOrders() {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
}

function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function getAdminProducts() {
    return JSON.parse(localStorage.getItem(ADMIN_PRODUCTS_KEY)) || [];
}

function saveAdminProducts(products) {
    localStorage.setItem(ADMIN_PRODUCTS_KEY, JSON.stringify(products));
}

const adminMenuItems = document.querySelectorAll(".admin-menu-item");
const adminTabs = document.querySelectorAll(".admin-tab");

adminMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
        const tab = item.dataset.tab;

        adminMenuItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");

        adminTabs.forEach((el) => el.classList.remove("active"));

        const currentTab = document.getElementById(`${tab}Tab`);
        if (currentTab) currentTab.classList.add("active");
    });
});
let editingProductId = null;
const adminProductForm = document.getElementById("adminProductForm");
const productsTableBody = document.getElementById("productsTableBody");

function renderAdminProducts() {
    if (!productsTableBody) return;

    const products = getAdminProducts();

    if (!products.length) {
        productsTableBody.innerHTML = `
            <tr>
                <td colspan="4">Товарів поки немає</td>
            </tr>
        `;
        return;
    }

    productsTableBody.innerHTML = products.map((product) => `
        <tr>
            <td>${product.name}</td>
            <td>${product.price} грн</td>
            <td>${product.category}</td>
            <td>
    <button class="admin-edit-btn" data-id="${product.id}">
        Редагувати
    </button>

    <button class="admin-delete-btn" data-id="${product.id}">
        Видалити
    </button>
</td>
        </tr>
    `).join("");
}

if (adminProductForm) {
    adminProductForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("adminProductName").value.trim();
        const price = document.getElementById("adminProductPrice").value.trim();
        const category = document.getElementById("adminProductCategory").value;
        const image = document.getElementById("adminProductImage").value.trim();

        const products = getAdminProducts();

        if (editingProductId) {
            const product = products.find((item) => item.id === editingProductId);

            if (product) {
                product.name = name;
                product.price = price;
                product.category = category;
                product.image = image;
            }

            editingProductId = null;

            const submitBtn = adminProductForm.querySelector("button[type='submit']");
            submitBtn.textContent = "Додати товар";
        } else {
            products.push({
                id: Date.now(),
                name,
                price,
                category,
                image
            });
        }

        saveAdminProducts(products);
        adminProductForm.reset();
        renderAdminProducts();
        renderAdminStats();
        renderAdminCategories();
    });
}

document.addEventListener("click", function (e) {
    const editBtn = e.target.closest(".admin-edit-btn");

    if (editBtn) {
        const id = Number(editBtn.dataset.id);
        const products = getAdminProducts();
        const product = products.find((item) => item.id === id);

        if (!product) return;

        editingProductId = id;

        document.getElementById("adminProductName").value = product.name;
        document.getElementById("adminProductPrice").value = product.price;
        document.getElementById("adminProductCategory").value = product.category;
        document.getElementById("adminProductImage").value = product.image;

        const submitBtn = adminProductForm.querySelector("button[type='submit']");
        submitBtn.textContent = "Зберегти";

        return;
    }

    const deleteBtn = e.target.closest(".admin-delete-btn");

    if (deleteBtn) {
        const id = Number(deleteBtn.dataset.id);

        const products = getAdminProducts().filter((product) => product.id !== id);

        saveAdminProducts(products);
        renderAdminProducts();
        renderAdminStats();
        renderAdminCategories();
    }
});

function renderAdminCategories() {
    const adminCategoriesList = document.getElementById("adminCategoriesList");
    if (!adminCategoriesList) return;

    const products = getAdminProducts();

    const categories = [
        "Овочі та фрукти",
        "Молокопродукти",
        "М’ясо та ковбаси",
        "Напої",
        "Солодощі"
    ];

    adminCategoriesList.innerHTML = categories.map((category) => {
        const count = products.filter((p) => p.category === category).length;

        return `
            <div class="admin-card">
                <strong>${category}</strong>
                <span>${count} товарів</span>
            </div>
        `;
    }).join("");
}

function renderAdminUsers() {
    const adminUsersList = document.getElementById("adminUsersList");
    if (!adminUsersList) return;

    const users = getUsers();

    adminUsersList.innerHTML = users.map((user) => `
        <div class="admin-card">
            <strong>${user.name}</strong>
            <span>${user.email}</span>
            <span>Роль: ${user.role}</span>
        </div>
    `).join("");
}

function renderAdminStats() {
    const adminStats = document.getElementById("adminStats");
    if (!adminStats) return;

    const products = getAdminProducts();
    const users = getUsers();
    const orders = getOrders();

    const totalSales = orders.reduce((sum, order) => {
        return sum + Number(order.total || 0);
    }, 0);

    const deliveredOrders = orders.filter(order => order.status === "Доставлено").length;
    const newOrders = orders.filter(order => order.status === "Нове").length;
    const cancelledOrders = orders.filter(order => order.status === "Скасовано").length;

    adminStats.innerHTML = `
        <div class="admin-stat-card">
            <span>Товарів додано</span>
            <strong>${products.length}</strong>
        </div>

        <div class="admin-stat-card">
            <span>Користувачів</span>
            <strong>${users.length}</strong>
        </div>

        <div class="admin-stat-card">
            <span>Замовлень</span>
            <strong>${orders.length}</strong>
        </div>

        <div class="admin-stat-card">
            <span>Сума продажів</span>
            <strong>${totalSales.toFixed(2)} грн</strong>
        </div>

        <div class="admin-stat-card">
            <span>Нові замовлення</span>
            <strong>${newOrders}</strong>
        </div>

        <div class="admin-stat-card">
            <span>Доставлено</span>
            <strong>${deliveredOrders}</strong>
        </div>

        <div class="admin-stat-card">
            <span>Скасовано</span>
            <strong>${cancelledOrders}</strong>
        </div>

        <div class="admin-stat-card">
            <span>Категорій</span>
            <strong>5</strong>
        </div>
    `;
}

renderAdminProducts();
renderAdminCategories();
renderAdminUsers();
renderAdminStats();




function getOrderStatusClass(status) {
    if (status === "Нове") return "status-new";
    if (status === "В обробці") return "status-progress";
    if (status === "Відправлено") return "status-sent";
    if (status === "Доставлено") return "status-delivered";
    if (status === "Скасовано") return "status-cancelled";

    return "";
}

function renderAdminOrders() {
    const table = document.getElementById("ordersTableBody");
    if (!table) return;

    const orders = getOrders();

    if (!orders.length) {
        table.innerHTML = `
            <tr>
                <td colspan="6">Замовлень поки немає</td>
            </tr>
        `;
        return;
    }

    table.innerHTML = orders.map((order) => {
        return `
            <tr>
                <td>${order.id}</td>
                <td>${order.date}</td>
                <td>${order.total} грн</td>
                <td>
                    <select class="admin-order-status ${getOrderStatusClass(order.status)}" data-id="${order.id}">
                        <option value="Нове" ${order.status === "Нове" ? "selected" : ""}>Нове</option>
                        <option value="В обробці" ${order.status === "В обробці" ? "selected" : ""}>В обробці</option>
                        <option value="Відправлено" ${order.status === "Відправлено" ? "selected" : ""}>Відправлено</option>
                        <option value="Доставлено" ${order.status === "Доставлено" ? "selected" : ""}>Доставлено</option>
                        <option value="Скасовано" ${order.status === "Скасовано" ? "selected" : ""}>Скасовано</option>
                    </select>
                </td>
                <td>
                    <button class="admin-view-order-btn" data-id="${order.id}">
                        Переглянути
                    </button>

                    <button class="admin-delete-order-btn" data-id="${order.id}">
                        Видалити
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

renderAdminOrders();

document.addEventListener("change", function (e) {
    const statusSelect = e.target.closest(".admin-order-status");
    if (!statusSelect) return;

    const id = Number(statusSelect.dataset.id);
    const orders = getOrders();

    const order = orders.find((item) => item.id === id);
    if (!order) return;

    order.status = statusSelect.value;

    saveOrders(orders);
    renderAdminOrders();
    renderAdminStats();
});

document.addEventListener("click", function (e) {

    const viewOrderBtn = e.target.closest(".admin-view-order-btn");

    if (viewOrderBtn) {

        const id = Number(viewOrderBtn.dataset.id);

        const orders = getOrders();

        const order = orders.find(item => item.id === id);

        if (!order) return;

        const itemsText = order.items
            .map(item => `${item.title} × ${item.quantity}`)
            .join("\n");

        const modal = document.getElementById("adminOrderModal");
        const modalTitle = document.getElementById("adminModalTitle");
        const modalBody = document.getElementById("adminModalBody");

        if (modal && modalTitle && modalBody) {
            modalTitle.textContent = `Замовлення #${order.id}`;

            modalBody.innerHTML = `
        <p><strong>Дата:</strong> ${order.date}</p>
        <p><strong>Статус:</strong> ${order.status}</p>

        <div class="admin-modal-items">
            ${order.items.map(item => `
                <div>${item.title} × ${item.quantity}</div>
            `).join("")}
        </div>

        <p><strong>Разом:</strong> ${order.total} грн</p>
    `;

            modal.classList.add("active");
        }

        return;
    }

    const deleteOrderBtn = e.target.closest(".admin-delete-order-btn");

    if (deleteOrderBtn) {

        const id = Number(deleteOrderBtn.dataset.id);

        const orders = getOrders().filter(
            order => order.id !== id
        );

        saveOrders(orders);
        renderAdminOrders();
        renderAdminStats();
    }
});

const adminOrderModal = document.getElementById("adminOrderModal");
const adminModalOk = document.getElementById("adminModalOk");

function closeAdminModal() {
    if (adminOrderModal) {
        adminOrderModal.classList.remove("active");
    }
}


if (adminModalOk) {
    adminModalOk.addEventListener("click", closeAdminModal);
}

if (adminOrderModal) {
    adminOrderModal.addEventListener("click", function (e) {
        if (e.target === adminOrderModal) {
            closeAdminModal();
        }
    });
}

function renderHeaderAuth() {
    const headerAuth = document.getElementById("headerAuth");
    if (!headerAuth) return;

    const currentUser = getCurrentUser();

    if (!currentUser) {
        headerAuth.innerHTML = `
            <a href="login.html" class="header-auth-link">Вхід</a>
            <a href="register.html" class="header-auth-link">Реєстрація</a>
        `;
        return;
    }

    headerAuth.innerHTML = `
        <a href="${currentUser.role === "admin" ? "admin.html" : "profile.html"}" class="header-auth-user">
            Мій кабінет
        </a>
    `;
}

renderHeaderAuth();

const profileInfo = document.getElementById("profileInfo");
const profileOrders = document.getElementById("profileOrders");

if (profileInfo) {
    const currentUser = getCurrentUser();

    if (!currentUser) {
        window.location.href = "login.html";
    } else {
        profileInfo.innerHTML = `
            <div class="profile-info-row">
                <span>Ім’я</span>
                <strong>${currentUser.name}</strong>
            </div>

            <div class="profile-info-row">
                <span>Email</span>
                <strong>${currentUser.email}</strong>
            </div>
        `;

        if (profileOrders) {
            const orders = JSON.parse(localStorage.getItem("sparOrders")) || [];

            if (!orders.length) {
                profileOrders.innerHTML = `
                    <p class="profile-empty">У вас поки немає замовлень</p>
                `;
            } else {
                profileOrders.innerHTML = orders.map((order) => `
                    <div class="profile-order-card">
                        <div>
                            <strong>Замовлення #${order.id}</strong>
                            <span>${order.date}</span>
                        </div>

                        <div>
                            <strong>${order.total} грн</strong>
                            <span>${order.status}</span>
                        </div>
                    </div>
                `).join("");
            }
        }
    }
}