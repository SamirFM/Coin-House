import { Divider, Layout, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";

const Scanner = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="QRScanner" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Hello World</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default Scanner;
