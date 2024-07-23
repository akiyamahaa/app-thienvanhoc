import { createStyle } from "@gluestack-style/react";
import { Platform, StatusBar } from "react-native";

export const SafeAreaView = createStyle({
  paddingTop: StatusBar.currentHeight,
});
