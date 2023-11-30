import React from "react";
import { StyleSheet, View } from "react-native";
import { useStartPauseStopTimer } from "../../custom-hooks";
import { appColors } from "../../utils";
import { IconButton } from "../buttons";
import { AppText } from "../texts";

interface IStartPauseStopTimer {
  seconds: number;
  rootStyle?: object;
  timerStatus: string;
  onChangeTimerStatus: (status: string) => void;
}

// how to use this component
/*
  const [timerStatus, setTimerStatus] = useState("");
  
  const onChangeTimerStatus = (status: string) => {
    setTimerStatus(status);
  };

  <StartPauseStopTimer
    seconds={10}
    timerStatus={timerStatus}
    onChangeTimerStatus={(status) => onChangeTimerStatus(status)}
  />
*/

const StartPauseStopTimer = (props: IStartPauseStopTimer) => {
  const { time } = useStartPauseStopTimer(props);

  const timerCompo = (value: number) => {
    return (
      <View style={styles.timerStyle}>
        <AppText
          label={value < 10 ? "0" + value.toString() : value.toString()}
        />
      </View>
    );
  };

  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <View style={styles.timerWrapper}>
        {timerCompo(time.m)}
        <AppText label=" : " />
        {timerCompo(time.s)}
      </View>

      <View style={styles.buttonWrapper}>
        <IconButton
          iconName="stop"
          btnStyle={{ ...styles.iconStyle }}
          onPress={() => props.onChangeTimerStatus("stop")}
          color={props.timerStatus === "stop" ? appColors.red : appColors.black}
        />

        <IconButton
          iconName="pause"
          onPress={() => props.onChangeTimerStatus("pause")}
          btnStyle={{ ...styles.iconStyle, marginHorizontal: 10 }}
          color={
            props.timerStatus === "pause" ? appColors.red : appColors.black
          }
        />

        <IconButton
          iconName="play"
          btnStyle={{ ...styles.iconStyle }}
          onPress={() => props.onChangeTimerStatus("play")}
          color={props.timerStatus === "play" ? appColors.red : appColors.black}
        />
      </View>
    </View>
  );
};

export default StartPauseStopTimer;

const styles = StyleSheet.create({
  rootStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 7,
  },
  timerWrapper: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  timerStyle: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
