import { View } from "react-native";
import React from "react";

interface IItemSeparator {
   height: string | number;
}

const ItemSeparator = (props: IItemSeparator) => {
   let { height = 15 } = props;
   return <View style={{ height }} />;
};

export default ItemSeparator;
