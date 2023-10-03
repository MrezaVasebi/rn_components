import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface IButtonWrapper {
  btnStyle?: {};
  disabled?: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

const ButtonWrapper = (props: IButtonWrapper) => {
  let { btnStyle, children, onPress, disabled } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}
      style={{ ...styles.rootStyle, ...btnStyle }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ButtonWrapper;

const styles = StyleSheet.create({
  rootStyle: {},
});
