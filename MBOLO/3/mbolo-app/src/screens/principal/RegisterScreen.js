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
import { useNavigation } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { RadioButton } from "react-native-paper";
import BackBtn from "../../Components/BackBtn";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../Components/constants";
import Botton from "./Botton";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import axios from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Tiene que ser un mínimo de 8 caracteres")
    .required("Requerido"),
  email: Yup.string()
    .email("Introduzca el email correcto")
    .required("Requerido"),
  location: Yup.string()
    .min(3, "Introduzca una ubicación correcta")
    .required("Requerido"),
  userName: Yup.string()
    .min(3, "Introduzca el nombre correcto")
    .required("Requerido"),
  mobile: Yup.string()
    .min(9, "Introduzca un número correcto")
    .required("Requerido"),
});

function RegisterPage() {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(false);

  const inValidForm = () => {
    Alert.alert(
      "Formulario inválido",
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
  };

  const registerUser = async (values) => {
    setLoader(true);
    try {
      const endpoint = "http://192.168.0.119:3000/register";
      const response = await axios.post(endpoint, values);

      if (response.status === 201) {
        navigation.replace("Login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <BackBtn onPress={() => navigation.goBack()} />
        <View style={styles.topImageContainer}>
          <Image
            source={require("../assets/BACKGROUNDS-02.png")}
            style={styles.topImage}
          />
        </View>
        <View style={styles.mboloContainer}>
          <Text style={styles.mboloText}>MBOLO</Text>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Registrar!!!</Text>
        </View>
        <Formik
          initialValues={{
            email: "",
            password: "",
            location: "",
            userName: "",
            mobile: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => registerUser(values)}>
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
                  touched.userName ? COLORS.primary : COLORS.offwhite
                )}>
                <FontAwesome
                  name="user-o"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Usuario"
                  style={styles.textInput}
                  onFocus={() => setFieldTouched("userName")}
                  onBlur={() => setFieldTouched("userName", "")}
                  autoCapitalize="none"
                  onChangeText={handleChange("userName")}
                  value={values.userName}
                  autoCorrect={false}
                />
              </View>
              {touched.userName && errors.userName && (
                <Text style={styles.errorMessage}>{errors.userName}</Text>
              )}
              <View
                style={styles.action(
                  touched.email ? COLORS.primary : COLORS.offwhite
                )}>
                <Fontisto
                  name="email"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  onFocus={() => setFieldTouched("email")}
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
                  touched.mobile ? COLORS.primary : COLORS.offwhite
                )}>
                <FontAwesome
                  name="mobile-phone"
                  size={30}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Móvil"
                  style={styles.textInput}
                  onFocus={() => setFieldTouched("mobile")}
                  onBlur={() => setFieldTouched("mobile", "")}
                  autoCapitalize="none"
                  onChangeText={handleChange("mobile")}
                  value={values.mobile}
                  autoCorrect={false}
                />
              </View>
              {touched.mobile && errors.mobile && (
                <Text style={styles.errorMessage}>{errors.mobile}</Text>
              )}
              <View
                style={styles.action(
                  touched.location ? COLORS.primary : COLORS.offwhite
                )}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  color="#4c86A8"
                  style={styles.smallIcon}
                />
                <TextInput
                  placeholder="Ubicación"
                  style={styles.textInput}
                  onFocus={() => setFieldTouched("location")}
                  onBlur={() => setFieldTouched("location", "")}
                  autoCapitalize="none"
                  onChangeText={handleChange("location")}
                  value={values.location}
                  autoCorrect={false}
                />
              </View>
              {touched.location && errors.location && (
                <Text style={styles.errorMessage}>{errors.location}</Text>
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
                  onFocus={() => setFieldTouched("password")}
                  onBlur={() => setFieldTouched("password", "")}
                  autoCapitalize="none"
                  onChangeText={handleChange("password")}
                  value={values.password}
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setObsecureText(!obsecureText)}>
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
                title={"REGISTRAR"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

export default RegisterPage;
