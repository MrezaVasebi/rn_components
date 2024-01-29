import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AppToast from "./AppToast";

interface IRootScreenProps {
  toastMsg?: string;
  rootStyle?: object;
  toastTitle?: string;
  isShowToast?: boolean;
  children?: React.ReactNode;
  toastPosition?: "top" | "bottom";
  toastStatus?: "success" | "error" | "info" | "warn";
}

const RootScreen = (props: IRootScreenProps) => {
  return (
    <SafeAreaView style={{ ...styles.rootStyle, ...props.rootStyle }}>
      {props.isShowToast && (
        <AppToast
          msgLbl={props.toastMsg}
          status={props.toastStatus}
          titleLbl={props.toastTitle}
          position={props.toastPosition}
        />
      )}

      {props.children}
    </SafeAreaView>
  );
};

export default React.memo(RootScreen);

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
