import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  mboloContainer: {},
  mboloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#4c86A8",
    marginTop: 120,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 260,
    width: 260,
    marginTop: 30,
  },
  text_footer: {
    color: "#4c86A8",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: "#4c86A8",
    borderRadius: 50,
  },
  textInput: {
    flex: 1,
    marginTop: -12,

    color: "#4c86A8",
  },
  loginContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  text_header: {
    color: "#4c86A8",
    fontWeight: "bold",
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    marginTop: -20,
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },
  inBut: {
    width: "70%",
    backgroundColor: "#4c86A8",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 50,
  },
  inBut2: {
    backgroundColor: "#4c86A8",
    height: 65,
    width: 65,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  smallIcon2: {
    fontSize: 40,
    // marginRight: 10,
  },
  bottomText: {
    color: "black",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 150,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
});

export default styles;