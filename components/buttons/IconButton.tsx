import React, { memo } from "react";
import {
  OpaqueColorValue,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { appColors, appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import ButtonWrapper from "./ButtonWrapper";

interface IIconButton {
  iconName: string;
  size?: number | undefined;
  color?: string | OpaqueColorValue;
}

const IconButton = (props: IIconButton & TouchableOpacityProps) => {
  return (
    <ButtonWrapper
      onPress={props.onPress}
      style={[styles.btnStyle, props.style]}
    >
      <WrapIcon
        color={props.color}
        size={props.size ?? 20}
        iconName={props.iconName}
      />
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
