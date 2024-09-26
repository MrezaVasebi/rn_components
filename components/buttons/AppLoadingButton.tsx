import React, { memo } from "react";
import {
  ColorValue,
  StyleSheet,
  type TouchableOpacityProps,
} from "react-native";
import { appRadius } from "../../utils";
import AppSpinner from "../AppSpinner";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IAppLoadingButton {
  label: string;
  loading: boolean;
  lblStyle?: object;
  spinnerColor: ColorValue;
  spinnerSize?: number | "small" | "large";
}

const AppLoadingButton = (props: IAppLoadingButton & TouchableOpacityProps) => {
  return (
    <ButtonWrapper
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.btnStyle, props.style]}
    >
      {props.loading ? (
        <AppSpinner color={props.spinnerColor} size={props.spinnerSize} />
      ) : (
        <AppText
          label={props.label}
          style={{ ...styles.lblStyle, ...props.lblStyle }}
        />
      )}
    </ButtonWrapper>
  );
};

export default memo(AppLoadingButton);

const styles = StyleSheet.create({
  btnStyle: {
    height: 45,
    width: "50%",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: appRadius.m,
  },
  lblStyle: {},
});
