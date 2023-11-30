import { useFonts } from "expo-font";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "./components";
import { appMargin } from "./utils";

const App = () => {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootScreen rootStyle={styles.rootStyle}></RootScreen>;
};

export default memo(App);

const styles = StyleSheet.create({
  rootStyle: {
    margin: appMargin.xl,
  },
});
