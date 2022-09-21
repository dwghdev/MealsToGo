import React from "react";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const CheckoutScreen = ({ navigation }) => (
  <SafeArea>
    <CreditCardInput />
  </SafeArea>
);
