import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 10,
    color: "black",
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightwhite,
  },
  location: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});

export default styles;
