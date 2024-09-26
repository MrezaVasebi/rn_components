import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps, View } from "react-native";
import { appColors } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface ICheckBoxButton {
  label: string;
  lblStyle?: object;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  isSelected: boolean;
}

const CheckBoxButton = (props: ICheckBoxButton & TouchableOpacityProps) => {
  return (
    <ButtonWrapper
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.btnStyle, props.style]}
    >
      <View style={styles.circleStyle}>
        {props.isSelected && (
          <WrapIcon
            size={props.iconSize ?? 18}
            iconName={props.iconName ?? "check"}
            color={props.iconColor ?? appColors.red}
          />
        )}
      </View>

      <AppText
        label={props.label}
        style={{ ...styles.lblStyle, ...props.lblStyle }}
      />
    </ButtonWrapper>
  );
};

export default memo(CheckBoxButton);

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  lblStyle: {
    fontSize: 20,
  },
  circleStyle: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderRadius: 3,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.black,
  },
});
