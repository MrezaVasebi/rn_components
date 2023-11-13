import React from "react";
import { OpaqueColorValue, StyleSheet, View } from "react-native";
import { handleIcons } from "../modules";

interface IWrapIcon {
  size?: number;
  rootStyle?: {};
  iconName: string;
  color?: string | OpaqueColorValue;
}

const WrapIcon = ({ iconName, size, color, rootStyle }: IWrapIcon) => {
  return (
    <View style={{ ...styles.root, ...rootStyle }}>
      {handleIcons(iconName, size, color)}
    </View>
  );
};

export default React.memo(WrapIcon);

const styles = StyleSheet.create({
  root: {},
});
