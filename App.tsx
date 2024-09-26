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

  return <RootScreen rootStyle={styles.container}></RootScreen>;
};

export default memo(App);

const styles = StyleSheet.create({
  container: {
    margin: appMargin.xl,
  },
});
