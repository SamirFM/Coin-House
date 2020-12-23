import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SearchTransaction from "../screens/SearchTransaction/SearchTransaction";
import Scanner from "../screens/Scanner/Scanner";
import BottomTabBar from "../components/BottomTabBar/BottomTabBar";
import TransactionDetails from "../screens/TransactionDetails/TransactionDetails";

const FeaturesStack = createBottomTabNavigator();
const TransactionStack = createStackNavigator();

const TransactionStackScreen = () => (
  <TransactionStack.Navigator>
    <TransactionStack.Screen
      name="SearchTransaction"
      component={SearchTransaction}
    />
    <TransactionStack.Screen
      name="TransactionDetails"
      component={TransactionDetails}
    />
  </TransactionStack.Navigator>
);

const FeaturesNavigator = () => (
  <NavigationContainer>
    <FeaturesStack.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <FeaturesStack.Screen
        name="Transaction"
        component={TransactionStackScreen}
      />
      <FeaturesStack.Screen name="Scanner" component={Scanner} />
    </FeaturesStack.Navigator>
  </NavigationContainer>
);

export default FeaturesNavigator;
