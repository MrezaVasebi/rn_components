import { useEffect, useState } from "react";
import { ITimerCountDown } from "../components/timer/TimerCountDown";

export const useTimerCountDown = (props: ITimerCountDown) => {
  let timerId: NodeJS.Timeout;

  const [secondsLeft, setSecondsLeft] = useState(props.seconds);

  const startTimer = () => {
    timerId = setTimeout(() => {
      if (secondsLeft <= 0) {
        clearTimeout(timerId);
        return false;
      }
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timerId);
  }, [secondsLeft]);

  const onStartAgain = () => {
    setSecondsLeft(props.seconds);
    clearTimeout(timerId);
    startTimer();
  };

  return { secondsLeft, onStartAgain };
};
