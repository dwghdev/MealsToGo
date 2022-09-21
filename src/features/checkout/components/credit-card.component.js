import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe("pk_test_51LkOG8B0cuFG0u2YZjwXJneH8lkQAa30tFQpMYB1LGRhGaxxp9xIm7pkm2gqbt3Y1i6SoHbqK5GEmzP8kSAWuWiq00nFMdBTTP
");

export const CreditCardInput = () => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values().includes("incomplete");
    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "24",
      cvc: "244",
      name: "Mo",
    };
    const info = await stripe.createToken({ card });
    console.log(info);
  };

  return (
    <LiteCreditCardInput onChange={onChange} />
  );
};
