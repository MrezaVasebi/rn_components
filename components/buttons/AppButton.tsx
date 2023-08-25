import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { appRadius } from "../../utils";
import { AppText } from "../texts";

interface IAppButton {
  label: string;
  btnStyle?: object;
  lblStyle?: object;
  onPress: () => void;
}

const AppButton = (props: IAppButton) => {
  let { label, btnStyle, lblStyle, onPress, ...rest } = props;
  return (
    <TouchableOpacity
      {...rest}
      style={{ ...styles.btnStyle, ...btnStyle }}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <AppText label={label} lblStyle={lblStyle} />
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnStyle: {
    height: 45,
    width: "50%",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: appRadius.m,
  },
});
