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

interface ISecureInput {
  label: string;
  root?: object;
  isShowText: boolean;
  showLabel?: boolean;
  onPressEye: () => void;
}

const SecureInput = (
  props: ISecureInput & TextInputProps & TouchableOpacityProps
) => {
  let { root, label, showLabel, isShowText, onPressEye } = props;

  return (
    <View style={{ ...styles.root, ...root }}>
      <ShowLabel label={label} isLabelShow={showLabel} />

      <View style={{ ...styles.inputContainer }}>
        <ButtonWrapper onPress={onPressEye} btnStyle={styles.eyeStyle}>
          {handleIcons(isShowText ? "eye" : "eyeoff", 25, appColors.black)}
        </ButtonWrapper>

        <SimpleInput
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          inputStyle={{ ...styles.inputStyle }}
        />
      </View>
    </View>
  );
};

export default memo(SecureInput);

const styles = StyleSheet.create({
  root: {},
  inputContainer: {
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
  eyeStyle: {
    width: 30,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
