import React, { memo } from "react";
import { StyleSheet, TextInputProps } from "react-native";
import InputWrapper from "./InputWrapper";

interface ISimpleInput {
  inputStyle?: {};
}

const SimpleInput = (props: ISimpleInput & TextInputProps) => {
  return (
    <InputWrapper
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      inputStyle={{ ...styles.inputStyle, ...props.inputStyle }}
    />
  );
};

export default memo(SimpleInput);

const styles = StyleSheet.create({
  inputStyle: {},
});
