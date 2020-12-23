import React from "react";
import { ApplicationProvider } from "@ui-kitten/components/theme";
import * as eva from "@eva-design/eva";
import SearchTransaction from "./screens/SearchTransaction/SearchTransaction";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <SearchTransaction />
    </ApplicationProvider>
  );
}
