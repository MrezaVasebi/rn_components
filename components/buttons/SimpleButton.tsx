import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { appRadius } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface ISimpleButton {
  label: string;
  btnStyle?: object;
  lblStyle?: object;
}

const SimpleButton = (props: ISimpleButton & TouchableOpacityProps) => {
  return (
    <ButtonWrapper
      onPress={props.onPress}
      disabled={props.disabled}
      btnStyle={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <AppText label={props.label} lblStyle={props.lblStyle} />
    </ButtonWrapper>
  );
};

export default memo(SimpleButton);

const styles = StyleSheet.create({
  btnStyle: {
    height: 45,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: appRadius.m,
  },
});
