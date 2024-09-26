import React, { memo } from "react";
import { StyleSheet, Text, type TextProps } from "react-native";
import { appColors } from "../../utils";

export interface IAppText {
  label?: string;
}

const AppText = (props: IAppText & TextProps) => {
  return (
    <Text
      ellipsizeMode={props.ellipsizeMode}
      numberOfLines={props.numberOfLines}
      style={[styles.lblStyle, props.style]}
    >
      {props.label ?? ""}
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
