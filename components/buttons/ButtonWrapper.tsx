import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

const ButtonWrapper = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.rootStyle, props.style]}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default memo(ButtonWrapper);

const styles = StyleSheet.create({
  rootStyle: {},
});
