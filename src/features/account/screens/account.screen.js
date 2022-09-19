import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { 
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Title>Meals To Go</Title>
        <AuthButton 
          icon="account"
          mode="contained" 
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton 
            icon="email"
            mode="contained" 
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground> 
  )  
};
