import React, { memo } from "react";
import EachItem from "./EachItem";

interface IFinalItem {
  data: any;
  itemLbl: string;
  onPressItem: (value: any) => void;
}

const FinalItem = (props: IFinalItem) => {
  return (
    <EachItem
      data={props.data}
      itemLbl={props.itemLbl}
      onPressItem={props.onPressItem}
    />
  );
};

export default memo(FinalItem);
