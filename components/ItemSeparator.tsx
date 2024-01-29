import React from "react";
import { View } from "react-native";

interface IItemSeparator {
  height?: string | number;
}

const ItemSeparator = (props: IItemSeparator) => {
  return <View style={{ height: props.height ?? 15 }} />;
};

export default React.memo(ItemSeparator);
