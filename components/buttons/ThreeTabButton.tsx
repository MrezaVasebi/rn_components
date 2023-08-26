import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";

interface ITabButton {
  rootStyle?: {};
  innerStyle?: {};
  tabName: string;
  leftLabel: string;
  rightLabel: string;
  centerLabel: string;
  onPressLeft: () => void;
  onPressRight: () => void;
  onPressCenter: () => void;
}

interface ITabs {
  btnStyle: {};
  label: string;
  tabName: string;
  onPress: () => void;
}

const ThreeTabButton = (props: ITabButton) => {
  const Tabs = (props: ITabs) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.5}
        style={{
          ...styles.tabStyle,
          backgroundColor:
            props.label === props.tabName ? appColors.red : appColors.white,
          ...props.btnStyle,
        }}
      >
        <AppText
          label={props.label}
          lblStyle={{
            fontSize: props.label === props.tabName ? 18 : 15,
            color:
              props.label === props.tabName ? appColors.white : appColors.red,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <View style={{ ...styles.innerStyle, ...props.innerStyle }}>
        <Tabs
          tabName={props.tabName}
          label={props.leftLabel}
          onPress={props.onPressLeft}
          btnStyle={{
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        />

        <Tabs
          tabName={props.tabName}
          label={props.centerLabel}
          onPress={props.onPressCenter}
          btnStyle={{
            borderRadius: 0,
          }}
        />

        <Tabs
          tabName={props.tabName}
          label={props.rightLabel}
          onPress={props.onPressRight}
          btnStyle={{
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

export default memo(ThreeTabButton);

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
    width: "32.5%",
    height: "100%",
    borderWidth: 0.5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.grey,
  },
});
