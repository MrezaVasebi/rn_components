import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface ILineTabButton {
  root?: object;
  tabName: string;
  lblLeft: string;
  lblRight: string;
  btnStyleLeft?: object;
  btnStyleRight?: object;
  onPressLeft: () => void;
  onPressRight: () => void;
}

interface IBtn {
  label: string;
  tabName: string;
  lblStyle?: object;
  btnStyle?: object;
}

const Btn = (props: IBtn & TouchableOpacityProps) => {
  let { label, tabName, onPress, btnStyle, lblStyle } = props;

  return (
    <ButtonWrapper
      onPress={onPress}
      btnStyle={{
        ...styles.btnStyle,
        ...btnStyle,
        borderBottomWidth: tabName === label ? 2 : 0,
      }}
    >
      <AppText label={label} lblStyle={{ ...styles.lblStyle, ...lblStyle }} />
    </ButtonWrapper>
  );
};

const LineTabButton = (props: ILineTabButton) => {
  return (
    <View style={{ ...styles.root, ...props.root }}>
      <Btn
        tabName={props.tabName}
        onPress={props.onPressLeft}
        label={props.lblLeft}
        btnStyle={props.btnStyleLeft}
      />

      <Btn
        tabName={props.tabName}
        onPress={props.onPressRight}
        label={props.lblRight}
        btnStyle={props.btnStyleRight}
      />
    </View>
  );
};

export default memo(LineTabButton);

const styles = StyleSheet.create({
  root: {
    height: 45,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderColor: appColors.grey,
  },
  btnStyle: {
    width: "50%",
    paddingBottom: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  lblStyle: {
    fontSize: 15,
  },
});
