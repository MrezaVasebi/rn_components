import React, { memo } from "react";
import {
  StyleSheet,
  TextInputProps,
  TouchableOpacityProps,
  View,
} from "react-native";
import { handleIcons } from "../../modules";
import { appColors, appRadius } from "../../utils";
import { ButtonWrapper } from "../buttons";
import ShowLabel from "./ShowLabel";
import SimpleInput from "./SimpleInput";

interface IInputWithClearButton {
  label: string;
  rootStyle?: object;
  inputStyle?: object;
  showLabel?: boolean;
  onPressClear: () => void;
  inputContainerStyle?: object;
}

const InputWithClearButton = (
  props: IInputWithClearButton & TextInputProps & TouchableOpacityProps
) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <ShowLabel label={props.label} isLabelShow={props.showLabel} />

      <View style={{ ...styles.inputContainerStyle }}>
        <ButtonWrapper onPress={props.onPressClear} style={styles.clearStyle}>
          {handleIcons("close", 20, appColors.black)}
        </ButtonWrapper>

        <SimpleInput
          value={props.value}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          placeholderTextColor={props.placeholderTextColor}
          style={{ ...styles.inputStyle, ...props.inputStyle }}
        />
      </View>
    </View>
  );
};

export default memo(InputWithClearButton);

const styles = StyleSheet.create({
  rootStyle: {},
  inputContainerStyle: {
    borderWidth: 0.5,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: appRadius.s,
    flexDirection: "row-reverse",
  },
  inputStyle: {
    flex: 1,
    borderWidth: 0,
  },
  clearStyle: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
