import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { appRadius } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IAppButton {
  label: string;
  btnStyle?: object;
  lblStyle?: object;
}

const AppButton = (props: IAppButton & TouchableOpacityProps) => {
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

export default memo(AppButton);

const styles = StyleSheet.create({
  btnStyle: {
    height: 45,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: appRadius.m,
  },
});
