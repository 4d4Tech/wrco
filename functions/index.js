const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const db = admin.firestore();

// Initialize Stripe with Secret Key (from environment variables or fallback)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_mock_secret_key_wrco";
const stripe = require("stripe")(stripeSecretKey);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

/**
 * Endpoint to create a Stripe Payment Intent for When Rocks Cry Out
 */
app.post("/createPaymentIntent", async (req, res) => {
  try {
    const { amount, currency = "usd", items = [], customerEmail } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid order amount specified." });
    }

    // Convert amount in USD dollars to cents for Stripe
    const amountInCents = Math.round(amount * 100);

    // Create Payment Intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency.toLowerCase(),
      receipt_email: customerEmail,
      description: "When Rocks Cry Out by Horace Butler - Official Edition Order",
      metadata: {
        itemCount: items.length.toString(),
        bookTitle: "When Rocks Cry Out",
        author: "Horace Butler"
      },
      automatic_payment_methods: {
        enabled: true
      }
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id
    });
  } catch (error) {
    console.error("Stripe payment intent creation error:", error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Webhook endpoint to listen for successful Stripe payment charges
 */
app.post("/webhook", async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    if (endpointSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } else {
      event = req.body;
    }
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout completion event
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
  }

  res.json({ received: true });
});

// Export HTTP Cloud Function
exports.api = onRequest({ cors: true, memory: "256MiB" }, app);
