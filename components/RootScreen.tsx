import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

interface IRootScreenProps {
  rootStyle?: object;
  children?: React.ReactNode;
}

const RootScreen = (props: IRootScreenProps) => {
  let { children, rootStyle } = props;
  return (
    <SafeAreaView style={{ ...styles.rootStyle, ...rootStyle }}>
      {children}
    </SafeAreaView>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
