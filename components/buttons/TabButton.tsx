import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

interface ITabButton {
  rootStyle?: {};
  innerStyle?: {};
  tabName: string;
  leftLabel: string;
  rightLabel: string;
  onPressLeft: () => void;
  onPressRight: () => void;
}

interface ITabs {
  label: string;
  tabName: string;
}

const TabButton = (props: ITabButton) => {
  const Tabs = (props: ITabs & TouchableOpacityProps) => {
    return (
      <ButtonWrapper
        onPress={props.onPress}
        style={{
          ...styles.tabStyle,
          backgroundColor:
            props.label === props.tabName ? appColors.red : appColors.white,
          borderWidth: props.label === props.tabName ? 0 : 1,
        }}
      >
        <AppText
          label={props.label}
          style={{
            // fontSize: props.label === props.tabName ? 18 : 15,
            color:
              props.label === props.tabName ? appColors.white : appColors.red,
          }}
        />
      </ButtonWrapper>
    );
  };

  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <View style={{ ...styles.innerStyle, ...props.innerStyle }}>
        <Tabs
          tabName={props.tabName}
          onPress={props.onPressLeft}
          label={props.leftLabel}
        />

        <Tabs
          tabName={props.tabName}
          label={props.rightLabel}
          onPress={props.onPressRight}
        />
      </View>
    </View>
  );
};

export default memo(TabButton);

const styles = StyleSheet.create({
  rootStyle: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  innerStyle: {
    padding: 5,
    width: "80%",
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.lightGrey,
  },
  tabStyle: {
    width: "49%",
    height: "100%",
    borderWidth: 0.5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.grey,
  },
});
