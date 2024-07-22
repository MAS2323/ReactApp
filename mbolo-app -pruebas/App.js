import "react-native-gesture-handler";
import LoginPage from "./src/screens/principal/LoginSceen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterPage from "./src/screens/principal/RegisterScreen";
import HomeScreen from "./src/screens/tabScreens/HomeScreen";
import Navigation from "./Navigation";
import TabGroup from "./Navigation";

export default function App() {

  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="HomeUi" component={TabGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
