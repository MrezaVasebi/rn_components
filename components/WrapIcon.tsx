import { StyleSheet, View } from "react-native";
import React from "react";
import { handleIcons } from "../modules";

interface IWrapIcon {
   size?: number;
   color?: string;
   rootStyle?: {};
   iconName: string;
}

const WrapIcon = ({ iconName, size, color, rootStyle }: IWrapIcon) => {
   return <View style={{ ...styles.root, ...rootStyle }}>{handleIcons(iconName, size, color)}</View>;
};

export default WrapIcon;

const styles = StyleSheet.create({
   root: {},
});
