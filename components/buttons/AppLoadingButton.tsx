import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AppText } from "../texts";
import AppSpinner from "../AppSpinner";
import { appRadius } from "../../utils";

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
      <TouchableOpacity disabled={props.disabled} onPress={props.onPress} activeOpacity={0.5} style={{ ...styles.btnStyle, ...props.btnStyle }}>
         {props.loading ? <AppSpinner color={props.spinnerColor} size={props.spinnerSize} /> : <AppText label={props.label} lblStyle={{ ...styles.lblStyle, ...props.lblStyle }} />}
      </TouchableOpacity>
   );
};

export default AppLoadingButton;

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
