import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cochin",
    margin: 10,
    marginBottom: 5,
    color: "red",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  details: {
    margin: 10,
    marginBottom: 5,
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  pizzaImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
});

export default styles;