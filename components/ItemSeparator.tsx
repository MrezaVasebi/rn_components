import React from "react";
import { View } from "react-native";

interface IItemSeparator {
  height: string | number;
}

const ItemSeparator = (props: IItemSeparator) => {
  let { height = 15 } = props;
  return <View style={{ height }} />;
};

export default ItemSeparator;
