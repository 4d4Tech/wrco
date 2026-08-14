import { loadStripe } from '@stripe/stripe-js';

// Publishable Key (Replace with live Stripe key when deploying to production)
// Using standard test publishable key for seamless local simulation & testing
export const STRIPE_PUBLISHABLE_KEY = "pk_test_51OGEXAMPLEKEY0000000000000000000000000000000000000000000000000000000000000000000000000000000000";

let stripePromise = null;

export const getStripe = () => {
  if (!stripePromise) {
    // Only load if valid format key or fallback to mocked object in dev
    try {
      stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
    } catch (e) {
      console.warn('Stripe initialization fallback:', e);
    }
  }
  return stripePromise;
};

/**
 * Creates a Stripe Payment Intent either via Firebase Cloud Function or local simulation
 */
export async function createPaymentIntent({ amount, currency = 'usd', items, customerEmail }) {
  try {
    // Attempt Firebase Cloud Function endpoint if available
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency, items, customerEmail })
    });
    
    if (response.ok) {
      const data = await response.json();
      return { clientSecret: data.clientSecret, id: data.id };
    }
  } catch (error) {
    // Fallback to client-side simulated intent for testing
  }

  // Simulated client secret for seamless testing & demonstration
  return {
    clientSecret: `pi_mock_${Date.now()}_secret_${Math.random().toString(36).substring(2, 10)}`,
    id: `pi_mock_${Date.now()}`
  };
}
