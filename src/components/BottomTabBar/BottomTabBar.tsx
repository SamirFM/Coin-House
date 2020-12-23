import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import React from "react";

export interface BottomTabBarProps {
  navigation: any;
  state: any;
}
const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    appearance="noIndicator"
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="SearchTransaction" />
    <BottomNavigationTab title="Scanner" />
  </BottomNavigation>
);

export default BottomTabBar;
