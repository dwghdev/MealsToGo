import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name = "Dale" }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values().includes("incomplete");
    const expiry = values.expiry.split("/");

    console.log(expiry);
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
    };
    const info = await cardTokenRequest({ card });
    console.log(info)
  };

  return (
    <LiteCreditCardInput onChange={onChange} />
  );
};
