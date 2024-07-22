// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import Add from "./src/screens/tabScreens/AddScreen";
// import MessageScreen from "./src/screens/tabScreens/MessageScreen";
// import PerfilScreen from "./src/screens/tabScreens/PerfilScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./src/screens/tabScreens/HomeScreen";
// import CustomDrawer from "./src/Components/CustomDrawer";
// import LoginPage from "./src/screens/principal/LoginSceen";
// import RegisterPage from "./src/screens/principal/RegisterScreen";
// import UpdateProfile from "./updateProfil/UpdateProfile";
// //Variables
// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// //Tab
// function TabGroup() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         // tabBarShowLabel: false,
//         tabBarIcon: ({ color, focused, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "Add") {
//             iconName = focused ? "add-circle" : "add-circle-sharp";
//           } else if (route.name === "Message") {
//             iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
//           } else if (route.name === "Perfil") {
//             iconName = focused ? "person" : "person-outline";
//           }
//           return <Ionicons name={iconName} color={color} size={size} />;
//         },
//       })}>
//       <Tab.Screen name="Home" component={DrawerNav} options={{headerShown: false}} />
//       <Tab.Screen name="Add" component={Add} />
//       <Tab.Screen name="Message" component={MessageScreen} />
//       <Tab.Screen name="Perfil" component={PerfilScreen} />
//     </Tab.Navigator>
//   );
// }

//   const LoginNav2 = () => {
//     return (
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="HomeUi" component={TabGroup} />
//         <Stack.Screen name="LoginUser" component={LogOut} />
//         <Stack.Screen
//           name="Actualizar Perfil"
//           component={UpdateProfile}
//           options={{
//             headerShown: true,
//           }}
//         />
//       </Stack.Navigator>
//     );
//   };

//   const LogOut =()=>{
//     return (
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="Register" component={RegisterPage} />
//       </Stack.Navigator>
//     );
//   }

// //Drawe Navegator
// const DrawerNav =()=>{
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       drawerContent={(props) => <CustomDrawer {...props} />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// }

//   const AdminStack = () => {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           options={{
//             statusBarColor: "#0163d2",
//             headerShown: true,
//             headerBackTitleVisible: false,
//             headerStyle: {
//               backgroundColor: "#0163d2",
//             },
//             headerTintColor: "#fff",
//             headerTitleAlign: "center",
//           }}
//           name="AdminScreen"
//           component={AdminScreen}
//         />
//         <Stack.Screen
//           options={{
//             headerShown: false,
//           }}
//           name="Login2"
//           component={LogOut}
//         />
//       </Stack.Navigator>
//     );
//   };
// // export default function Navigation() {
// //   return (
// //     <NavigationContainer>
// //       <TabGroup />
// //     </NavigationContainer>
// //   );
// // }

// export default LoginNav2;