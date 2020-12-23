import { Button, Divider, Layout, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { SafeAreaView } from "react-native";

const SearchTransaction = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default SearchTransaction;