import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchTransaction from "../screens/SearchTransaction/SearchTransaction";
import Scanner from "../screens/Scanner/Scanner";
import BottomTabBar from "../components/BottomTabBar/BottomTabBar";

const { Navigator, Screen } = createBottomTabNavigator();

const FeaturesNavigator = () => (
  <NavigationContainer>
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="SearchTransaction" component={SearchTransaction} />
      <Screen name="Scanner" component={Scanner} />
    </Navigator>
  </NavigationContainer>
);

export default FeaturesNavigator;
