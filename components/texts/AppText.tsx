import React from "react";
import { StyleSheet, Text } from "react-native";
import { appColors } from "../../utils";

interface IAppText {
  lblStyle?: {};
  label: string | undefined;
}

const AppText = (props: IAppText) => {
  let { label, lblStyle, ...rest } = props;
  return (
    <Text {...rest} style={{ ...styles.lblStyle, ...lblStyle }}>
      {label}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: 13,
    color: appColors.black,
  },
});
