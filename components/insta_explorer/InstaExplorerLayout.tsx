import React from "react";
import { FlatList } from "react-native";
import { useInstaExplorerLayout } from "../../custom-hooks";
import BigItemInLeft from "./BigItemInLeft";
import BigItemInRight from "./BigItemInRight";
import SixComponents from "./SixComponents";

/** how to use this component
// let data = [
//   { lbl: "A" },
//   { lbl: "B" },
//   { lbl: "C" },
//   { lbl: "D" },
//   { lbl: "E" },
//   { lbl: "F" },
//   { lbl: "G" },
//   { lbl: "H" },
//   { lbl: "I" },
// ];

// let data = [1, 2, 3, 4, 5];
// let data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 1, 2, 3, 4, 5, 6];

<InstaExplorerLayout
  data={data}
  itemLbl={"lbl"}
  onPressItem={(value: any) => {
    console.log(value);
  }}
/>
 */

export interface IInstaExplorerLayout {
  data: object;
  itemLbl: string;
  onPressItem: (value: any) => void;
}

export interface IFinalData {
  id: string;
  data: any[];
  type: number;
}

export interface IComponent {
  itemLbl: string;
  item: IFinalData;
  onPressItem: (value: any) => void;
}

const InstaExplorerLayout = (props: IInstaExplorerLayout) => {
  const hook = useInstaExplorerLayout();

  return (
    <FlatList
      data={hook.modifyData(props.data)}
      renderItem={({ item }: { item: IFinalData }) => {
        if (item.type == 1) {
          return (
            <BigItemInRight
              item={item}
              itemLbl={props.itemLbl}
              onPressItem={props.onPressItem}
            />
          );
        } else if (item.type == 2 || item.type == 4) {
          return (
            <SixComponents
              item={item}
              itemLbl={props.itemLbl}
              onPressItem={props.onPressItem}
            />
          );
        } else if (item.type == 3) {
          return (
            <BigItemInLeft
              item={item}
              itemLbl={props.itemLbl}
              onPressItem={props.onPressItem}
            />
          );
        } else {
          return null;
        }
      }}
      keyExtractor={(item: any) => item.id}
    />
  );
};

export default InstaExplorerLayout;
