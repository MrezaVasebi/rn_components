import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { appColors, appRadius } from "../../utils";

interface ISwitchButton {
   btnStyle?: {};
   isSelected: boolean;
   onPress: () => void;
}

const SwitchButton = (props: ISwitchButton) => {
   let { isSelected, onPress, btnStyle } = props;

   let style: object = {};
   if (isSelected) style = { right: 5, backgroundColor: appColors.red };
   else style = { left: 5, backgroundColor: appColors.white };

   return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={{ ...styles.btnStyle, ...btnStyle }}>
         <View style={{ ...styles.circleStyle, ...style }} />
      </TouchableOpacity>
   );
};

export default SwitchButton;

const styles = StyleSheet.create({
   btnStyle: {
      width: 70,
      height: 35,
      borderRadius: appRadius.xl,
      backgroundColor: appColors.green,
   },
   circleStyle: {
      top: 3,
      width: 27,
      height: 27,
      borderRadius: 15,
      position: "absolute",
   },
});
