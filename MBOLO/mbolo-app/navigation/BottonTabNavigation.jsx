import {Home, Profile, Add, Message} from '../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { Ionicons } from "@expo/vector-icons";
import {COLORS} from '../constants/theme'

import React from 'react';
import { StyleSheet, View } from 'react-native';

const BottonTabNavigation = () => {
    return (
       <Tab.Navigator  screenOptions={({ route }) => ({
          // tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Add") {
              iconName = focused ? "add-circle-sharp" : "add-circle-outline";
            } else if (route.name === "Message") {
              iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} color={COLORS.primary} size={size} />;
          },
          headerShown: false,
          tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 70
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Add}/>
      <Tab.Screen name="Message" component={Message}/>
      <Tab.Screen name="Perfil" component={Profile}/>
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default BottonTabNavigation;
