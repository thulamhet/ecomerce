import { SafeAreaView, Text } from "react-native"
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login/LoginScreen";
import ForgotPassword from "./screens/Login/ForgotPasswordScreen";
import Register from "./screens/Login/RegisterScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      > 
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen  name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;