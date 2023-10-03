import React from "react";
import { StyleSheet, View } from "react-native";
import { appColors, appRadius } from "../utils";
import { AppText, AppTitle } from "./texts";

export enum EnumStatus {
  error,
  success,
}

enum EnumToastPosition {
  top,
  bottom,
}

interface IAppToast {
  root?: {};
  msgStyle?: {};
  titleStyle?: {};
  status?: EnumStatus;
  msgLbl: string | undefined;
  titleLbl: string | undefined;
  position?: EnumToastPosition;
}

const AppToast = (props: IAppToast) => {
  let {
    root,
    msgLbl,
    msgStyle,
    titleLbl,
    titleStyle,
    status = EnumStatus.error,
    position = EnumToastPosition.top,
  } = props;

  let positionStyle = {};
  if (position === EnumToastPosition.top) positionStyle = { top: 20 };
  else positionStyle = { bottom: 20 };

  function setBgColor(): string {
    if (status === EnumStatus.success) return appColors.green;
    else return appColors.red;
  }

  return (
    <View style={{ ...styles.root, ...positionStyle, ...root }}>
      <View style={{ ...styles.sideStyle, backgroundColor: setBgColor() }} />

      <View style={styles.contentStyle}>
        <AppTitle
          label={titleLbl}
          lblStyle={{
            ...styles.titleStyle,
            ...titleStyle,
            color: setBgColor(),
          }}
        />

        <AppText
          label={msgLbl}
          lblStyle={{ ...styles.msgStyle, ...msgStyle }}
        />
      </View>
    </View>
  );
};

export default AppToast;

const styles = StyleSheet.create({
  root: {
    left: 20,
    right: 20,
    zIndex: 1,
    borderWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row",
    position: "absolute",
    borderRadius: appRadius.m,
    borderColo: appColors.black,
    backgroundColor: appColors.white,
  },
  sideStyle: {
    width: 13,
    height: "100%",
  },
  contentStyle: {
    marginLeft: 10,
    marginVertical: 5,
  },
  titleStyle: {},
  msgStyle: {
    marginVertical: 5,
    color: appColors.grey,
  },
});
