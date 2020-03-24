import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  CategoriesScreen: CategoriesScreen,
  CategoryMealsScreen: CategoryMealsScreen,
  MealDetailScreen: MealDetailScreen
});

export default createAppContainer(MealsNavigator);
