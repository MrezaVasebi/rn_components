import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import ButtonWrapper from "./ButtonWrapper";

export interface ISwitchButton {
  isSelected: boolean;
}

const SwitchButton = (props: ISwitchButton & TouchableOpacityProps) => {
  let style: object = {};
  if (props.isSelected) style = { right: 5, backgroundColor: appColors.red };
  else style = { left: 5, backgroundColor: appColors.white };

  return (
    <ButtonWrapper
      onPress={props.onPress}
      style={[styles.btnStyle, props.style]}
    >
      <View style={{ ...styles.circleStyle, ...style }} />
    </ButtonWrapper>
  );
};

export default memo(SwitchButton);

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
