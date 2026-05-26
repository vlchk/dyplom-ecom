const payBtn = document.querySelector(".btn-buy");

if (payBtn) {
    payBtn.addEventListener("click", () => {
        fetch("/stripe-checkout", {
            method: "post",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify({
                items: JSON.parse(localStorage.getItem("cartItems")),
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
