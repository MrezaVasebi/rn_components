import React from "react";
import { RootScreen } from "./components";
import { StyleSheet } from "react-native";
import { appMargin } from "./utils";

const App = () => {
   return <RootScreen rootStyle={styles.rootStyle}></RootScreen>;
};

export default App;

const styles = StyleSheet.create({
   rootStyle: {
      margin: appMargin.xl,
   },
});
