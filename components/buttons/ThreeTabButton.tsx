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
  centerLabel: string;
  onPressLeft: () => void;
  onPressRight: () => void;
  onPressCenter: () => void;
}

interface ITabs {
  label: string;
  tabName: string;
}

const ThreeTabButton = (props: ITabButton) => {
  const Tabs = (props: TouchableOpacityProps & ITabs) => {
    return (
      <ButtonWrapper
        onPress={props.onPress}
        style={[
          styles.tabStyle,
          {
            backgroundColor:
              props.label === props.tabName ? appColors.red : appColors.white,
            borderWidth: props.label === props.tabName ? 0 : 1,
          },
          props.style,
        ]}
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
          label={props.leftLabel}
          onPress={props.onPressLeft}
          style={{
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        />

        <Tabs
          tabName={props.tabName}
          label={props.centerLabel}
          onPress={props.onPressCenter}
          style={{
            borderRadius: 0,
          }}
        />

        <Tabs
          tabName={props.tabName}
          label={props.rightLabel}
          onPress={props.onPressRight}
          style={{
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
