import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

const reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
  .configure({ name: "Transporte App" })
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate|socket\.io/,
    },
    editor: true,
    errors: { veto: (stackFrame: any) => false },
    overlay: false,
  })
  .connect();

if (__DEV__) {
  console.tron = reactotron;
  reactotron.clear();
  console.tron.log("Reactotron Configurado e Conectado!");
}

export default reactotron;
