import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottonTabNavigation from '../navigation/BottonTabNavigation'

const Stack = createNativeStackNavigator();

export default function Page() {

  return (
     <GestureHandlerRootView>
      <Stack.Navigator>
      <Stack.Screen name="BottonTabNavigation" component={BottonTabNavigation} 
      options={{headerShown: false}}
      />

    </Stack.Navigator>
    </GestureHandlerRootView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
