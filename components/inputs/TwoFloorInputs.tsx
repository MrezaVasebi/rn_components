import React, { memo } from "react";
import { StyleSheet, TextInputProps, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import ShowLabel from "./ShowLabel";
import SimpleInput from "./SimpleInput";

interface ITwoFloorInput {
  root?: object;
  valueTop: string;
  inputStyleTop?: {};
  showLabel?: boolean;
  placeholderTop: string;
  label?: string | undefined;
  onChangeTextTop: (value: string) => void;
  valueBottom: string;
  inputStyleBottom?: {};
  placeholderBottom: string;
  onChangeTextBottom: (value: string) => void;
}

const TwoFloorInputs = (props: ITwoFloorInput & TextInputProps) => {
  return (
    <>
      <ShowLabel label={props.label} isLabelShow={props.showLabel} />

      <View style={{ ...styles.root, ...props.root }}>
        <SimpleInput
          value={props.valueTop}
          placeholder={props.placeholderTop}
          onChangeText={props.onChangeTextTop}
          inputStyle={{
            ...styles.commonStyle,
            ...props.inputStyleTop,
          }}
        />

        <View style={styles.lineStyle} />

        <SimpleInput
          value={props.valueBottom}
          placeholder={props.placeholderBottom}
          onChangeText={props.onChangeTextBottom}
          inputStyle={{
            ...styles.commonStyle,
            ...props.inputStyleBottom,
          }}
        />
      </View>
    </>
  );
};

export default memo(TwoFloorInputs);

const styles = StyleSheet.create({
  root: {
    height: 100,
    borderWidth: 0.5,
    overflow: "hidden",
    borderRadius: appRadius.m,
    borderColor: appColors.grey,
    justifyContent: "space-between",
    backgroundColor: appColors.lightGrey,
  },
  commonStyle: {
    height: "49%",
    borderWidth: 0,
  },
  lineStyle: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: appColors.grey,
  },
});
