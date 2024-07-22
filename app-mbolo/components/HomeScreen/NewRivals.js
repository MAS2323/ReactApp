import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './NewRivals.style'
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import ProductList from '../productos/ProductList';



const NewRivals = ({navigation}) => {
    const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <Ionicons name="chevron-back-circle" 
            size={30} color= {COLORS.lightwhite} />
          </TouchableOpacity>
          <Text style={styles.heading}> Productos </Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
}

export default NewRivals

