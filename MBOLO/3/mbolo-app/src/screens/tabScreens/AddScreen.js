// import { Formik } from "formik";
// import { useState, useEffect } from "react";
// import React from "react";
// import * as Yup from "yup";
// import {
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
//   Image,
//   ToastAndroid,

// } from "react-native";
// import "react-native-gesture-handler";
// import { Picker } from "@react-native-picker/picker";
// import * as ImagePicker from "expo-image-picker";
// import axios from "axios";

// export default function AddScreen() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [image, setImage] = useState(null);
//   // const categoryList = [
//   //   { label: "Category 1", value: "category1" },
//   //   { label: "Category 2", value: "category2" },
//   //   { label: "Category 3", value: "category3" },
//   //   // Agrega más categorías según sea necesario
//   // ];
//   async function getCategory() {
//     axios
//       .get("http://192.168.0.121:3000/postsub")
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }
//   // const getCategoryList= async () =>{
//   //   const querySnapShot = await getDocs(collection(db,'categories'))
//   // }

//   /**
//    * Use to Pick Image From Gallery
//    */
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const onSubmitMethod= async(value)=>{
//     value.image = image;
//     console.log(value);
//     //Conver Uri to Blod file 
//     const resp = await fetch(image);
//     const bold = await resp.blob();
//   }
//   return (
//     <View className="p-10">
//       <Text className="text-[27px] font-bold">Agregar Un nuevo Post</Text>
//       <Text className="text-[16px] text-gray-500 mb-7">
//         Crea un nuevo Post para Todos
//       </Text>
//       <Formik
//         initialValues={{
//           title: "",
//           desc: "",
//           category: "",
//           address: "",
//           price: "",
//           image: "",
//         }}
//         validationSchema={Yup.object().shape({
//           category: Yup.string().required("Debes seleccionar una categoría"),
//         })}
//         onSubmit={(value) => {
//           onSubmitMethod(value)
//         }}
//         validate={(values)=>{
//           const errors ={}
//           if(!values.title)
//           {
//             console.log('Title not Present');
//             // ToastAndroid.show('Title Must be there', ToastAndroid.SHORT)
//             errors.name ='Title Must be there'
//           }
//           return errors;
//         }}
//         >
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           values,
//           setFieldValue,
//           errors,
//         }) => (
//           <View>
//             <TouchableOpacity onPress={()=> pickImage()}>
//               {image ? (
//                 <Image
//                   source={{ uri: image }}
//                   style={{ width: 100, height: 100, borderRadius: 15 }}
//                 />
//               ) : (
//                 <Image
//                   source={require("./../assets/images/placeholderImage.png")}
//                   style={{ width: 100, height: 100, borderRadius: 15 }}
//                 />
//               )}
//             </TouchableOpacity>

//             <TextInput
//               style={styles.input}
//               placeholder="Titulo"
//               value={values?.title}
//               onChangeText={handleChange("title")}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Description"
//               value={values?.desc}
//               numberOfLines={5}
//               onChangeText={handleChange("desc")}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Price"
//               value={values?.price}
//               keyboardType="number-pad"
//               onChangeText={handleChange("price")}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Direccion"
//               value={values?.address}
//               onChangeText={handleChange("address")}
//             />
//             {/* Category List Dropdown */}
//             <Picker
//               selectedValue={values.category}
//               onValueChange={(itemValue, itemIndex) => {
//                 setFieldValue("category", itemValue);
//               }}>
//               <Picker.Item label="Seleccione una categoría" value="" />
//               {categories &&
//                 categories.map((category, itemIndex) => (
//                   <Picker.Item
//                     key={itemIndex}
//                     label={category?.label}
//                     value={category?.value}
//                   />
//                 ))}
//             </Picker>

//             <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
//               <Text style={styles.text}>Submit</Text>
//             </TouchableOpacity>
//             {/* <Button className="mt-7" title="Submit" /> */}
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     paddingTop: 15,
//     marginTop: 10,
//     marginBottom: 5,
//     paddingHorizontal: 17,
//     textAlignVertical: "top",
//     fontSize: 17,
//   },
//   inBut: {
//     width: "auto",
//     backgroundColor: "#4c86A8",
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//     marginTop: 10,
//     padding: 4,
//     borderRadius: 50,
//   },
//   submitBt: {
//     padding: 4,
//     backgroundColor: "blue[500]",
//     borderRadius: 10,
//     marginTop: 10,
//     color: "blue",
//   },
//   text: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 16,
//   },
// });


import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import Botton from "../../screens/principal/Botton";
import { useNavigation } from "@react-navigation/native";

export default function AddScreen() {
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState(null);

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

  useEffect(() => {
    // Aquí puedes cargar categorías u otros datos necesarios
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const navigation = useNavigation();
  const AddPost = async (values) => {
    setLoader(true);
    try {
      const endpoint = "http://192.168.0.119:3000/products";
      const response = await axios.post(endpoint, {
        ...values,
        imageUrl: image,
      });

      if (response.status === 200) {
        Alert.alert("Éxito", "Post agregado exitosamente", [
          { text: "OK", onPress: () => navigation.replace("HomeUi") },
        ]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Hubo un error al agregar el post");
    } finally {
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agregar Un nuevo Post</Text>
      <Text style={styles.subtitle}>Crea un nuevo Post para Todos</Text>
      <Formik
        initialValues={{
          title: "",
          supplier: "",
          description: "",
          product_location: "",
          price: "",
          imageUrl: "",
        }}
        onSubmit={AddPost}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TouchableOpacity onPress={pickImage}>
              {image ? (
                <Image source={{ uri: image }} style={styles.image} />
              ) : (
                <Image
                  source={require("./../assets/images/placeholderImage.png")}
                  style={styles.image}
                />
              )}
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Título"
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              value={values.description}
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
            />
            <TextInput
              style={styles.input}
              placeholder="Supplier"
              value={values.supplier}
              onChangeText={handleChange("supplier")}
              onBlur={handleBlur("supplier")}
            />
            <TextInput
              style={styles.input}
              placeholder="Precio"
              value={values.price}
              keyboardType="number-pad"
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
            />
            <TextInput
              style={styles.input}
              placeholder="Dirección"
              value={values.product_location}
              onChangeText={handleChange("product_location")}
              onBlur={handleBlur("product_location")}
            />
            <TouchableOpacity style={styles.inBut} onPress={handleSubmit}>
              <Text style={styles.text}>Agregar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 10,
  },
  inBut: {
    width: "auto",
    backgroundColor: "#4c86A8",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
    padding: 4,
    borderRadius: 50,
  },
  submitBt: {
    padding: 4,
    backgroundColor: "blue[500]",
    borderRadius: 10,
    marginTop: 10,
    color: "blue",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
