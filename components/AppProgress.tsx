import React from "react";
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
          width: `${props.width}%` ?? 0,
          height: props.height ?? defaultHeight,
          backgroundColor: props.color ?? appColors.red,
        }}
      />
    </View>
  );
};

export default AppProgress;

const styles = StyleSheet.create({
  rootStyle: {
    width: "100%",
    backgroundColor: appColors.grey,
  },
});
