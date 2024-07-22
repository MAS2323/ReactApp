import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SliderBox } from "react-native-image-slider-box";


const SliderScreen = () => {
  const Slides = [
    "https://tecscience.tec.mx/es/wp-content/uploads/sites/8/2021/05/AdobeStock_288676847.jpeg",
    "https://realequatorialguinea.com/wp-content/uploads/2020/09/ministerio-de-hacienda.png",
    "https://travel2unlimited.com/wp-content/uploads/2018/02/0009-86-495x400.jpg",
  ];

  return (
    <View>
      {/* <Text style={styles.categoria}>Categorias</Text> */}
      <SliderBox
        images={Slides}
        sliderBoxHeight={200}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor="#4c86A8"
        inactiveDotColor="#90A4AE"
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "92%",
          marginTop: 15,
        }}
        autoplay
        circleloop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoria: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    marginTop: 3,
    flex: 1,
    alignItems: "center",
  },
});

export default SliderScreen;
