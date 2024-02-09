import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { appColors } from "../utils";

const AppDivider = ({ rootStyle }: { rootStyle?: object }) => {
  return <View style={{ ...styles.rootStyle, ...rootStyle }} />;
};

export default memo(AppDivider);

const styles = StyleSheet.create({
  rootStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: appColors.grey,
  },
});
