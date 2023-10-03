import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import ButtonWrapper from "./ButtonWrapper";

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
    <ButtonWrapper
      onPress={onPress}
      btnStyle={{ ...styles.btnStyle, ...btnStyle }}
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
