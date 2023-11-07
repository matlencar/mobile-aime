import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonNav from "./ButtonNav";
import LoginScreen from "../pages/login"
import CadastrarScreen from "../pages/Cadastrar";
import Welcome from "../pages/welcome"


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName=""> 
    <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} /> 
    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
    <Stack.Screen name="Cadastro" component={CadastrarScreen} options={{headerShown: false}} />
    <Stack.Screen name="Button" component={ButtonNav} options={{headerShown: false}} />

    </Stack.Navigator>
  );
}
//Depois de ter testado as paginas de login e cadastro vc vai ter que mudar o initialRouteName para "Button" para testar a home e o perfil