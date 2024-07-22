import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  BackHandler,
  Alert
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Avatar } from "react-native-paper";
import { useEffect, useState } from "react";
import Email from "react-native-vector-icons/MaterialCommunityIcons";
import Gender from "react-native-vector-icons/Foundation";
import Profession from "react-native-vector-icons/AntDesign";
import Mobile from "react-native-vector-icons/Entypo";
import {useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";


export default function HomeScreen(props) {
  const navigation = useNavigation();
  console.log(props);
  const [userData, setUserData] = useState("");

  async function getData() {
    const token = await AsyncStorage.getItem("token")
    console.log(token);
    axios
      .post("http://192.168.100.235:3000/userdata", { token: token })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data.data);
      });
  }

  // const handleBackPress = () => {
  //   Alert.alert("Exit App", "Are you sure you want to exit?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel",
  //     },
  //     {
  //       text: "Exit",
  //       onPress: () => BackHandler.exitApp(),
  //     },
  //   ]);
  //   return true;
  // };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getData();
  //     BackHandler.addEventListener("hardwareBackPress", handleBackPress);

  //     return () => {
  //       BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
  //     };
  //   }, [])
  // );

  useEffect(() => {getData()},[]);


  return (
    <ScrollView>
      <View>
        <View style={{ position: "relative" }}>
          <TouchableOpacity
            style={styles.editIcon}
            onPress={() => {
              navigation.navigate("UpdateProfile", { data: userData });
            }}>
            <Icon name="user-edit" size={24} color={"white"} />
          </TouchableOpacity>
          <Image
            width={100}
            height={60}
            resizeMode="contain"
            style={{
              marginTop: -150,
            }}
            source={require("../assets/wave.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Avatar.Image
            size={180}
            style={styles.avatar}
            source={{
              uri:
                userData == "" || userData == null
                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEXFzeD////Byt7L0uPByd7Q1+b7/P3j5/Dv8fbe4+3r7vTFzuDL0+P19/rn6/LZ3urW2+lU+LHUAAAFLklEQVR4nO2dC3arMAxEQXwCcfjsf7XPkLw2tEka5AEziu8CeuKpJVmyLLIskUgkEkdFbsT+HXEQKbNqOPWN59y72D9nd/z/vWqbOv/mozSY9n116vIl1acYg1++G9v+5/rzvMs+QwL/7x/O9a/lT5zL2D9uF7wAzcP1e+pP2AQi4/mZAJ6TfQ3EtY9N4D+jdQ2k6F8K4OltayDFKyP4cghmI6PzVvDnHrDuEqR9UwFPY1IEufw+C72yh8LeIUFOaxSY6K0dFt2qTXDDVJCUi0IBT2vHHmTUSWAnPjgZtBJ4p2BjJ4RIYCSHlCpEAi+CAXMowiSwIIJoguKSE7k5rD8aPWDg3gnKg8EPLrGXEUL5tGC2ijr2OkIIjAlfEJdVBLMNcmprQEnAW09YUzT5C9aNADgbfMGaPQlOgrwj1cAlDZIGGVYD2ktIpAasiRNQgzxpkOektoCMjUkDT+zFaEFqwNqohtSgiL0YHcHlVAMaoCooM6SJo/qK7RGk+yBpkGVBl2w2NAi7aEwamNEAWE5MGiQNkgZJg6RB0sCEBoj+C3YN0j5IGkyks3LKnSegdaSkQdIgaUCtwcf7RJHy02OjVG3/+knvSlxJd+uK7Emb6eqOrQVBoJvgCtu16xYasF23QXsPWDVI+yArN9CALTyW6LhAqAE8NuaEcQH2fOMbtkNS+e7IC8MaYIuJM3TnRGwxcYbvPQ+0eDBD95TFIRv3rwyx17Qa/EGRbmqSAz1xvSP2ktaDvW3MOV9xoJ0i43tftEPgc4n4U1Ls9ajAbgTOkSCh02AW1GxJ4w2gCKwSIAspF0pLmIB5BNaXvhnwnMSXMn6DqrBzBoUrqKoiXdp8B6qqWMVeSADyzijhNyDeBiinyOwSUc95uAemYZ66sl0wLYGcFPmK6gsgCTRzZJxAlJe5TQFyQiA3hQxRVuSOChPBXrEW2trBf/RDts1sg+C8iXZA1oKwc9IY++dDCDojUKcKd5T67JF6ou4C9SHBhjO4os2hiWupv1Hm0JY00LpFKx5xQmsLpjRQdisy19R/om3MsaSB9rxsSgOdBKY00E5SZOxBeoa2kGJJA+01gyEN1JmjJQ20jxnYq+p3qPNGQxqo66qtHQ3UfUlJA0MalKJ+8NnyPfh/hFzOnbpFr6vP7JeNGaALw0BJMfzemT4+IhqSYq8hFESDInNj3ky4BPSXroieLPZDAuI7nuROsUS84iAvqKmT5gWxVxEIQgJuY8BsA+6NgPmyMXVkQHXuM+cMuBEIjO98Z4K78r5pOFtVpWiRn7Qd+aop5QU9AqJuMyYVRKoNJkT58OD/cuy1vYUX4LTBvLgrzVAcXwYpthPgSjcc2ybkgjoRvKQvjqrCVl7gEU11RJMQGTeYFvicbjyaCnsrMFG3R1JBsnZjR/hEhf4gJiHi0NOg1nCOL8OejvAJ3RBTBScy7O4GHlCfXCwV4hrBkvMlQmYpZXQjWLJ7sJTyEEawZNfMsowUC/+m38kxiNtgbDCMZgfHIMUuaVEA3cYnBnx5aAu8e9xMASkYFJjoNpo/K+7oVnBPg68xuKw8zoHoPXp0pCzHg0bDV0CTa3EsjmBJjUunsB9u35Ua08wkGecmuIEIEVIReoIFwTf38JHhEQgcxuqOlx4qCBFBCnY7uKH/uhV0SHRU9CNFUO1EB0A9TMKIIczoggP+QxpRUQ0cM+MMrmiezG7x0bmoKDYCZhLqgVjf8WvhfLhkfaPnFt/di8zq6XNbfIczMqsHDW3xTdrYPFvrP7kiUsVMV4ODAAAAAElFTkSuQmCC"
                  : userData.image,
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: -50 }}>
        <Text style={styles.nameText}>{userData.name}</Text>
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 25 }}>
        <View style={styles.infoMain}>
          <View style={styles.infoCont}>
            <View style={[styles.infoIconCont, { backgroundColor: "#ff9500" }]}>
              <Email name="email" size={24} style={{ color: "white" }} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoSmall_Text}>Email</Text>
              <Text style={styles.infoLarge_Text} numberOfLines={1}>
                {userData.email}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoMain}>
          <View style={styles.infoCont}>
            <View style={[styles.infoIconCont, { backgroundColor: "#0d7313" }]}>
              <Gender
                name="torsos-male-female"
                size={28}
                color="blue"
                style={{ color: "white" }}
              />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoSmall_Text}>Gender</Text>
              <Text style={styles.infoLarge_Text}>
                {userData.gender == "" ||
                userData.gender == undefined ||
                userData.gender == null
                  ? ""
                  : userData.gender}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoMain}>
          <View style={styles.infoCont}>
            <View style={[styles.infoIconCont, { backgroundColor: "#774BBC" }]}>
              <Profession name="profile" size={24} style={{ color: "white" }} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoSmall_Text}>Profession</Text>
              <Text style={styles.infoLarge_Text}>
                {userData.profession == "" ||
                userData.profession == undefined ||
                userData.profession == null
                  ? ""
                  : userData.profession}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.infoMain}>
          <View style={styles.infoCont}>
            <View style={[styles.infoIconCont, { backgroundColor: "#f2276e" }]}>
              <Mobile name="mobile" size={24} style={{ color: "white" }} />
            </View>
            <View style={styles.infoText}>
              <Text style={styles.infoSmall_Text}>Mobile</Text>
              <Text style={styles.infoLarge_Text}>{userData.mobile}</Text>
            </View>
          </View>
        </View>
        <View
          style={[styles.bottomDrawerSection, { backgroundColor: "#f2276e" }]}>
          <DrawerItem
            onPress={() => signOut()}
            icon={({ color, size }) => (
              <Feather name="log-out" color={color} size={size} />
            )}
            label="Sign Out"
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  editIcon: {
    zIndex: 1,
    color: "white",
    position: "absolute",
    right: 2,
    margin: 15,
  },
  backIcon: {
    zIndex: 1,
    color: "white",
    position: "absolute",
    left: 2,
    margin: 15,
  },
  avatar: {
    borderRadius: 100,
    marginTop: -250,
    // marginLeft: 105,
    backgroundColor: "white",
    height: 200,
    width: 200,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  // 420475
  nameText: {
    color: "black",
    fontSize: 28,

    fontStyle: "normal",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    textAlign: "center",
  },
  bookCountMain: {
    borderColor: "#b0b0b0",
    borderWidth: 1,
    marginTop: 18,
    marginHorizontal: 20,

    borderRadius: 20,
    flexDirection: "row",
    width: "88%",
  },
  bookCount: {
    width: "50%",
    borderColor: "#b0b0b0",
    borderRightWidth: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bookCountNum: {
    color: "#5D01AA",
    fontSize: 34,
    fontWeight: "800",
  },
  bookCountText: { color: "#b3b3b3", fontSize: 14, fontWeight: "500" },
  infoMain: {
    marginTop: 10,
  },
  infoCont: {
    width: "100%",
    flexDirection: "row",
  },
  infoIconCont: {
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 20,

    alignItems: "center",
    elevation: -5,
    borderColor: "black",
    backgroundColor: "black",
  },

  infoText: {
    width: "80%",
    flexDirection: "column",
    marginLeft: 25,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#e6e6e6",
  },
  infoSmall_Text: {
    fontSize: 13,
    color: "#b3b3b3",
    fontWeight: "500",
  },
  infoLarge_Text: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
  booksUploadedMain: {
    paddingHorizontal: 10,
    paddingBottom: 30,
    marginTop: 20,
  },
  flatlistDiv: {
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  booksUploadedText: {
    fontSize: 26,
    color: "black",
    fontWeight: "700",
    paddingLeft: 20,
    paddingBottom: 8,
  },
  booksUploadedCard: {
    flexDirection: "row",
    width: "100%",
    marginTop: 9,
    marginBottom: 9,

    backgroundColor: "#f2f2f2",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 3,
  },
  booksUploadedImgDiv: {
    width: "28%",
  },
  booksUploadedImg: {
    width: "100%",
    height: 120,
    borderRadius: 15,
  },
  cardMidDiv: {
    paddingHorizontal: 10,
    width: "55%",
    position: "relative",
  },
  approvedText: {
    fontSize: 12,
    color: "#0d7313",
    fontWeight: "600",
    marginLeft: 5,
  },
  cardBookNameText: {
    fontSize: 24,
    color: "black",
    fontWeight: "700",
    marginTop: 2,
  },
  cardBookAuthor: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
    marginTop: 1,
  },
  cardRating: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  cardRatingCount: {
    fontSize: 14,
    marginTop: -2,
    paddingLeft: 4,
    color: "#303030",
  },
  cardEditDiv: {
    width: "17%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardEditBtn: {
    height: 44,
    width: 44,
    backgroundColor: "#774BBC",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    padding: 10,
    justifyContent: "center",

    flexDirection: "row",
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "#f5a002",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingHorizontal: 20,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   Switch,
//   Image,
// } from "react-native";
// import FeatherIcon from "react-native-vector-icons/Feather";

// export default function SettinsScreen() {
//   const [form, setForm] = useState({
//     darkMode: false,
//     emailNotifications: true,
//     pushNotifications: false,
//   });

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
//       <View style={styles.container}>
//         <View style={styles.profile}>
//           <TouchableOpacity
//             onPress={() => {
//               // handle onPress
//             }}>
//             <View style={styles.profileAvatarWrapper}>
//               <Image
//                 alt=""
//                 source={{
//                   uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
//                 }}
//                 style={styles.profileAvatar}
//               />

//               <TouchableOpacity
//                 onPress={() => {
//                   // handle onPress
//                 }}>
//                 <View style={styles.profileAction}>
//                   <FeatherIcon color="#fff" name="edit-3" size={15} />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>

//           <View>
//             <Text style={styles.profileName}>John Doe</Text>

//             <Text style={styles.profileAddress}>
//               123 Maple Street. Anytown, PA 17101
//             </Text>
//           </View>
//         </View>

//         <ScrollView>
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Preferences</Text>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#fe9400" }]}>
//                 <FeatherIcon color="#fff" name="globe" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Language</Text>

//               <View style={styles.rowSpacer} />

//               <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
//             </TouchableOpacity>

//             <View style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
//                 <FeatherIcon color="#fff" name="moon" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Dark Mode</Text>

//               <View style={styles.rowSpacer} />

//               <Switch
//                 onValueChange={(darkMode) => setForm({ ...form, darkMode })}
//                 value={form.darkMode}
//               />
//             </View>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#32c759" }]}>
//                 <FeatherIcon color="#fff" name="navigation" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Location</Text>

//               <View style={styles.rowSpacer} />

//               <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
//             </TouchableOpacity>

//             <View style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
//                 <FeatherIcon color="#fff" name="at-sign" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Email Notifications</Text>

//               <View style={styles.rowSpacer} />

//               <Switch
//                 onValueChange={(emailNotifications) =>
//                   setForm({ ...form, emailNotifications })
//                 }
//                 value={form.emailNotifications}
//               />
//             </View>

//             <View style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
//                 <FeatherIcon color="#fff" name="bell" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Push Notifications</Text>

//               <View style={styles.rowSpacer} />

//               <Switch
//                 onValueChange={(pushNotifications) =>
//                   setForm({ ...form, pushNotifications })
//                 }
//                 value={form.pushNotifications}
//               />
//             </View>
//           </View>

//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>Resources</Text>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#8e8d91" }]}>
//                 <FeatherIcon color="#fff" name="flag" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Report Bug</Text>

//               <View style={styles.rowSpacer} />

//               <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
//                 <FeatherIcon color="#fff" name="mail" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Contact Us</Text>

//               <View style={styles.rowSpacer} />

//               <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => {
//                 // handle onPress
//               }}
//               style={styles.row}>
//               <View style={[styles.rowIcon, { backgroundColor: "#32c759" }]}>
//                 <FeatherIcon color="#fff" name="star" size={20} />
//               </View>

//               <Text style={styles.rowLabel}>Rate in App Store</Text>

//               <View style={styles.rowSpacer} />

//               <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   /** Profile */
//   profile: {
//     padding: 24,
//     backgroundColor: "#fff",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   profileAvatarWrapper: {
//     position: "relative",
//   },
//   profileAvatar: {
//     width: 72,
//     height: 72,
//     borderRadius: 9999,
//   },
//   profileAction: {
//     position: "absolute",
//     right: -4,
//     bottom: -10,
//     alignItems: "center",
//     justifyContent: "center",
//     width: 28,
//     height: 28,
//     borderRadius: 9999,
//     backgroundColor: "#007bff",
//   },
//   profileName: {
//     marginTop: 20,
//     fontSize: 19,
//     fontWeight: "600",
//     color: "#414d63",
//     textAlign: "center",
//   },
//   profileAddress: {
//     marginTop: 5,
//     fontSize: 16,
//     color: "#989898",
//     textAlign: "center",
//   },
//   /** Section */
//   section: {
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     paddingVertical: 12,
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#9e9e9e",
//     textTransform: "uppercase",
//     letterSpacing: 1.1,
//   },
//   /** Row */
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     height: 50,
//     backgroundColor: "#f2f2f2",
//     borderRadius: 8,
//     marginBottom: 12,
//     paddingLeft: 12,
//     paddingRight: 12,
//   },
//   rowIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 9999,
//     marginRight: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   rowLabel: {
//     fontSize: 17,
//     fontWeight: "400",
//     color: "#0c0c0c",
//   },
//   rowSpacer: {
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
// });
