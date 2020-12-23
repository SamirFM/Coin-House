import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: "center",
    tintColor: "white",
    marginLeft: "3%",
  },
  recipient: { color: "white", fontSize: 12, opacity: 0.5 },
  transactionTextContainer: { flex: 1, padding: "3%" },
  value: { color: "white", fontSize: 15 },
});
