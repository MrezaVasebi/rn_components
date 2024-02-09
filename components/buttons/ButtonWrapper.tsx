import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface IButtonWrapper {
  btnStyle?: {};
}

const ButtonWrapper = (props: IButtonWrapper & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      disabled={props.disabled}
      style={{ ...styles.rootStyle, ...props.btnStyle }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default memo(ButtonWrapper);

const styles = StyleSheet.create({
  rootStyle: {},
});
