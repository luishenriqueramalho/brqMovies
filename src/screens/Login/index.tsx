import Input from "@/components/Input";
import React, { useState } from "react";
import {
  ClickPassword,
  Header,
  Logo,
  SepareButton,
  SepareInput,
  TitlePassword,
  ErrorText,
} from "./styles";
import LogoBRQ from "@/assets/imgs/splash.png";
import { Wrapper } from "@/utils/global";
import { PasswordIcon, ProfileIcon } from "@/assets/svgs";
import Button from "@/components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigators/types";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onContinuePress = () => {
    setLoading(true);
    setTimeout(() => {
      if (user === "user" && password === "123") {
        setError("");
        navigation.navigate("HomeScreen");
      } else {
        setError("Usuário ou senha incorretos!");
      }
      setLoading(false);
    }, 1000);
  };

  const isButtonDisabled = user.trim() === "" || password.trim() === "";

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Wrapper>
              <Header>
                <Logo source={LogoBRQ} />
              </Header>
              <Input
                placeholder="Usuário"
                icon={<ProfileIcon />}
                onChangeText={(user: string) => setUser(user)}
                testID="input-user"
              />
              <SepareInput>
                <Input
                  placeholder="Senha"
                  icon={<PasswordIcon />}
                  onChangeText={(pass: string) => setPassword(pass)}
                  secureTextEntry
                  keyboardType="numeric"
                  testID="input-password"
                />
              </SepareInput>

              {error ? <ErrorText>{error}</ErrorText> : null}

              <SepareButton>
                <Button
                  title={loading ? "Entrando..." : "Entrar"}
                  onPress={() => onContinuePress()}
                  disabled={isButtonDisabled || loading}
                />
              </SepareButton>
              <ClickPassword>
                <TitlePassword>Esqueci a Senha</TitlePassword>
              </ClickPassword>
            </Wrapper>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
