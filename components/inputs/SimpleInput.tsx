import React, { memo } from "react";
import { StyleSheet, type TextInputProps } from "react-native";
import InputWrapper from "./InputWrapper";

const SimpleInput = (props: TextInputProps) => {
  return (
    <InputWrapper
      value={props.value}
      multiline={props.multiline}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      style={[styles.inputStyle, props.style]}
      placeholderTextColor={props.placeholderTextColor}
    />
  );
};

export default memo(SimpleInput);

const styles = StyleSheet.create({
  inputStyle: {},
});
