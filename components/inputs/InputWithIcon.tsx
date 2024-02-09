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
  rootStyle?: {};
  inputStyle?: {};
  iconName: string;
  showLabel?: boolean;
  inputContainerStyle?: {};
  size?: number | undefined;
  label?: string | undefined;
  color?: string | OpaqueColorValue;
}

const InputWithIcon = (props: IInputWithIcon & TextInputProps) => {
  return (
    <View style={{ ...props.rootStyle }}>
      <ShowLabel label={props.label} isLabelShow={props.showLabel} />

      <View
        style={{ ...styles.inputContainerStyle, ...props.inputContainerStyle }}
      >
        <SimpleInput
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputStyle={{ ...styles.inputStyle, ...props.inputStyle }}
        />

        <WrapIcon
          color={props.color}
          size={props.size ?? 20}
          iconName={props.iconName}
          rootStyle={styles.iconStyle}
        />
      </View>
    </View>
  );
};

export default memo(InputWithIcon);

const styles = StyleSheet.create({
  inputContainerStyle: {
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
