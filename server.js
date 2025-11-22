import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";

// завантажуємо змінні середовища
dotenv.config();

// старт сервера
const app = express();
app.use(express.json());

// Stripe
const stripeGateway = new Stripe(process.env.STRIPE_API_SECRET);
const DOMAIN = process.env.DOMAIN;

// далі твій код...
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.use(express.static("public"));

app.get("/success", (req, res) => {
  res.sendFile("success.html", { root: "public" });
});

app.get("/cancel", (req, res) => {
  res.sendFile("cancel.html", { root: "public" });
});

app.post("/stripe-checkout", async (req, res) => {
  const lineItems = req.body.items.map((item) => {
    const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, "") * 100);

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.productImg],
        },
        unit_amount: unitAmount,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripeGateway.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${DOMAIN}/success`,
    cancel_url: `${DOMAIN}/cancel`,
    line_items: lineItems,
    billing_address_collection: "required",
  });

  res.json(session.url);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
