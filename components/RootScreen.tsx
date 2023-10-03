import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AppToast, { EnumStatus } from "./AppToast";

interface IRootScreenProps {
  toastMsg?: string;
  rootStyle?: object;
  toastTitle?: string;
  isShowToast?: boolean;
  toastStatus?: EnumStatus;
  children?: React.ReactNode;
}

const RootScreen = (props: IRootScreenProps) => {
  let { children, rootStyle, isShowToast, toastMsg, toastTitle, toastStatus } =
    props;

  return (
    <SafeAreaView style={{ ...styles.rootStyle, ...rootStyle }}>
      {isShowToast && (
        <AppToast
          msgLbl={toastMsg}
          status={toastStatus}
          titleLbl={toastTitle}
        />
      )}

      {children}
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
