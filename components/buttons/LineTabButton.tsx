import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";

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
  onPress: () => void;
}

const Btn = (props: IBtn) => {
  let { label, tabName, onPress, btnStyle, lblStyle } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        ...styles.btnStyle,
        ...btnStyle,
        borderBottomWidth: tabName === label ? 2 : 0,
      }}
    >
      <AppText label={label} lblStyle={{ ...styles.lblStyle, ...lblStyle }} />
    </TouchableOpacity>
  );
};

const LineTabButton = (props: ILineTabButton) => {
  let {
    root,
    tabName,
    lblLeft,
    lblRight,
    onPressLeft,
    onPressRight,
    btnStyleLeft,
    btnStyleRight,
  } = props;
  return (
    <View style={{ ...styles.root, ...root }}>
      <Btn
        tabName={tabName}
        onPress={onPressLeft}
        label={lblLeft}
        btnStyle={btnStyleLeft}
      />

      <Btn
        tabName={tabName}
        onPress={onPressRight}
        label={lblRight}
        btnStyle={btnStyleRight}
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
