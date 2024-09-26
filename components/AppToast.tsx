import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { appColors, appRadius } from "../utils";
import { AppText, AppTitle } from "./texts";

interface IAppToast {
  root?: {};
  msgStyle?: {};
  titleStyle?: {};
  msgLbl: string | undefined;
  position?: "top" | "bottom";
  titleLbl: string | undefined;
  status?: "success" | "error" | "info" | "warn";
}

const AppToast = (props: IAppToast) => {
  let {
    root,
    msgLbl,
    msgStyle,
    titleLbl,
    titleStyle,
    status = "error",
    position = "top",
  } = props;

  let positionStyle = {};
  if (position === "top") positionStyle = { top: 20 };
  else positionStyle = { bottom: 20 };

  function setBgColor(): string {
    if (status === "success") return appColors.green;
    if (status === "info") return appColors.blue;
    if (status === "warn") return appColors.yellow;
    else return appColors.red;
  }

  return (
    <View style={{ ...styles.root, ...positionStyle, ...root }}>
      <View style={{ ...styles.sideStyle, backgroundColor: setBgColor() }} />

      <View style={styles.contentStyle}>
        <AppTitle
          label={titleLbl}
          style={{
            ...styles.titleStyle,
            ...titleStyle,
            color: setBgColor(),
          }}
        />

        <AppText label={msgLbl} style={{ ...styles.msgStyle, ...msgStyle }} />
      </View>
    </View>
  );
};

export default memo(AppToast);

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
