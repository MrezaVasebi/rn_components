import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../texts";
import SimpleInput from "./SimpleInput";

interface IInputWithLabel {
  root?: {};
  lblStyle?: {};
  inputStyle?: {};
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

const InputWithLabel = (props: IInputWithLabel) => {
  let {
    root,
    label,
    value,
    lblStyle,
    inputStyle,
    placeholder,
    onChangeText,
    ...rest
  } = props;

  return (
    <View style={{ ...styles.root, ...root }}>
      <AppText lblStyle={{ ...styles.lblStyle, ...lblStyle }} label={label} />

      <SimpleInput
        inputStyle={{ ...styles.inputStyle, ...inputStyle }}
        {...rest}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  root: {},
  lblStyle: {},
  inputStyle: {
    marginTop: 8,
  },
});
