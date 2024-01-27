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
  // let { root, label, showLabel, isShowText, onPressEye } = props;

  return (
    <View style={{ ...styles.root, ...props.root }}>
      <ShowLabel label={props.label} isLabelShow={props.showLabel} />

      <View style={{ ...styles.inputContainer }}>
        <ButtonWrapper onPress={props.onPressEye} btnStyle={styles.eyeStyle}>
          {handleIcons(
            props.isShowText ? "eye" : "eyeoff",
            25,
            appColors.black
          )}
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
