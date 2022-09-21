import createStripe from "stripe-client";

const stripe = createStripe("pk_test_51LkOG8B0cuFG0u2YZjwXJneH8lkQAa30tFQpMYB1LGRhGaxxp9xIm7pkm2gqbt3Y1i6SoHbqK5GEmzP8kSAWuWiq00nFMdBTTP");

export const cardTokenRequest = card => stripe.createToken({ card });
