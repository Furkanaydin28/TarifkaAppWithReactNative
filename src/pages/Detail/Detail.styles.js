import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
  area: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  inner_container: {
    margin: 5,
    padding: 7,
  },
  hr: {
    borderBottomColor: "#9e9e9e",
    borderBottomWidth: 1,
  },
  title: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  desc: {
    color: "black",
  },
  btn: {
    backgroundColor:"red",
    color:"white",
    textAlign:"center",
    fontSize:20,
    borderRadius:5,
    padding:5,
    marginVertical:10,
  },
  link:{
    alignItems:"center"
  }
});
