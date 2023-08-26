import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";

interface IChoosingModalButton {
  label: string;
  lblStyle?: {};
  rootStyle?: {};
  innerStyle?: {};
  placeHolder: string;
  selectedLabel: string;
  onDeleteValue: () => void;
  onPressShowModal: () => void;
}

const ChoosingModalButton = (props: IChoosingModalButton) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <AppText
        label={props.label}
        lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
      />

      <View style={{ ...styles.innerStyle, ...props.innerStyle }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={props.onPressShowModal}
          style={styles.showModalStyle}
        >
          <AppText label={props.selectedLabel} />
        </TouchableOpacity>

        {props.selectedLabel !== props.placeHolder && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onDeleteValue}
            style={styles.deleteStyle}
          >
            <WrapIcon iconName="close" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(ChoosingModalButton);

const styles = StyleSheet.create({
  rootStyle: {},
  lblStyle: {},
  innerStyle: {
    height: 45,
    marginTop: 10,
    borderWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: appRadius.s,
    borderColor: appColors.grey,
  },
  showModalStyle: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: "center",
  },
  deleteStyle: {
    width: 30,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
