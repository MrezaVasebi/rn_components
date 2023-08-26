import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";

interface IRadioButtonProps {
  lblStyle?: {};
  btnStyle?: {};
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const RadioButton = (props: IRadioButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <View style={styles.circleStyle}>
        <View
          style={{
            ...styles.innerStyle,
            backgroundColor: props.isSelected ? appColors.red : appColors.white,
          }}
        />
      </View>

      <AppText
        label={props.label}
        lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
      />
    </TouchableOpacity>
  );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  lblStyle: {
    fontSize: 20,
  },
  circleStyle: {
    width: 20,
    height: 20,
    marginRight: 5,
    borderWidth: 0.5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.black,
  },
  innerStyle: {
    width: 13,
    height: 13,
    borderRadius: 10,
  },
});
