import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

// const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

//also for default Screen--> <Drawer.Navigator initialRouteName="User">
export default function DummyApp() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a62" },
          headerTintColor: "white",
          tabBarActiveTintColor: "red",
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerActiveTintColor: "#3c0a6b",
          //drawerStyle: { backgroundColor: "red" },
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
          // options={{
          //   drawerLabel: "Welcome Screen",
          //   drawerIcon: ({ color, size }) => (
          //     <Ionicons name="home" color={color} size={size} />
          //   ),
          // }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}

          // options={{
          //   drawerIcon: ({ color, size }) => (
          //     <Ionicons name="person" color={color} size={size} />
          //   ),
          // }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );

  // return (
  //   <>
  //     <StatusBar style="light" />
  //     <NavigationContainer>
  //       <Stack.Navigator
  //         screenOptions={{
  //           headerStyle: { backgroundColor: "#351401" },
  //           headerTintColor: "white",
  //           contentStyle: { backgroundColor: "#3f2f25" },
  //         }}
  //       >
  //         <Stack.Screen
  //           name="MealCategories"
  //           component={CategoriesScreen}
  //           options={{
  //             title: "All Categories",
  //           }}
  //         />
  //         <Stack.Screen
  //           name="MealsOverview"
  //           component={MealsOverviewScreen}
  //           // options={({ route, navigation }) => {
  //           //   const catId = route.params.categoryId;
  //           //   return {
  //           //     title: catId,
  //           //   };
  //           // }}
  //         />
  //         <Stack.Screen
  //           name={"MealDetail"}
  //           component={MealDetailScreen}
  //           // options={{               //or useLayoutEffect in MealDetailsScreen
  //           //   headerRight: () => {
  //           //     return <Text>In My App</Text>;
  //           //   },
  //           // }}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 30,
  },
});
