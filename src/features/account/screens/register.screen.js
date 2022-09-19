import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountContainer,
  ErrorContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
          textContextType="emailAddress"
          onChangeText={u => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            secureTextEntry
            value={password}
            autoCapitalize="none"
            textContextType="password"
            onChangeText={p => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            secureTextEntry
            autoCapitalize="none"
            label="Repeat Password"
            value={repeatedPassword}
            textContextType="password"
            onChangeText={p => setRepeatedPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
            Register
          </AuthButton>
          ) : (
            <ActivityIndicator 
              animating={true}
              color={Colors.blue300}
            />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  )  
};


