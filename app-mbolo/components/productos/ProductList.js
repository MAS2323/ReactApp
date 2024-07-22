import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from 'react'
import useFech from '../../hooks/useFech'
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./ProductList.style";
import ProductCardView from "../../components/productos/ProductCardView";



const ProductList = () => {
  const {data, isLoading, error} =useFech();
  if(isLoading){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} 
            color={COLORS.primary}/>
      </View>
    );
}
return(
    <View style={styles.container}>
        <FlatList 
            data ={data}
            numColumns={2}
            renderItem={({item}) => (<ProductCardView item={item}/>)}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
    </View>
)
}

export default ProductList
