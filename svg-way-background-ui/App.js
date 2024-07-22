import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Svg, {Path} from "react-native-svg";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            heigth={200}
            width={Dimensions.get("screen").width}
            viewBox="0 0 1440 320"
            style={styles.topWavy}>
            <Path
              fill="#2471A3"
              d="M0,192L30,181.3C60,171,120,149,180,128C240,107,300,85,360,101.3C420,117,480,171,540,186.7C600,203,660,181,720,160C780,139,840,117,900,112C960,107,1020,117,1080,149.3C1140,181,1200,235,1260,213.3C1320,192,1380,96,1410,48L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.box}>
          <Svg
            heigth={200}
            width={Dimensions.get("screen").width}
            viewBox="0 0 1440 320"
            style={styles.bottomWavy}>
            <Path
              fill="#2471A3"
              d="M0,128L26.7,122.7C53.3,117,107,107,160,96C213.3,85,267,75,320,85.3C373.3,96,427,128,480,165.3C533.3,203,587,245,640,261.3C693.3,277,747,267,800,218.7C853.3,171,907,85,960,69.3C1013.3,53,1067,107,1120,154.7C1173.3,203,1227,245,1280,266.7C1333.3,288,1387,288,1413,288L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{},
  bottom:{
    position: 'absolute',
    width: Dimensions.get('screen').width,
    bottom: 0
  },
  box:{
    backgroundColor: '#2471A3',
    height: 80
  },
  bottomWavy: {
    position: 'absolute',
    bottom: 20
  }
});
