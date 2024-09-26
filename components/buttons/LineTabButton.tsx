import React, { memo } from "react";
import {
  StyleSheet,
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

// how to use component
/*
  <LineTabButton
    lblLeft="left"
    lblRight="right"
    tabName={tabName}
    onPressLeft={() => setTabName("left")}
    onPressRight={() => setTabName("right")}
  />
*/

interface ILineTabButton {
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
}

const Btn = (props: IBtn & TouchableOpacityProps) => {
  let { label, tabName, lblStyle } = props;
  return (
    <ButtonWrapper
      onPress={props.onPress}
      style={[
        styles.btnStyle,
        props.style,
        { borderBottomWidth: tabName === label ? 2 : 0 },
      ]}
    >
      <AppText label={label} style={{ ...styles.lblStyle, ...lblStyle }} />
    </ButtonWrapper>
  );
};

const LineTabButton = (props: ILineTabButton & ViewProps) => {
  return (
    <View style={[styles.root, props.style]}>
      <Btn
        label={props.lblLeft}
        tabName={props.tabName}
        style={props.btnStyleLeft}
        onPress={props.onPressLeft}
      />

      <Btn
        label={props.lblRight}
        tabName={props.tabName}
        style={props.btnStyleRight}
        onPress={props.onPressRight}
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
