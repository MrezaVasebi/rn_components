import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { appColors } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface ICheckBoxButton {
  lblStyle?: {};
  btnStyle?: {};
  label: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  onPress: () => void;
  isSelected: boolean;
}

const CheckBoxButton = (props: ICheckBoxButton) => {
  let { iconColor = appColors.red, iconName = "check", iconSize = 18 } = props;

  return (
    <ButtonWrapper
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <View style={styles.circleStyle}>
        {props.isSelected && (
          <WrapIcon iconName={iconName} color={iconColor} size={iconSize} />
        )}
      </View>

      <AppText
        label={props.label}
        lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
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
