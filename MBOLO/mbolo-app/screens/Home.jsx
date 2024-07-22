import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import Header from '../components/HomeScreen/Heder';
// import Slider from '../components/HomeScreen/Slider';

const Home = () => {
  return (
     <SafeAreaView>
      <View>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="location-outline" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.location}> Malabo EQG </Text>

            <View style={{ alignItems: "flex-end" }}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}> 8 </Text>
              </View>

              <TouchableOpacity onPress={() => {}}>
                <Fontisto name="shopping-bag" size={24} color={COLORS.black} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Header */}

        {/* Slider */}
        {/* <Slider /> */}
        {/* Categorias */}  

        <ScrollView>
          <Header />
          {/* <Slider /> */}
          {/* <Heading />
          <ProductRow /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})