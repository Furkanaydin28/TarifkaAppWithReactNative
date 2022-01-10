import React from "react";
import { Image, ImageBackground, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./MealCard.styles";

const MealCard = ({ meal,onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{ uri: meal.strMealThumb }}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
