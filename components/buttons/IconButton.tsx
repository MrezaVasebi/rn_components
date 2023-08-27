import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { appColors, appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import ButtonWrapper from "./ButtonWrapper";

interface IIconButton {
  color?: string;
  btnStyle?: {};
  iconName: string;
  onPress: () => void;
  size?: number | undefined;
}

const IconButton = (props: IIconButton) => {
  let { onPress, btnStyle, iconName, color, size = 20 } = props;

  return (
    <ButtonWrapper
      style={{ ...styles.btnStyle, ...btnStyle }}
      onPress={onPress}
    >
      <WrapIcon iconName={iconName} color={color} size={size} />
    </ButtonWrapper>
  );
};

export default memo(IconButton);

const styles = StyleSheet.create({
  btnStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: appRadius.m,
    borderColor: appColors.grey,
  },
});
