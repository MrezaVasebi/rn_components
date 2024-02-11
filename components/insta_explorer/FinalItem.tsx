import React, { memo } from "react";
import EachItem from "./EachItem";

interface IFinalItem {
  data: any;
  itemLbl: string;
  children: React.ReactNode;
  onPressItem: (value: any) => void;
}

const FinalItem = (props: IFinalItem) => {
  return (
    <EachItem
      data={props.data}
      itemLbl={props.itemLbl}
      children={props.children}
      onPressItem={props.onPressItem}
    />
  );
};

export default memo(FinalItem);
