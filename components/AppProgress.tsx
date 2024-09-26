import React, { memo } from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import { appColors } from "../utils";

interface IAppProgress {
  rootStyle?: {};
  width?: string;
  color?: ColorValue;
  height?: string | number;
}

const AppProgress = (props: IAppProgress) => {
  let defaultHeight = 8;

  return (
    <View
      style={{ ...styles.rootStyle, height: defaultHeight, ...props.rootStyle }}
    >
      <View
        style={{
          height: props.height ?? defaultHeight,
          backgroundColor: props.color ?? appColors.red,
          width: !`${props.width}%` ? 0 : `${props.width}%`,
        }}
      />
    </View>
  );
};

export default memo(AppProgress);

const styles = StyleSheet.create({
  rootStyle: {
    width: "100%",
    backgroundColor: appColors.grey,
  },
});
