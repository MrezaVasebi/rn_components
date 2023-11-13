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
  let { root, label, lblStyle, inputStyle } = props;

  return (
    <View style={{ ...styles.root, ...root }}>
      <AppText lblStyle={{ ...styles.lblStyle, ...lblStyle }} label={label} />

      <SimpleInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        inputStyle={{ ...styles.inputStyle, ...inputStyle }}
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
