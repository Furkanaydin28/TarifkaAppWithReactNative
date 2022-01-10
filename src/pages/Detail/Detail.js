import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./Detail.styles";
import useFetch from "../../hooks/useFetch/useFetch";
import Config from "react-native-config";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { Link, NativeBaseProvider } from "native-base";


const Detail = ({ route }) => {
  const { id } = route.params;
  const { loading, data, error } = useFetch(Config.Filter_by_MealId + id);
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data.meals.length > 0) {
    const { strMeal, strInstructions, strMealThumb, strYoutube, strArea } = data.meals[0];
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Image style={styles.image} source={{ uri: strMealThumb }} />
          <View style={styles.inner_container}>
            <Text style={styles.title}>{strMeal}</Text>
            <Text style={styles.area}>{strArea}</Text>
            <View
              style={styles.hr}
            />
            <Text style={styles.desc}>{strInstructions}</Text>
            <View style={styles.link}>
              <Link href={strYoutube}>
                <Text style={styles.btn}>Watch On Youtube</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </NativeBaseProvider>
    );
    return (<View></View>);
  }
};
export default Detail;
