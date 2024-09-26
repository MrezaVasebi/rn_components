import React from "react";
import { StyleSheet, type TextProps } from "react-native";
import AppText, { IAppText } from "./AppText";

const AppTitle = (props: IAppText & TextProps) => {
  return <AppText label={props.label} style={[styles.lblStyle, props.style]} />;
};

export default React.memo(AppTitle);

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: 20,
    fontFamily: "medium",
  },
});
