import React from "react";
import { StyleSheet, TextProps } from "react-native";
import AppText from "./AppText";

interface IAppTitleProps {
  label: string | undefined;
  lblStyle?: object;
}

const AppTitle = (props: IAppTitleProps & TextProps) => {
  let { label, lblStyle } = props;
  return (
    <AppText label={label} lblStyle={{ ...styles.lblStyle, ...lblStyle }} />
  );
};

export default React.memo(AppTitle);

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: 20,
  },
});
