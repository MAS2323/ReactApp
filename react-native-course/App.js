import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";

import * as ImagePicker from "expo-image-picker"; //Modulo para poder cargar, enviar y trabajar con imagenes
import * as Sharing from "expo-sharing";
import uploadToAnymousFilesAsync from "anonymous-files";
//import image from './assets/diamond-red.png';

//<Image source={{ uri: "https://picsum.photos/200/100" }} //Importar una imagen utilizando una url

//Codigo para coger una imagen en nuestra galeria por consola
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camara is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    //Aqui es donde actualizamos nuestra imagen
    if (pickerResult.canceled === true) {
      return;
    }
    if(Platform.OS === 'ios'){
      const remoteUri = uploadToAnymousFilesAsync(pickerResult.uri)
      setSelectedImage({localUri: pickerResult.uri, remoteUri})

    } else{
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  //Funcion para compartir imagenes
  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      Alert.alert(`The image is available for sharing at `);
      return;
    }

    await Sharing.shareAsync(setSelectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an Image</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/seed/picsum/200/200",
          }} //Importar un archivo que se encuentra en nuestro proyecto
          style={styles.image}
        />
      </TouchableOpacity>

      {selectedImage ? (
        <TouchableOpacity onPress={openShareDialog} style={styles.button}>
          <Text style={styles.bottonText}>Share this image</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

//Usamos StyleSheet para ordenar los componentes
//Organizamos los estilos que llevaran los componentes de nuestra app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#fff" },
  image: { height: 200, width: 200, borderRadius: 100, resizeMode: "contain" },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10,
  },
  bottonText: {
    color: "#fff",
    fontSize: 20,
  },
});

//Par formatear nuestro codigo de React utilizamos el comando Shift + Alt + f
export default App;
