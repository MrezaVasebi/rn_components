import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const ButtonWrapper = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={{ ...styles.rootStyle }}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ButtonWrapper;

const styles = StyleSheet.create({
  rootStyle: {},
});
