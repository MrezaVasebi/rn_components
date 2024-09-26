import React, { memo } from "react";
import {
  OpaqueColorValue,
  StyleSheet,
  type TouchableOpacityProps,
} from "react-native";
import { appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IIconWithLabelButton {
  label: string;
  iconName: string;
  lblStyle?: object;
  iconStyle?: object;
  size?: number | undefined;
  iconColor?: string | OpaqueColorValue;
}

const IconWithLabelButton = (
  props: IIconWithLabelButton & TouchableOpacityProps
) => {
  return (
    <ButtonWrapper
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.rootStyle, props.style]}
    >
      <AppText
        label={props.label}
        style={{ ...styles.lblStyle, ...props.lblStyle }}
      />

      <WrapIcon
        size={props.size}
        color={props.iconColor}
        iconName={props.iconName}
        rootStyle={{ ...styles.iconStyle, ...props.iconStyle }}
      />
    </ButtonWrapper>
  );
};

export default memo(IconWithLabelButton);

const styles = StyleSheet.create({
  rootStyle: {
    height: 45,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: appRadius.m,
    flexDirection: "row-reverse",
  },
  lblStyle: {},
  iconStyle: {
    marginRight: 5,
  },
});
