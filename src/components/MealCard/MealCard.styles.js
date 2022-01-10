import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
    flex: 1,
    margin:10,
  },
  image:{
    width: Dimensions.get("window").width * 19/20,
    height: Dimensions.get("window").height / 4,
    flex: 1,
    borderRadius:10,
    justifyContent: "flex-end",
    minWidth:350,
    overflow: 'hidden',

  },
  title:{
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    backgroundColor: "rgba(0,0,0,0.69)",
    paddingHorizontal:10,
  },
})
