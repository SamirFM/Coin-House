import React from "react";
import { ApplicationProvider } from "@ui-kitten/components/theme";
import * as eva from "@eva-design/eva";
import FeaturesNavigator from "./router/Features";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <FeaturesNavigator />
    </ApplicationProvider>
  );
}
