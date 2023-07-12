import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
//import { FavoritesContext } from "../store/context/fav-context";

function MealDetailScreen({ route, navigation }) {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const sectionMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoritesStatusHandler() {
    if (mealIsFavorite) {
      //favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      //favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            image={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoritesStatusHandler}
          />
        );
        // return <Button title="Press" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, changeFavoritesStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: sectionMeal.imageUrl }} />
      <Text style={styles.title}>{sectionMeal.title}</Text>
      <MealDetails
        duration={sectionMeal.duration}
        complexity={sectionMeal.complexity}
        affordability={sectionMeal.affordability}
        textStyle={styles.textDetails}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={sectionMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={sectionMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: "9.5%",
  },
  image: {
    height: 320,
    width: "100%",
  },
  title: {
    margin: 8,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  textDetails: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
