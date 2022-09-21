import React from "react";
import { Avatar, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const CartIconContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({ 
  size: 128,
})`
  background-color: ${props => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
  margin: ${props => props.theme.space[3]};
`;

