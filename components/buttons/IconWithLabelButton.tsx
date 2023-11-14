import React from "react";
import {
  OpaqueColorValue,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IIconWithLabelButton {
  label: string;
  iconName: string;
  lblStyle?: object;
  rootStyle?: object;
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
      btnStyle={{ ...styles.rootStyle, ...props.rootStyle }}
    >
      <AppText
        lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
        label={props.label}
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

export default IconWithLabelButton;

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
