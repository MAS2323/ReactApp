import { Text, View, Image } from "react-native";
import React, {useState} from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import styles from "./ProductDetails.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
// import { Key } from "react-native-feather";


export default function ProductDetails({navigation}) {
  const route = useRoute();
  const {item} = route.params;
  console.log(item);
  const [count, setCount ] = useState(1)

  const incremento =() =>{
    setCount(count + 1 )
  }
  const decremento = () => {
    if(count >  1 ){
      setCount(count - 1);
    }
    
  };


  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>XAF{item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name="star" size={24} color="gold" Key={index} />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => incremento()}>
              <SimpleLineIcons name="plus" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={() => decremento()}>
              <SimpleLineIcons name="minus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={24} color="black" />
              <Text>{item.product_location}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={24}
                color="black"
              />
              <Text> Entrega gratis </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>COMPRA YA!</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
