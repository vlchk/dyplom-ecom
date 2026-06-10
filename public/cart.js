const payBtn = document.querySelector(".btn-buy");

if (payBtn) {
    payBtn.addEventListener("click", () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const totalPrice = localStorage.getItem("cartTotal") || "0";

        if (!cartItems.length) {
            alert("Кошик порожній");
            return;
        }

        const orders = JSON.parse(localStorage.getItem("sparOrders")) || [];

        orders.unshift({
            id: Date.now(),
            date: new Date().toLocaleString("uk-UA"),
            items: cartItems,
            total: totalPrice,
            status: "Нове"
        });

        localStorage.setItem("sparOrders", JSON.stringify(orders));

        fetch("/stripe-checkout", {
            method: "post",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                items: cartItems,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Stripe response:", data);

                const checkoutUrl = typeof data === "string" ? data : data.url;

                if (!checkoutUrl) {
                    console.error("Stripe URL не прийшов:", data);
                    return;
                }

                location.href = checkoutUrl;
                clearCart();
            })
            .catch((err) => console.log(err));
    });
}