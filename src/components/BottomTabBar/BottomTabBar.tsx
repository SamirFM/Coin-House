import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";

export interface BottomTabBarProps {
  navigation: any;
  state: any;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    style={{ backgroundColor: "#1B1B1B" }}
    appearance="noIndicator"
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab
      title={() => (
        <Text
          style={state.index === 0 ? { color: "white" } : { color: "gray" }}
        >
          Lookup
        </Text>
      )}
    />
    <BottomNavigationTab
      title={() => (
        <Text
          style={state.index === 1 ? { color: "white" } : { color: "gray" }}
        >
          QRScan
        </Text>
      )}
    />
  </BottomNavigation>
);

export default BottomTabBar;
