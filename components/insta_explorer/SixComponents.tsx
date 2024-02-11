import React, { memo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import FinalItem from "./FinalItem";
import { IComponent } from "./InstaExplorerLayout";

const { width } = Dimensions.get("window");
const smallWidth = width / 3;

const SixComponents = (props: IComponent) => {
  return (
    <View style={[styles.row, styles.rowWrap]}>
      {props?.item?.data?.map((x: any, index: number) => (
        <View key={index} style={styles.sixRowStyle}>
          <FinalItem
            data={x}
            itemLbl={props?.itemLbl}
            children={props?.children}
            onPressItem={props?.onPressItem}
          />
        </View>
      ))}
    </View>
  );
};

export default memo(SixComponents);

const styles = StyleSheet.create({
  row: { flexDirection: "row", width: "100%" },
  rowWrap: { flexWrap: "wrap" },
  sixRowStyle: {
    padding: 1,
    height: smallWidth,
    width: 100 / 3 + "%",
  },
});
