import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useAppPin } from "../custom-hooks";
import { appColors } from "../utils";
import WrapIcon from "./WrapIcon";
import { AppText } from "./texts";

/**
 * how to use this component
 <AppPin
    pinLength={{
      a: "",
      b: "",
      c: "",
      d: "",
    }}
    onPressConfirm={(pin: string) => {
      console.log(pin);
    }}
  />
 */

export interface IAppPin {
  pinLength: object;
  onPressConfirm: (pin: string) => void;
}

const AppPin = (props: IAppPin) => {
  const hooks = useAppPin(props);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.otpContainer}>
          <View style={styles.optStyle}>
            {Object.keys(hooks.pin).map((pinKey) => (
              <View key={pinKey} style={styles.optSubContainer}>
                {hooks.pin[pinKey as keyof typeof hooks.pin] ? (
                  hooks.hidden ? (
                    <View style={styles.pinDot} />
                  ) : (
                    <AppText
                      style={{ fontSize: 25 }}
                      label={hooks.pin[pinKey as keyof typeof hooks.pin]}
                    />
                  )
                ) : (
                  <View style={styles.empty} />
                )}
              </View>
            ))}
          </View>

          {hooks.pinValue.length !== 0 && (
            <TouchableOpacity
              disabled={!hooks.pinValue}
              onPress={() => hooks.setHidden(!hooks.hidden)}
              style={[styles.hideBtn, !hooks.pinValue && { opacity: 0.2 }]}
            >
              {hooks.hidden ? (
                <WrapIcon iconName="eyeoff" size={25} />
              ) : (
                <WrapIcon iconName="eye" size={25} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.numberContainer}>
        {hooks.data.map((btn: string | number, index: number) => (
          <View key={index} style={styles.btnContainer}>
            <TouchableWithoutFeedback onPress={() => hooks.onEnterPin(btn)}>
              <View style={styles.eachBtnStyle}>
                <AppText label={btn.toString()} style={styles.btnTxt} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(AppPin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  otpContainer: {
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: "center",
    flexDirection: "row",
    borderColor: appColors.grey,
    justifyContent: "space-between",
  },
  optStyle: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  numberContainer: {
    width: "100%",
    flexWrap: "wrap",
    overflow: "hidden",
    flexDirection: "row",
  },
  btnContainer: {
    borderWidth: 0.5,
    width: 100 / 3 + "%",
    borderColor: appColors.grey,
  },
  eachBtnStyle: {
    paddingVertical: 15,
    alignItems: "center",
  },
  btnTxt: {
    fontSize: 25,
  },
  optSubContainer: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  pinDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: appColors.black,
  },
  pin: {
    fontSize: 20,
  },
  empty: {
    height: 2,
    width: "100%",
    backgroundColor: appColors.black,
  },
  hideBtn: {
    marginHorizontal: 15,
  },
});
