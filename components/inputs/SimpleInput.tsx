import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { appColors, appPadding, appRadius } from "../../utils";

interface ISimpleInput {
  value: string;
  inputStyle?: {};
  placeholder: string;
  onChangeText: (value: string) => void;
}

const SimpleInput = (props: ISimpleInput) => {
  let { value, onChangeText, placeholder, inputStyle, ...rest } = props;
  return (
    <TextInput
      placeholderTextColor={appColors.grey}
      placeholder={placeholder}
      {...rest}
      value={value}
      onChangeText={onChangeText}
      style={{ ...styles.inputStyle, ...inputStyle }}
    />
  );
};

export default SimpleInput;

const styles = StyleSheet.create({
  inputStyle: {
    height: 45,
    borderWidth: 0.5,
    borderRadius: appRadius.s,
    borderColor: appColors.grey,
    paddingHorizontal: appPadding.s,
  },
});
