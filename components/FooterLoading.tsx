import { StyleSheet, View } from "react-native";
import React from "react";
import AppSpinner from "./AppSpinner";

interface IFooterLoading {
   rootStyle?: {};
   color?: string;
   isLoading: boolean;
   size?: "small" | "large" | number;
}

const FooterLoading = (props: IFooterLoading) => {
   let { color, size, isLoading, rootStyle } = props;
   return <View style={{ ...styles.rootStyle, ...rootStyle }}>{isLoading && <AppSpinner size={size} color={color} />}</View>;
};

export default FooterLoading;

const styles = StyleSheet.create({
   rootStyle: {},
});
