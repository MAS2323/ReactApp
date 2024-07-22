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
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

//Vamos a importar axios para cargar los datos introducidos en nuestro frontend ha nuestro backend 
import axios from "axios";


function RegisterPage({props}) {

    const [name, setName] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    const [email, setEmail] = useState("");
    const [emailVerify, setEmailVerify] = useState(false);
    const [mobile, setMobile] = useState("");
    const [mobileVerify, setMobileVerify] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    //Funcion para hacer el submit de nuestros datos 
const navigation = useNavigation();
function handleSubmit(){
        const userData = {
          name: name,
          email,
          mobile,
          password
        };
        if(nameVerify && emailVerify && passwordVerify && mobileVerify){ 
             axios
               .post("http://192.168.100.235:3000/register", userData)
               .then((res) => {
                 console.log(res.data);
                 if (res.data.status == "Ok") {
                   Alert.alert("Registro satizfactorio!!");
                   navigation.navigate("Login");
                 } else {
                   Alert.alert(JSON.stringify(res.data));
                 }
               })
               .catch((e) => console.log(e));  
        }
        else{
            Alert.alert('Rellene todos los espacios')
        }
       
        
    }


    //Funcion para validar el nombre 
    function handleName(e){
        const nameVar = e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(false);
        if(nameVar.length > 1){
            setNameVerify(true);
        }
    }

    //Funcion para validar el email
    function handleEmail(e){
        const emailVar = e.nativeEvent.text;
        setEmail(emailVar);
        setEmailVerify(false);
        if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(emailVar)){
            setEmail(emailVar);
            setEmailVerify(true);
            
        }
    }

    //Funcion para validar el telefono 
    function handleMobile(e) {
      const mobileVar = e.nativeEvent.text;
      setMobile(mobileVar);
      setMobileVerify(false);
      if (/[+-9]{1}[0-9]{9}/.test(mobileVar)) {
        setMobile(mobileVar);
        setMobileVerify(true);
      }
    }
    //Funcion para validar la contrasena 
     function handlPassword(e) {
       const passworVar = e.nativeEvent.text;
       setPassword(passworVar);
       setPasswordVerify(false);
       if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passworVar)) {
         setPassword(passworVar);
         setPasswordVerify(true);
       }
     }

  return (
    <ScrollView>

      <View>
        <View style={styles.topImageContainer}>
          <Image
            source={require("../assets/backgroundmbolo02.png")}
            style={styles.topImage}
          />
        </View>
        <View style={styles.mboloContainer}>
          <Text style={styles.mboloText}>MBOLO</Text>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Register !!!</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              size={24}
              color="#4c86A8"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              onChange={(e) => handleName(e)} //Aplicando la funcion
            />
            {name.length < 1 ? null : nameVerify ? (
              <Feather name="check-circle" size={20} color="green" />
            ) : (
              <MaterialIcons name="error-outline" size={20} color="red" />
            )}
          </View>
          {name.length < 1 ? null : nameVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: "red",
              }}>
              Su nombre tiene que tener mas de tres caracter
            </Text>
          )}
          <View style={styles.action}>
            <Fontisto name="email" size={24} color="#4c86A8" />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChange={(e) => handleEmail(e)} //Aplicando la funcion
            />
            {email.length < 1 ? null : emailVerify ? (
              <Feather name="check-circle" size={20} color="green" />
            ) : (
              <MaterialIcons name="error-outline" size={20} color="red" />
            )}
          </View>
          {email.length < 1 ? null : emailVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: "red",
              }}>
              Itroduzca un email valido
            </Text>
          )}
          <View style={styles.action}>
            <FontAwesome
              name="mobile"
              size={24}
              color="#4c86A8"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textInput}
              onChange={(e) => handleMobile(e)} //Aplicando la funcion
              maxLength={14}
            />
            {mobile.length < 1 ? null : mobileVerify ? (
              <Feather name="check-circle" size={20} color="green" />
            ) : (
              <MaterialIcons name="error-outline" size={20} color="red" />
            )}
          </View>
          {mobile.length < 1 ? null : mobileVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: "red",
              }}>
              El numero de telefono es incorrecto
            </Text>
          )}
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
              onChange={(e) => {
                handlPassword(e);
              }}
              secureTextEntry={showPassword}
              maxLength={8}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length < 1 ? null : !showPassword ? (
                <Feather
                  name="eye-off"
                  s
                  ize={23}
                  color={passwordVerify ? "green" : "red"}
                  style={{ marginRight: -10 }}
                />
              ) : (
                <Feather
                  name="eye"
                  size={23}
                  color={passwordVerify ? "green" : "red"}
                  style={{ marginRight: -10 }}
                />
              )}
            </TouchableOpacity>
          </View>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: "red",
              }}>
              Introduzca una contraseña valida
            </Text>
          )}
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
            <View>
              <Text style={styles.textSign}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegisterPage;
