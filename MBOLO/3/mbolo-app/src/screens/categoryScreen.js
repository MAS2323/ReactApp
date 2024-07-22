import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import axios from "axios";

const CategoriesScreen = () => {
  const [categoryName, setCategoryName] = useState("");

  const createCategory = async () => {
    try {
      const response = await axios.post(
        "http://192.168.0.121:3000/categories",
        {
          name: categoryName,
        }
      );
      Alert.alert("Categoría creada", `ID: ${response.data.name}`);
      setCategoryName("");
    } catch (error) {
      Alert.alert("Error", "No se pudo crear la categoría");
      console.error("Error creating category:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre de la categoría"
        value={categoryName}
        onChangeText={(text) => setCategoryName(text)}
      />
      <Button title="Crear categoría" onPress={createCategory} />
    </View>
  );
};

export default CategoriesScreen;

