import React, { memo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { appColors } from "../../utils";

interface IAppText {
  lblStyle?: {};
  label: string | undefined;
}

const AppText = (props: IAppText & TextProps) => {
  let { label, lblStyle } = props;
  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
      style={{ ...styles.lblStyle, ...lblStyle }}
    >
      {label}
    </Text>
  );
};

export default memo(AppText);

const styles = StyleSheet.create({
  lblStyle: {
    fontSize: 13,
    fontFamily: "medium",
    color: appColors.black,
  },
});
