import React from 'react';
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from './ProductCardView.style';
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({item}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", { item })}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {item.supplier}
            </Text>
            <Text style={styles.price}>XAF{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
}



export default ProductCardView;
