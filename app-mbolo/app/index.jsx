import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import LoginPage from "../screens/principal/LoginSceen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterPage from "../screens/principal/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import SplashScreen from "react-native-splash-screen";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
// import LoginNav from "./src/Navigation/AuthStack";
import AddScreen from "../screens/tabScreens/AddScreen";
import MessageScreen from "../screens/tabScreens/MessageScreen";
import PerfilScreen from "../screens/tabScreens/PerfilScreen";
import UpdateProfile from "../updateProfil/UpdateProfile";
import HomeScreen from "../screens/tabScreens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../screens/categoryScreen";
import NewRivals from "../components/HomeScreen/NewRivals";
import ProductDetails from "../components/productos/ProductList";
import SearchScreen from "../components/HomeScreen/SearchScreen";

/*
  1. Create the config
*/
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: "green",
        borderLeftWidth: 7,
        width: "90%",
        height: 70,
        borderRightColor: "green",
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: "700",
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      text2NumberOfLines={3}
      style={{
        borderLeftColor: "red",
        borderLeftWidth: 7,
        width: "90%",
        height: 70,
        borderRightColor: "red",
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: "700",
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setuserType] = useState(false);

  async function getData() {
    const data = await AsyncStorage.getItem("isLoggedIn");
    const userType1 = await AsyncStorage.getItem("userType");
    console.log(data, "at app.js");
    setIsLoggedIn(data);
    setuserType(userType1);
  }

  useEffect(() => {
    getData();
    // setTimeout(() =>{
    //   SplashScreen.hide();
    // }, 900);
  }, []);

  //Variables
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  //Tab
  function TabGroup() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle" : "add-circle-sharp";
            } else if (route.name === "Message") {
              iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    );
  }

  const LoginNav2 = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeUi" component={TabGroup} />
        <Stack.Screen name="LoginUser" component={LogOut} />
        <Stack.Screen
          name="Actualizar Perfil"
          component={UpdateProfile}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="ProductList" component={NewRivals} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    );
  };

  const LogOut = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    );
  };

  //Drawe Navegator
  const DrawerNav = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Categorias" component={CategoriesScreen} />
      </Drawer.Navigator>
    );
  };

  const AdminStack = () => {
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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login2"
          component={LogOut}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer independent={true}>
      {/* {isLoggedIn ? <TabGroup/>: <LoginNav/>} */}
      {/* <LoginNav /> */}
      {/* {isLoggedIn && userType == "Admin" ? (
        <AdminStack />
      ) : isLoggedIn ? (
        <TabGroup />
      ) : (
        <LoginNav />
      )} */}
      <LoginNav2 />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}
