import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/fav-context";
//import { useContext } from "react";

function FavScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  //const favoriteMealCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no fav item</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}
export default FavScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
