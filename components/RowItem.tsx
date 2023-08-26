import React from "react";
import { StyleSheet, View } from "react-native";
import { appColors } from "../utils";
import { AppText } from "./texts";

interface IRowItem {
  root?: {};
  ans: string;
  label: string;
}

const RowItem = (props: IRowItem) => {
  return (
    <View style={{ ...styles.root, ...props.root }}>
      <View style={{ flex: 0.3 }}>
        <AppText label={props.label} lblStyle={styles.lblLabel} />
      </View>

      <View style={{ flex: 0.7 }}>
        <AppText label={props.ans} lblStyle={styles.lblAns} />
      </View>
    </View>
  );
};

export default React.memo(RowItem);

const styles = StyleSheet.create({
  root: {
    marginBottom: 8,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    backgroundColor: appColors.white,
    borderColor: appColors.lightGrey,
  },
  lblLabel: {
    fontSize: 10,
    color: appColors.grey,
  },
  lblAns: {},
});
