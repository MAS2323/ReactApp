import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/tabScreens/Feed";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notification";
import { Ionicons } from "@expo/vector-icons"; 
import Message from "./screens/tabScreens/Message";
const Tab = createBottomTabNavigator();

// Stack es una navegacion que se pone sobre otra pantalla 
//Stack
const Stack = createNativeStackNavigator()

//Tab
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarShowLabel: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";

          } else if (route.name === "Notification") {
            
            iconName = focused ? "notifications-sharp" : "notifications-outline";
          } else if (route.name === "Message") {

            iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
          } else if (route.name === "Settings") {

            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}



export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
