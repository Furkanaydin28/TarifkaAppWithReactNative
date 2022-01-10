import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch/useFetch";
import CategoryCard from "../../components/CategoryCard";
import styles from "./Category.styles"
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Category = ({navigation}) => {
  const { data, loading, error } = useFetch(Config.Category_url);
  const handleCategorySelect=(strCategory)=>{
    navigation.navigate("MealsScreen",{strCategory})
  }
  const renderCategories = ({ item }) => {
    return <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)}/>;
  };
  if (loading) return <Loading/>
  if (error) return <Error/>
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};


export default Category;
