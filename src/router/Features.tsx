import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SearchTransaction from "../screens/SearchTransaction/SearchTransaction";
import Scanner from "../screens/Scanner/Scanner";
import BottomTabBar from "../components/BottomTabBar/BottomTabBar";
import TransactionDetails from "../screens/TransactionDetails/TransactionDetails";
import Header from "../components/Header/Header";

const FeaturesStack = createBottomTabNavigator();
const ScannerStack = createStackNavigator();
const TransactionStack = createStackNavigator();

const TransactionStackScreen = () => (
  <TransactionStack.Navigator>
    <TransactionStack.Screen
      name="SearchTransaction"
      component={SearchTransaction}
      options={Header("Coinhouse Ethersan")}
    />
    <TransactionStack.Screen
      name="TransactionDetails"
      component={TransactionDetails}
      options={Header("Transaction Details")}
    />
  </TransactionStack.Navigator>
);

const ScannerStackScreen = () => (
  <ScannerStack.Navigator>
    <ScannerStack.Screen
      name="ScannerView"
      component={Scanner}
      options={Header("QRScanner")}
    />
  </ScannerStack.Navigator>
);

const FeaturesNavigator = () => (
  <NavigationContainer>
    <FeaturesStack.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <FeaturesStack.Screen
        name="Transaction"
        component={TransactionStackScreen}
      />
      <FeaturesStack.Screen name="Scanner" component={ScannerStackScreen} />
    </FeaturesStack.Navigator>
  </NavigationContainer>
);

export default FeaturesNavigator;
