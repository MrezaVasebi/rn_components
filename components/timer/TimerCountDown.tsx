import React from "react";
import { StyleSheet, View } from "react-native";
import { useTimerCountDown } from "../../custom-hooks";
import { IconButton } from "../buttons";
import { AppText } from "../texts";

export interface ITimerCountDown {
  seconds: number;
  rotoStyle?: object;
}

const TimerCountDown = (props: ITimerCountDown) => {
  const { secondsLeft, onStartAgain } = useTimerCountDown(props);

  return (
    <View style={{ ...styles.rootStyle, ...props.rotoStyle }}>
      <View style={styles.timerStyle}>
        <AppText
          label={
            secondsLeft.toString().length === 1
              ? "0" + secondsLeft
              : secondsLeft.toString()
          }
        />
      </View>

      {secondsLeft === 0 && (
        <IconButton
          iconName="play"
          onPress={onStartAgain}
          btnStyle={styles.iconStyle}
        />
      )}
    </View>
  );
};

export default TimerCountDown;

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerStyle: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: 32,
    height: 32,
    marginLeft: 10,
    borderRadius: 7,
  },
});
