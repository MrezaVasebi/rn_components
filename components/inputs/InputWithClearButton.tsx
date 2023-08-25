import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { handleIcons } from "../../modules";
import { appColors, appRadius } from "../../utils";
import ShowLabel from "./ShowLabel";
import SimpleInput from "./SimpleInput";

interface IInputWithClearButton {
  label: string;
  root?: object;
  value: string;
  placeholder: string;
  showLabel?: boolean;
  onPressClear: () => void;
  onChangeText: (value: string) => void;
}

const InputWithClearButton = (props: IInputWithClearButton) => {
  let {
    root,
    value,
    label,
    showLabel,
    placeholder,
    onPressClear,
    onChangeText,
  } = props;

  return (
    <View style={{ ...styles.root, ...root }}>
      <ShowLabel label={label} isLabelShow={showLabel} />

      <View style={{ ...styles.inputContainer }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPressClear}
          style={styles.clearStyle}
        >
          {handleIcons("close", 20, appColors.black)}
        </TouchableOpacity>

        <SimpleInput
          inputStyle={{ ...styles.inputStyle }}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
        />
      </View>
    </View>
  );
};

export default InputWithClearButton;

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
