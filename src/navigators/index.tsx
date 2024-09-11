import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/screens/HomeScreen";
import SplashScreen from "@/components/SplashScreen";
import Login from "@/screens/Login";
import MovieDetail from "@/screens/MovieDetail";
import NotInternet from "@/screens/NotInternet";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="NotInternet" component={NotInternet} />
    </Stack.Navigator>
  );
};

export default RootStackScreen;
