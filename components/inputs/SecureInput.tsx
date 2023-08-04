import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import SimpleInput from "./SimpleInput";
import { handleIcons } from "../../modules";
import { appColors, appRadius } from "../../utils";
import ShowLabel from "./ShowLabel";

interface ISecureInput {
   label: string;
   root?: object;
   value: string;
   isShowText: boolean;
   placeholder: string;
   showLabel?: boolean;
   onPressEye: () => void;
   onChangeText: (value: string) => void;
}

const SecureInput = (props: ISecureInput) => {
   let { isShowText, value, placeholder, onChangeText, label, showLabel, root, onPressEye } = props;

   return (
      <View style={{ ...styles.root, ...root }}>
         <ShowLabel label={label} isLabelShow={showLabel} />

         <View style={{ ...styles.inputContainer }}>
            <TouchableOpacity activeOpacity={0.5} onPress={onPressEye} style={styles.eyeStyle}>
               {handleIcons(isShowText ? "eye" : "eyeoff", 25, appColors.black)}
            </TouchableOpacity>

            <SimpleInput inputStyle={{ ...styles.inputStyle }} onChangeText={onChangeText} placeholder={placeholder} value={value} />
         </View>
      </View>
   );
};

export default SecureInput;

const styles = StyleSheet.create({
   root: {},
   inputContainer: {
      borderWidth: 0.5,
      overflow: "hidden",
      alignItems: "center",
      borderRadius: appRadius.s,
      flexDirection: "row-reverse",
   },
   inputStyle: {
      flex: 1,
      borderWidth: 0,
   },
   eyeStyle: {
      width: 30,
      alignItems: "center",
      justifyContent: "center",
   },
});
