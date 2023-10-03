import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

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
        <ButtonWrapper
          onPress={props.onPressShowModal}
          btnStyle={styles.showModalStyle}
        >
          <AppText label={props.selectedLabel} />
        </ButtonWrapper>

        {props.selectedLabel !== props.placeHolder && (
          <ButtonWrapper
            onPress={props.onDeleteValue}
            btnStyle={styles.deleteStyle}
          >
            <WrapIcon iconName="close" size={20} />
          </ButtonWrapper>
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
