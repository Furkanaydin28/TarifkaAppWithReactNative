import React from "react";
import { FlatList, Text, View } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import MealCard from "../../components/MealCard";
import styles from "../Category/Category.styles";

const Meals = ({ route,navigation }) => {
  const { strCategory } = route.params;
  const { loading, data, error } = useFetch(Config.Filter_by_Category + strCategory);
  const handleClick=(id)=>{
    navigation.navigate("DetailScreen",{id})
  }
  const renderMeal = ({ item }) => {
    return <MealCard meal={item} onSelect={()=>{handleClick(item.idMeal)}} />;
  };
  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
