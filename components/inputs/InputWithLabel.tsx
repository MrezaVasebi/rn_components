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
        lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
        label={props.label}
      />

      <SimpleInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        inputStyle={{ ...styles.inputStyle, ...props.inputStyle }}
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
