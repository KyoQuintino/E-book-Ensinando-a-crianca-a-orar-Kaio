import Stripe from "stripe";
import { buildCheckoutSessionParams, type CheckoutUser } from "./products";

let stripeClient: Stripe | null = null;

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("Stripe is not configured. Add STRIPE_SECRET_KEY in Settings → Payment.");
  }
  stripeClient ??= new Stripe(secretKey);
  return stripeClient;
}

export async function createEbookCheckoutSession(origin: string, user: CheckoutUser) {
  const stripe = getStripeClient();
  return stripe.checkout.sessions.create(buildCheckoutSessionParams(origin, user));
}

export function verifyStripeWebhook(rawBody: Buffer, signature: string | undefined) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error("Stripe webhook is not configured. Add STRIPE_WEBHOOK_SECRET in Settings → Payment.");
  }
  if (!signature) {
    throw new Error("Missing Stripe-Signature header.");
  }
  return getStripeClient().webhooks.constructEvent(rawBody, signature, webhookSecret);
}
