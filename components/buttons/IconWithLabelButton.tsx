import React from "react";
import { StyleSheet } from "react-native";
import { appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface IIconWithLabelButton {
  label: string;
  color?: string;
  iconName: string;
  lblStyle?: object;
  rootStyle?: object;
  iconStyle?: object;
  onPress: () => void;
  size?: number | undefined;
}

const IconWithLabelButton = (props: IIconWithLabelButton) => {
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
        color={props.color}
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
