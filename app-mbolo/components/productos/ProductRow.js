import React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from "../../constants/theme";
import ProductCardView from './ProductCardView';
import styles from './ProductRow.style';
import useFech from '../../hooks/useFech';

const ProductRow = () => {

    const {data, isLoading, error } = useFech( )
    const products = [1,2,3,4]
    return (
      <View style={styles.container}>
        {/* {isLoading ? (
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        ): error? (
          <Text>Hay algo que molesta</Text>
        ):( 
        
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item= {item}/>}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
        )
      } */}
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      </View>
    );
}



export default ProductRow;
