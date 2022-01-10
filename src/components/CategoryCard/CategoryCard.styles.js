import {StyleSheet} from "react-native";
export default StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    padding:10,
    margin:7,
    flexDirection:"row",
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    alignItems:"center"
  },
  image:{
    width:75,
    height:75,
    resizeMode:"contain",
    backgroundColor:"white",
  },
  title:{
    flex:1,
    color:"black",
    fontSize: 20,
    alignItems:"center",
    marginLeft:5,
  },
})
