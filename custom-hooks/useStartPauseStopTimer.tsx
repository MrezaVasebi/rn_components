import { useEffect, useState } from "react";
import { IStartPauseStopTimer } from "../components/timer/StartPauseStopTimer";
import { secondsToTime } from "../modules";

type timeType = { h: number; m: number; s: number };

export const useStartPauseStopTimer = (props: IStartPauseStopTimer) => {
  let timerId: string | number | NodeJS.Timeout | undefined;

  const [time, setTime] = useState<timeType>({ h: 0, m: 0, s: 0 });
  const [seconds, setSeconds] = useState<number>(props.seconds);

  useEffect(() => {
    setTime(secondsToTime(seconds));
  }, []);

  useEffect(() => {
    if (props.timerStatus === "play") {
      timerId = setInterval(() => {
        if (seconds <= 0) {
          // cleanup the interval on complete
          clearInterval(timerId);

          // stop timer
          props.onChangeTimerStatus("stop");

          setSeconds(props.seconds);
          setTime(secondsToTime(props.seconds));
        } else {
          setSeconds((pre) => pre - 1);
          setTime(secondsToTime(seconds - 1));
        }
      }, 1000);
    } else if (props.timerStatus === "pause") {
      // cleanup the interval on complete
      clearInterval(timerId);

      // pause timer
      props.onChangeTimerStatus("pause");
    } else if (props.timerStatus === "stop") {
      // cleanup the interval on complete
      clearInterval(timerId);

      // stop timer
      props.onChangeTimerStatus("stop");

      setSeconds(props.seconds);
      setTime(secondsToTime(props.seconds));
    }

    return () => {
      // cleanup the interval on complete
      clearInterval(timerId);
    };
  }, [props.timerStatus, seconds]);

  return { time };
};
