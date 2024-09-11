import React from "react";
import RootStackScreen from "@/navigators";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StoreProvider } from "@/mobx";

if (__DEV__) {
  import("./src/config/ReactotronConfig").then(() =>
    console.log("Reactotron Configurado!")
  );
}

function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#16171B",
    },
  };

  return (
    <StoreProvider>
      <NavigationContainer theme={MyTheme}>
        <RootStackScreen />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
