import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import { createNativeStackNavigator } from "@react-navigation/native-stack";    
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";


const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return (
      <HomeStackNavigator.Navigator
        initialRouteName="HomeScreen"
      
      >
        <HomeStackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        />
        <HomeStackNavigator.Screen 
        name="Stack" 
        component={StackScreen}
        options={{
           //headerShown: false,
            headerBackTitleVisible: false
        }} 
        />
      </HomeStackNavigator.Navigator>
    );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "purple",
        }}>
        <Tab.Screen
          name="Home"
          component={MyStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-circle"
                size={30}
                color="black"
              />
            ),
            tabBarBadge: 1,
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="brightness-5"
                size={30}
                color="black"
              />
            ),
            //headerShown: false
          }}
        />
      </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}