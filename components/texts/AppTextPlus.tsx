import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";

const AppTextPlus = (props: Text["props"]) => {
  return <Text {...props} style={[styles.lblStyle, props.style]} />;
};

// const AppTextPlus = ({ children }: { children: Text["props"]["children"] }) => {
//    return <Text children={children} />;
// };

// const AppTextPlus = ({ children }: { children: React.ReactNode }) => {
//    return <Text children={children} />;
// };

export default memo(AppTextPlus);

const styles = StyleSheet.create({
  lblStyle: {},
});
