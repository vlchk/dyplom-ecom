import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const app = express();
app.use(express.json());

const stripeGateway = new Stripe(process.env.STRIPE_API_SECRET);
const DOMAIN = process.env.DOMAIN || "http://localhost:3000";

// ---------- ROUTES ----------

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
  try {
    const items = req.body.items || [];

    console.log("=== STRIPE CHECKOUT ITEMS ===");
    console.dir(items, { depth: null });

    const lineItems = items.map((item) => {
      const rawPrice = String(item.price || "");
      const priceNumber = parseFloat(rawPrice.replace(/[^0-9.]/g, "")) || 0;
      const unitAmount = Math.round(priceNumber * 100);

      const size = (item.size || "").trim();
      const sizeLabel = size ? ` (Size: ${size})` : "";

      return {
        price_data: {
          currency: "usd",
          product_data: {
            // ✅ Чиста назва + розмір — без TEST
            name: `${item.title}${sizeLabel}`,
            images: item.productImg ? [item.productImg] : [],
          },
          unit_amount: unitAmount,
        },
        quantity: parseInt(item.quantity, 10) || 1,
      };
    });

    const session = await stripeGateway.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${DOMAIN}/success`,
      cancel_url: `${DOMAIN}/cancel`,
      line_items: lineItems,
      billing_address_collection: "required",

      metadata: {
        items: JSON.stringify(
          items.map((i) => ({
            title: i.title,
            size: (i.size || "").trim(),
            quantity: i.quantity,
          }))
        ),
      },
    });

    res.json(session.url);
  } catch (err) {
    console.error("Stripe checkout error:", err);
    res.status(500).json({ error: "Stripe checkout failed" });
  }
});

// ---------- START SERVER ----------

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
