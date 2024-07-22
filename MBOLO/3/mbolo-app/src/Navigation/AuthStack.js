import React from "react";
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../screens/principal/LoginSceen";
import RegisterPage from "../screens/principal/RegisterScreen";
import AdminScreen from "../../AdminScreen";
import TabGroup from "../../Navigation";


  const LoginNav = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Home" component={TabGroup} />
        <Stack.Screen name="AdminScreen" component={AdminStack} />
      </Stack.Navigator>
    );
  };

  const AdminStack =()=>{
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            statusBarColor: "#0163d2",
            headerShown: true,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#0163d2",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
          name="AdminScreen"
          component={AdminScreen}
        />
        <Stack.Screen options={{
          headerShown: false
        }}name="Login2" component={LoginNav} />
      </Stack.Navigator>
    );
  }


export default AdminStack;

// export default LoginNav;