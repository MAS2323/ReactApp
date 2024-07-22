import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function ProfilScreen(props) {
    // console.log(props)
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.route.params.name}</Text>
      <Button
        title="User"
        onPress={() =>
          props.navigation.navigate("User")
        }
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: "black",
  },
  headingStyle: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
