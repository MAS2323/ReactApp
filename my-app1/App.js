import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import * as Svg from "react-native-svg";
import ButtonGradient from "./ButtonGradient";
export default function App() {
  function SvgTop() {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <Path
          fill="#e7008a"
          fillOpacity={0.8}
          d="m0 160 21.8-16C43.6 128 87 96 131 112c43.5 16 87 80 131 106.7C305.5 245 349 235 393 208c43.4-27 87-69 131-85.3 43.3-15.7 87-5.7 131 16 43.2 21.3 87 53.3 130 48 44.1-5.7 88-47.7 131-48 44 .3 88 42.3 131 32 43.9-10.7 88-74.7 131-64 43.8 10.3 87 96.3 131 128 43.7 32.3 87 10.3 109 0l22-10.7V0H0Z"
        />
      </Svg>
    );
  }

  return (
    <View style={styles.container}>\
    
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sing in to your account</Text>

      <TextInput placeholder="masonewe@gmail.com" style={styles.textInput} />
      <TextInput placeholder="password" style={styles.textInput} 
        secureTextEntry={true}
      />

      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <ButtonGradient />
      <Text style={styles.forgotPassword}>Don't have an account?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet nos permite crear estilos para nuestros componentes

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
  },
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    color: "#344340",
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 20,
    color: "gray",
  },

  textInput: {
    //borderWidth: 1,
    //borderColor: "gray",
    paddingStart: 30,
    padding: 10,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    fontSize: 14,
    color: "gray",
    marginTop: 20,
  },
});
