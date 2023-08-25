import React from "react";
import { StyleSheet, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import ShowLabel from "./ShowLabel";
import SimpleInput from "./SimpleInput";

interface IInputWithIcon {
  root?: {};
  value: string;
  inputStyle?: {};
  iconName: string;
  showLabel?: boolean;
  placeholder: string;
  size?: number | undefined;
  color?: string | undefined;
  label?: string | undefined;
  onChangeText: (value: string) => void;
}

const InputWithIcon = (props: IInputWithIcon) => {
  let {
    root,
    color,
    value,
    label,
    iconName,
    size = 20,
    showLabel,
    inputStyle,
    placeholder,
    onChangeText,
  } = props;

  return (
    <>
      <ShowLabel label={label} isLabelShow={showLabel} />

      <View style={{ ...styles.root, ...root }}>
        <SimpleInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
          inputStyle={{ ...styles.inputStyle, ...inputStyle }}
        />

        <WrapIcon
          iconName={iconName}
          color={color}
          size={size}
          rootStyle={styles.iconStyle}
        />
      </View>
    </>
  );
};

export default InputWithIcon;

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
