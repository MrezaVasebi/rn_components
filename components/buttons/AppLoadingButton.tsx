import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { appRadius } from "../../utils";
import AppSpinner from "../AppSpinner";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IAppLoadingButton {
  label: string;
  loading: boolean;
  disabled: boolean;
  btnStyle?: object;
  lblStyle?: object;
  onPress: () => void;
  spinnerColor?: string;
  spinnerSize?: number | "small" | "large";
}

const AppLoadingButton = (props: IAppLoadingButton) => {
  return (
    <ButtonWrapper
      disabled={props.disabled}
      onPress={props.onPress}
      btnStyle={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      {props.loading ? (
        <AppSpinner color={props.spinnerColor} size={props.spinnerSize} />
      ) : (
        <AppText
          label={props.label}
          lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
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
