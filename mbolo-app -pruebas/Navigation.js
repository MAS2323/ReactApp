import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/tabScreens/HomeScreen";
import Notifications from "./src/screens/tabScreens/NotificationScreen";
import Message from "./src/screens/tabScreens/MessageScreen";
import Settings from "./src/screens/tabScreens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import Add from "./src/screens/tabScreens/AddScreen";
import SettinsScreen from "./src/screens/tabScreens/SettingsScreen";
import MessageScreen from "./src/screens/tabScreens/MessageScreen";

//Variables
const Tab = createBottomTabNavigator();

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
          } else if (route.name === "Notification") {
            iconName = focused
              ? "notifications-sharp"
              : "notifications-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle-sharp";
          } else if (route.name === "Message") {
            iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Settings" component={SettinsScreen} />
    </Tab.Navigator>
  );
}

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <TabGroup />
//     </NavigationContainer>
//   );
// }

export default TabGroup;