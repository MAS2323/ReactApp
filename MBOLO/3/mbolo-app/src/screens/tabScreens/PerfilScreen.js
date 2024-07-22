import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Avatar } from "react-native-paper";
import React, { useEffect, useState } from "react";
import style from "./PerfilScreen.style";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../Components/constants";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function PerfilScreen() {
  const navigation = useNavigation();
  // console.log(props);
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() =>{
    checkExistingUser();
  },[]);

  const checkExistingUser = async() =>{
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);
      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      }else{
        navigation.navigate("LoginUser");
      }
    } catch (error) {
      console.log('Error recuperando tus datos:', error);
    }

  };

  const userLogout = async()=>{
  const id = await AsyncStorage.getItem("id");
  const useId = `user${JSON.parse(id)}`;

  try {
    await AsyncStorage.multiRemove([useId, 'id']);
    navigation.replace('HomeUi');
  } catch (error) {
    console.log("Error loggin out the user:", error);
  }
  
    
  };

  const logout = () => {
      Alert.alert("cerrar sesión", "Estas seguro que quiere cerrar sesión", [
        {
          text: "Cancelar",
          onPress: () => console.log("presiono cancelar"),
        },
        {
          text: "Continuar",
          onPress: () => userLogout(),
        },
        { defaultIndex: 1 },
      ]);
    };
 const clearCache = () => {
   Alert.alert(
    "Limpiar la Cache", 
    "Estas seguro que quiere eliminar todos los datos guardados en tu dispositivo ?", [
     {
       text: "Cancelar",
       onPress: () => console.log("cancelar limpiar la cache"),
     },
     {
       text: "Continuar",
       onPress: () => console.log("cache eliminado"),
     },
     { defaultIndex: 1 },
   ]);
 };

  const deleteAccount = () => {
    Alert.alert("Eliminar mi cuenta", 
    "Estas seguro que quire eliminar su cuenta?", [
      {
        text: "Cancelar",
        onPress: () => console.log("presiono cancelar"),
      },
      {
        text: "Continuar",
        onPress: () => console.log("Cuenta eliminada"),
      },
      { defaultIndex: 1 },
    ]);
  };
  useEffect( () => {
    // getData()
    
    setTimeout(() => {
      Toast.show({
        type: 'success',
        text1: 'Bienvenido',
        text2: 'Usuario de Mbolo App',
        visibilityTime: 5000
      })
    }, 2000);
  },[]);


  return (
    <View style={style.container}>
      <View style={style.container}>
        <StatusBar backgroundColor={COLORS.primary} />

        <View style={{ width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              width={100}
              height={60}
              resizeMode="contain"
              style={style.cover}
              source={require("../assets/wave.png")}
            />
          </View>
        </View>

        <View style={style.profileContainer}>
          <Avatar.Image size={180} style={style.profile} source={{}} />
          <Text style={style.name}>
            {userLogin === true ?  userData.userName  : "Por favor logeate"}
          </Text>

          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("LoginUser")}>
              <View style={style.loginBtn}>
                <Text style={style.menuText}>L O G I N G  </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={style.loginBtn}>
              <Text style={style.menuText}>{userData.email}   </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={style.menuWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("FavoriteScreen")}>
                <View style={style.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Favoritos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("OrderScreen")}>
                <View style={style.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Pedidos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("CartScreen")}>
                <View style={style.menuItem(0.5)}>
                  <SimpleLineIcons
                    name="bag"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Carrito</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => clearCache()}>
                <View style={style.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Limpiar la Cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={style.menuItem(0.5)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={style.menuText}>Eliminar mi Cuenta</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <View style={style.menuItem(0.5)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={style.menuText}>Cerrar Sesión</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
