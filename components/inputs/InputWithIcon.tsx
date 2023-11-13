import React, { memo } from "react";
import {
  OpaqueColorValue,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";
import { appColors, appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import ShowLabel from "./ShowLabel";
import SimpleInput from "./SimpleInput";

interface IInputWithIcon {
  root?: {};
  inputStyle?: {};
  iconName: string;
  showLabel?: boolean;
  size?: number | undefined;
  label?: string | undefined;
  color?: string | OpaqueColorValue;
}

const InputWithIcon = (props: IInputWithIcon & TextInputProps) => {
  let {
    root,
    color,
    label,
    iconName,
    size = 20,
    showLabel,
    inputStyle,
  } = props;

  return (
    <>
      <ShowLabel label={label} isLabelShow={showLabel} />

      <View style={{ ...styles.root, ...root }}>
        <SimpleInput
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputStyle={{ ...styles.inputStyle, ...inputStyle }}
        />

        <WrapIcon
          size={size}
          color={color}
          iconName={iconName}
          rootStyle={styles.iconStyle}
        />
      </View>
    </>
  );
};

export default memo(InputWithIcon);

const styles = StyleSheet.create({
  root: {
    height: 45,
    borderWidth: 0.5,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: appRadius.s,
    borderColor: appColors.grey,
  },
  inputStyle: {
    flex: 1,
    borderWidth: 0,
  },
  iconStyle: {
    width: 35,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
