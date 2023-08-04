import { StyleSheet, View } from "react-native";
import React from "react";
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
   let { label, root, value, onChangeText, lblStyle, inputStyle, placeholder, ...rest } = props;

   return (
      <View style={{ ...styles.root, ...root }}>
         <AppText lblStyle={{ ...styles.lblStyle, ...lblStyle }} label={label} />

         <SimpleInput inputStyle={{ ...styles.inputStyle, ...inputStyle }} {...rest} onChangeText={onChangeText} value={value} placeholder={placeholder} />
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
