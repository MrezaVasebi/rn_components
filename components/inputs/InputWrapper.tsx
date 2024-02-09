import React, { memo } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { appColors, appPadding, appRadius } from "../../utils";

interface ITextInput {
  inputStyle?: object;
}

const InputWrapper = (props: ITextInput & TextInputProps) => {
  return (
    <TextInput
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      placeholderTextColor={appColors.grey}
      style={{ ...styles.style, ...props.inputStyle }}
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
