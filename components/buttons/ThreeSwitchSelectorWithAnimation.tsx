import React, { memo, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { appColors } from "../../utils";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

const ThreeSwitchSelectorWithAnimation: React.FC = () => {
  const [active, setActive] = useState(0);

  const colorAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = (index: number) => {
    setActive(index);

    Animated.timing(positionAnim, {
      toValue: index,
      duration: 300,
      useNativeDriver: false,
    }).start();

    Animated.timing(colorAnim, {
      toValue: index,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const translateX = positionAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 98, 198],
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
        <SwitchBtn index={0} lbl="Withdraw" />
        <SwitchBtn index={1} lbl="Deposit" />
        <SwitchBtn index={2} lbl="Balance" />

        <Animated.View
          style={[styles.selector, { transform: [{ translateX }] }]}
        />
      </View>
    </View>
  );
};

export default memo(ThreeSwitchSelectorWithAnimation);

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
    zIndex: -1,
    width: 100,
    height: "92%",
    borderRadius: 25,
    position: "absolute",
    backgroundColor: appColors.white,
  },
});
