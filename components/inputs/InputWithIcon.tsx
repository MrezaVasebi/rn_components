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
  return (
    <>
      <ShowLabel label={props.label} isLabelShow={props.showLabel} />

      <View style={{ ...styles.root, ...props.root }}>
        <SimpleInput
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputStyle={{ ...styles.inputStyle, ...props.inputStyle }}
        />

        <WrapIcon
          color={props.color}
          iconName={props.iconName}
          size={props.size ?? 20}
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
