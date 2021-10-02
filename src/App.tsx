import { SafeAreaView, Text } from "react-native"
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import ItemDetail from "./screens/ItemDetail";
import Login from "./screens/Login/LoginScreen";
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
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;