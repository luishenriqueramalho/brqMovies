import Input from "@/components/Input";
import NavigationBar from "@/components/NavigationBar";
import React, { useEffect, useState } from "react";
import {
  ClickPassword,
  Header,
  Logo,
  SepareButton,
  SepareInput,
  TitlePassword,
} from "./styles";
import LogoBRQ from "@/assets/imgs/splash.png";
import { Wrapper } from "@/utils/global";
import { PasswordIcon, ProfileIcon } from "@/assets/svgs";
import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onContinuePress = () => {
    if (user !== "user" && password !== "123") {
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <>
      <NavigationBar />
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
              />
              <SepareInput>
                <Input
                  placeholder="Senha"
                  icon={<PasswordIcon />}
                  onChangeText={(pass: string) => setPassword(pass)}
                  secureTextEntry
                  keyboardType="numeric"
                />
              </SepareInput>
              <SepareButton>
                <Button onPress={() => onContinuePress()} />
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
