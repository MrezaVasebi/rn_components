import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

interface IAppTitleProps {
  label: string | undefined;
  lblStyle?: object;
}

const AppTitle = (props: IAppTitleProps) => {
  let { label, lblStyle, ...rest } = props;
  return (
    <AppText
      {...rest}
      label={label}
      lblStyle={{ ...styles.lblStyle, ...lblStyle }}
    />
  );
};

export default React.memo(AppTitle);

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: 20,
  },
});
