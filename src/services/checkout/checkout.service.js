import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe("pk_test_51LkOG8B0cuFG0u2YZjwXJneH8lkQAa30tFQpMYB1LGRhGaxxp9xIm7pkm2gqbt3Y1i6SoHbqK5GEmzP8kSAWuWiq00nFMdBTTP");

export const cardTokenRequest = card => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then(res => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
