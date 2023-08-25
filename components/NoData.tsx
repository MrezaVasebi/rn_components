import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "./texts";

interface INoData {
  root: {};
  lblStyle: {};
  label: string;
}

const NoData = (props: INoData) => {
  let { label = "No data", root, lblStyle } = props;
  return (
    <View style={{ ...styles.root, ...root }}>
      <AppText lblStyle={{ ...styles.lblStyle, ...lblStyle }} label={label} />
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lblStyle: {
    opacity: 0.5,
  },
});
