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
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "../../Components/BackBtn";
import { Formik } from "formik";
import * as Yup from 'yup';
import { COLORS } from "../../Components/constants";
import Botton from "./Botton";

 const validationSchema = Yup.object().shape({
       password: Yup.string()
         .min(8, 'Tiene que ser un minimo de 8 caracteres')
         .required('Required'),
       email: Yup.string().email('Introduzca el email correcto').required('Required'),
     })  

function LoginPage({ props }) {
  const navigation = useNavigation(); //Este es el metodod que usamos para navegar
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);


    const inValidForm = () => {
      Alert.alert(
        "Formulario invalido", 
      "Por favor introduzca los datos apropiados", [
        {
          text: "Cancelar",
          onPress: () => {},
        },
        {
          text: "Continuar",
          onPress: () => {},
        },
        { defaultIndex: 1 },
      ]);
    };

  const login = async (values) =>{
    setLoader(true);
    
    try {
      const endpoint = "http://192.168.0.119:3000/login";
      const data = values;

      const response = await axios.post(endpoint, data)
      if(response.status === 200){
        setLoader(false);
        setResponseData(response.data)

        await AsyncStorage.setItem(`user${responseData._id}`, JSON.stringify(responseData));
        await AsyncStorage.setItem('id', JSON.stringify(responseData._id));
        navigation.replace("HomeUi");
        
      }else{
         Alert.alert(
           "Error al Logearse",
           "Por favor introduzca los datos apropiados",
           [
             {
               text: "Cancelar",
               onPress: () => {},
             },
             {
               text: "Continuar",
               onPress: () => {},
             },
             { defaultIndex: 1 },
           ]
         );

      }
    } catch (error) {
       Alert.alert(
         "Error",
         "Error al logearse, intentelo de nuevo con datos reales",
         [
           {
             text: "Cancelar",
             onPress: () => {},
           },
           {
             text: "Continuar",
             onPress: () => {},
           },
           { defaultIndex: 1 },
         ]
       );
    }finally{
      setLoader(false);
    }
  }

    
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={"always"}>
      <View style={styles.container}>
        <BackBtn onPress={() => navigation.goBack()} />
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
        </View>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => login(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
            setFieldTouched,
          }) => (
            <View style={styles.wrapper}>
              <View
                style={styles.action(
                  touched.email ? COLORS.primary : COLORS.offwhite
                )}>
                <FontAwesome
                  name="user-o"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Mobile or Email"
                  style={styles.textInput}
                  // onChange={(e) => setEmail(e.nativeEvent.text)}
                  onFocus={() => {
                    setFieldTouched("email");
                  }}
                  onBlur={() => setFieldTouched("email", "")}
                  autoCapitalize="none"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  autoCorrect={false}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              <View
                style={styles.action(
                  touched.password ? COLORS.primary : COLORS.offwhite
                )}>
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  secureTextEntry={obsecureText}
                  placeholder="Contraseña"
                  style={styles.textInput}
                  // onChange={(e) => setPassword(e.nativeEvent.text)}
                  onFocus={() => {
                    setFieldTouched("password");
                  }}
                  onBlur={() => setFieldTouched("password", "")}
                  autoCapitalize="none"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => {
                    setObsecureText(!obsecureText);
                  }}>
                  <MaterialCommunityIcons
                    name={obsecureText ? "eye-outline" : "eye-off-outline"}
                    size={18}
                  />
                </TouchableOpacity>
              </View>

              {touched.password && errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}

              <Botton
                loader={loader}
                title={"L O G I N"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />
              <Text
                style={styles.registretion}
                onPress={() => navigation.navigate("Register")}>
                Registrate
              </Text>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

export default LoginPage;
