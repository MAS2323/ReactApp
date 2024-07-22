import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightwhite,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightwhite,
  },
  upperRow: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999,
  },
  heading:{
    fontSize: SIZES.medium,
    color: COLORS.lightwhite,
    marginLeft: 5
  }
});


export default styles;