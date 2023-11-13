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
  root?: object;
  showLabel?: boolean;
  onPressClear: () => void;
}

const InputWithClearButton = (
  props: IInputWithClearButton & TextInputProps & TouchableOpacityProps
) => {
  return (
    <View style={{ ...styles.root, ...props.root }}>
      <ShowLabel label={props.label} isLabelShow={props.showLabel} />

      <View style={{ ...styles.inputContainer }}>
        <ButtonWrapper
          onPress={props.onPressClear}
          btnStyle={styles.clearStyle}
        >
          {handleIcons("close", 20, appColors.black)}
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

export default memo(InputWithClearButton);

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
  clearStyle: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
