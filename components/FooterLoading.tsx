import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import AppSpinner from "./AppSpinner";

interface IFooterLoading {
  rootStyle?: {};
  isLoading?: boolean;
  color?: ColorValue;
  size?: "small" | "large" | number;
}

const FooterLoading = (props: IFooterLoading) => {
  let { color, size, isLoading, rootStyle } = props;
  return (
    <View style={{ ...styles.rootStyle, ...rootStyle }}>
      {isLoading ? <AppSpinner size={size} color={color} /> : null}
    </View>
  );
};

export default React.memo(FooterLoading);

const styles = StyleSheet.create({
  rootStyle: {},
});
