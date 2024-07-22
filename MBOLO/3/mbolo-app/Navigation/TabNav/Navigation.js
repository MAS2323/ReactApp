import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../src/screens/tabScreens/HomeScreen";
import Notifications from "../../src/screens/tabScreens/NotificationScreen";
import { Ionicons } from "@expo/vector-icons";
import Add from "../../src/screens/tabScreens/AddScreen";
import MessageScreen from "../../src/screens/tabScreens/MessageScreen";
import PerfilScreen from "../../src/screens/tabScreens/PerfilScreen";

//Variables
const Tab = createBottomTabNavigator();

//Tab
export default function TabGroup() {
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
          } else if (route.name === "Yo") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Yo" component={PerfilScreen} />
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

// export default TabGroup;