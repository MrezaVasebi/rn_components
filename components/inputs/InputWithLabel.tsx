import React, { memo } from "react";
import { StyleSheet, TextInputProps, View } from "react-native";
import { AppText } from "../texts";
import SimpleInput from "./SimpleInput";

interface IInputWithLabel {
  root?: {};
  lblStyle?: {};
  inputStyle?: {};
  label: string;
}

const InputWithLabel = (props: IInputWithLabel & TextInputProps) => {
  return (
    <View style={{ ...styles.root, ...props.root }}>
      <AppText
        label={props.label}
        style={{ ...styles.lblStyle, ...props.lblStyle }}
      />

      <SimpleInput
        value={props.value}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={[styles.inputStyle, props.style]}
        placeholderTextColor={props.placeholderTextColor}
      />
    </View>
  );
};

export default memo(InputWithLabel);

const styles = StyleSheet.create({
  root: {},
  lblStyle: {},
  inputStyle: {
    marginTop: 8,
  },
});
