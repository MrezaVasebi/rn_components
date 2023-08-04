import React from "react";
import { RootScreen } from "./components";
import { StyleSheet } from "react-native";
import { appMargin } from "./utils";
import InputWithClearButton from "./components/inputs/InputWithClearButton";

const App = () => {
   return (
      <RootScreen rootStyle={styles.rootStyle}>
         <InputWithClearButton showLabel={false} onPressClear={() => {}} label="Enter Name" onChangeText={() => {}} placeholder="Name" value="" />
      </RootScreen>
   );
};

export default App;

const styles = StyleSheet.create({
   rootStyle: {
      margin: appMargin.xl,
   },
});
