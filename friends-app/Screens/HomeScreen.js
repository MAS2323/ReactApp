import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
//   console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>React Navigation</Text>
      <Text style={styles.textStyle}>This is Home Screen</Text>
      <Button title="Profile" 
        onPress={() => props.navigation.navigate('Profile', {name: 'Mas Onewe'})}
    />
    </View>
  );
}

const styles = StyleSheet.create({

    viewStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle:{
        fontSize: 28,
        color: 'black'

    },
    headingStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'

    }


})