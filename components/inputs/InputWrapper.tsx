import React, { memo } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { appColors, appPadding, appRadius } from "../../utils";

const InputWrapper = (props: TextInputProps) => {
  return (
    <TextInput
      value={props.value}
      editable={props.editable}
      multiline={props.multiline}
      focusable={props.focusable}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      style={[styles.style, props.style]}
      secureTextEntry={props.secureTextEntry}
      placeholderTextColor={props.placeholderTextColor ?? appColors.grey}
    />
  );
};

export default memo(InputWrapper);

const styles = StyleSheet.create({
  style: {
    height: 45,
    borderWidth: 0.5,
    borderRadius: appRadius.s,
    borderColor: appColors.grey,
    paddingHorizontal: appPadding.s,
  },
});
