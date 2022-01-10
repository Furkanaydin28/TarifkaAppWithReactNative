import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./pages/Category";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";


const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryScreen" component={Category}
                      options={{
                        title: "Category",
                        headerTitleStyle: { color: "#ffa500" },
                        headerTintColor: "#ffa500",
                        headerTitleAlign: 'center'
                      }} />
        <Stack.Screen name="MealsScreen" component={Meals}
                      options={{
                        title: "Meals",
                        headerTitleStyle: { color: "#ffa500" },
                        headerTintColor: "#ffa500",
                        headerTitleAlign: 'center'
                      }} />
        <Stack.Screen name="DetailScreen" component={Detail}
                      options={{
                        title: "Detail",
                        headerTitleStyle: { color: "#ffa500",  },
                        headerTintColor: "#ffa500",
                        headerTitleAlign: 'center'
                      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
