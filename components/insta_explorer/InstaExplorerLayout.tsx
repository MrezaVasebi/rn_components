import React, { memo } from "react";
import { FlatList } from "react-native";
import { useInstaExplorerLayout } from "../../custom-hooks";
import SixComponents from "./SixComponents";
import ThreeComponents from "./ThreeComponents";

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
  itemLbl="name"
  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  onPressItem={(value: any) =>
    console.log(JSON.stringify(value, null, 2))
  }
/>

Or

<InstaExplorerLayout
  itemLbl="name"
  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  onPressItem={(value: any) =>
    console.log(JSON.stringify(value, null, 2))
  }>
  <AppText label="Hi" />
</InstaExplorerLayout>
 */

export interface IInstaExplorerLayout {
  data: any;
  itemLbl: string;
  children?: React.ReactNode;
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
  children?: React.ReactNode;
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
            <ThreeComponents
              item={item}
              isRight={true}
              itemLbl={props.itemLbl}
              children={props.children}
              onPressItem={props.onPressItem}
            />
          );
        } else if (item.type == 2 || item.type == 4) {
          return (
            <SixComponents
              item={item}
              itemLbl={props.itemLbl}
              children={props.children}
              onPressItem={props.onPressItem}
            />
          );
        } else if (item.type == 3) {
          return (
            <ThreeComponents
              item={item}
              isRight={false}
              itemLbl={props.itemLbl}
              children={props.children}
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

export default memo(InstaExplorerLayout);
