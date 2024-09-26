import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../texts";
import SwitchButton, { ISwitchButton } from "./SwitchButton";

interface ISwitchButtonWithLabel {
  label: string;
  lblStyle?: object;
  btnStyle?: object;
  rootStyle?: object;
}

const SwitchButtonWithLabel = (
  props: ISwitchButton & ISwitchButtonWithLabel
) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <SwitchButton isSelected={props.isSelected} style={props.btnStyle} />

      <AppText label={props.label} style={props.lblStyle} />
    </View>
  );
};

export default memo(SwitchButtonWithLabel);

const styles = StyleSheet.create({
  rootStyle: {
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
