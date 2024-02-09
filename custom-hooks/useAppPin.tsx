import { useState } from "react";
import { IAppPin } from "../components/AppPin";

export const useAppPin = (props: IAppPin) => {
  const data: (string | number)[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "Clear",
    0,
    "Ok",
  ];

  // add values to change pin length
  // const initialPin: IValueLength = {
  //   a: "",
  //   b: "",
  //   c: "",
  //   d: "",
  // };

  // const [pin, setPin] = useState({ ...initialPin });
  const [pin, setPin] = useState<object>({ ...props.pinLength });
  const [hidden, setHidden] = useState<boolean>(false);

  const onEnterPin = (btn: number | string) => {
    if (typeof btn == "number") {
      for (let i = 0; i < Object.keys(pin).length; i += 1) {
        let key: string = Object.keys(pin)[i];
        if (!pin[key as keyof typeof pin]) {
          const newPin: any = { ...pin };
          newPin[key as keyof typeof pin] = btn.toString();
          setPin(newPin);
          break;
        }
      }
    } else {
      if (btn == "Clear") {
        for (let i = 0; i < Object.keys(pin).length; i += 1) {
          let key: string = Object.keys(pin).reverse()[i];
          if (pin[key as keyof typeof pin]) {
            const newPin: any = { ...pin };
            newPin[key as keyof typeof pin] = "";
            setPin(newPin);
            break;
          }
        }
      }
      if (btn == "Ok") {
        let pinValue: string = Object.keys(pin)
          .map((pinKey) => pin[pinKey as keyof typeof pin])
          .filter((x) => x)
          .join("");

        // alert(
        //   pinValue.length !== Object.keys(pin).length
        //     ? "Please enter " + Object.keys(pin).length + " digit PIN"
        //     : "pin you entered is - " + pinValue
        // );

        if (pinValue.length == Object.keys(pin).length) {
          // do your action
          props.onPressConfirm(pinValue);
        }
      }
    }
  };

  let pinValue = Object.keys(pin)
    .map((pinKey) => pin[pinKey as keyof typeof pin])
    .filter((x) => x)
    .join(" ");

  return {
    pin,
    data,
    hidden,
    setPin,
    pinValue,
    setHidden,
    onEnterPin,
  };
};
