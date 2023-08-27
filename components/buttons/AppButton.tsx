import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { appRadius } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IAppButton {
  label: string;
  btnStyle?: object;
  lblStyle?: object;
  onPress: () => void;
}

const AppButton = (props: IAppButton) => {
  let { label, btnStyle, lblStyle, onPress, ...rest } = props;
  return (
    <ButtonWrapper
      onPress={onPress}
      style={{ ...styles.btnStyle, ...btnStyle }}
      {...rest}
    >
      <AppText label={label} lblStyle={lblStyle} />
    </ButtonWrapper>
  );
};

export default memo(AppButton);

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
