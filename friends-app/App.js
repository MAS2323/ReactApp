import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import HomeScreen from './Screens/HomeScreen';
import ProfilScreen from './Screens/ProfilScreen';
import UserScreen from './Screens/UserScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';


const StackNav =() =>{
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        statusBarColor: "orange",
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#ffffff",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      <Stack.Screen name="Profile" component={ProfilScreen} />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );

}

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default  App;