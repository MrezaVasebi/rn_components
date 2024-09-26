import React, { memo, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

const SwitchSelectorWithAnimation = () => {
  const [active, setActive] = useState(0);

  const positionAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = (index: number) => {
    setActive(index);

    Animated.timing(positionAnim, {
      toValue: index === 0 ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(colorAnim, {
      toValue: index === 0 ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const translateX = positionAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 148],
  });

  const SwitchBtn = ({ index, lbl }: { index: number; lbl: string }) => {
    return (
      <ButtonWrapper
        style={styles.switchOption}
        onPress={() => toggleSwitch(index)}
      >
        <Animated.View style={[styles.switchTextContainer]}>
          <AppText
            label={lbl}
            style={[styles.switchText, active === index && styles.activeText]}
          />
        </Animated.View>
      </ButtonWrapper>
    );
  };

  return (
    <View style={{ margin: 10 }}>
      <View style={styles.switchContainer}>
        <SwitchBtn index={0} lbl="SignUp" />
        <SwitchBtn index={1} lbl="Login" />

        <Animated.View
          style={[styles.selector, { transform: [{ translateX }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 300,
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    backgroundColor: appColors.lightGrey,
  },
  switchOption: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchTextContainer: {
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  switchText: {
    fontSize: 16,
    color: appColors.black,
  },
  activeText: {
    color: "black",
  },
  selector: {
    top: 2,
    left: 1,
    right: 1,
    bottom: 2,
    width: 150,
    zIndex: -1,
    height: "92%",
    borderRadius: 25,
    position: "absolute",
    backgroundColor: appColors.white,
  },
});

export default memo(SwitchSelectorWithAnimation);
