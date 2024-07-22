import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import styles from "./Register.style";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";

function LoginPage({ props }) {
  const navigation = useNavigation(); //Este es el metodod que usamos para navegar
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const [error, setError] = useState({})
  const [input, setInput] = useState({
    email: '',
    password: ''
  })
  
  function handleSubmit(){
    console.log(email, password);
    const userData = {
      email: email,
      password, 
    };
    axios
      .post("http://192.168.100.235:3000/login-user", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "ok") {
          Alert.alert("Logged In Successfull");
          AsyncStorage.setItem("token", res.data.data); //Aqui esta el problema
          AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
          AsyncStorage.setItem("userType", res.data.userType);
          if (res.data.navigate == "Admin") {
            navigation.navigate("AdminScreen");
          } else {
            navigation.navigate("Home");
          }
        } else {
          // Alert.alert('Rellene todos los espacios')
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "Rellene todos los campos",
            visibilityTime: 5000,
          });
        }
      });
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"always"}>
     
        <View style={styles.container}>
          <View style={styles.topImageContainer}>
            <Image
              source={require("../assets/BACKGROUNDStrabajo1.png")}
              style={styles.topImage}
            />
          </View>
          <View style={styles.mboloContainer}>
            <Text style={styles.mboloText}>MBOLO</Text>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.text_header}>Login !!!</Text>
            <ScrollView>
              <View style={styles.action}>
                <FontAwesome
                  name="user-o"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Mobile or Email"
                  style={styles.textInput}
                  onChange={(e) => setEmail(e.nativeEvent.text)}
                />
              </View>
              <View style={styles.action}>
                <FontAwesome
                  name="lock"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  onChange={(e) => setPassword(e.nativeEvent.text)}
                />
              </View>
            </ScrollView>
            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginTop: 8,
                marginRight: 10,
              }}>
              <Text style={{ color: "#4c86A8", fontWeight: "700" }}>
                Forgot Password
              </Text>
            </View>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.inBut}
              onPress={() => handleSubmit()}>
              <View>
                <Text style={styles.textSign}>LogIn</Text>
              </View>
            </TouchableOpacity>
            <View style={{ padding: 15 }}>
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#919191" }}>
                ---- Continuar como ----
              </Text>
            </View>
            <View style={styles.bottomButton}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <TouchableOpacity style={styles.inBut2}>
                  <FontAwesome
                    name="user-circle-o"
                    size={24}
                    color="white"
                    style={[styles.smallIcon2, { fontSize: 30 }]}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Guest</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <TouchableOpacity
                  style={styles.inBut2}
                  onPress={() => {
                    navigation.navigate("Register");
                  }}>
                  <FontAwesome
                    name="user-plus"
                    size={24}
                    color="white"
                    style={[styles.smallIcon2, { fontSize: 30 }]}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Sign Up</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <TouchableOpacity style={styles.inBut2}>
                  <FontAwesome
                    name="google"
                    size={24}
                    color="white"
                    style={[styles.smallIcon2, { fontSize: 30 }]}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Google</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <TouchableOpacity style={styles.inBut2}>
                  <FontAwesome
                    name="facebook"
                    size={24}
                    color="white"
                    style={[styles.smallIcon2, { fontSize: 30 }]}
                  />
                </TouchableOpacity>
                <Text style={styles.bottomText}>Facebook</Text>
              </View>
            </View>
          </View>
        </View>
    </ScrollView>
  );
}

export default LoginPage;
