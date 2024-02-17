import React, { memo } from "react";
import { FlatList } from "react-native";
import { useInstaExplorerLayout } from "../../custom-hooks";
import SixComponents from "./SixComponents";
import ThreeComponents from "./ThreeComponents";

/** how to use this component
   <InstaExplorerLayout
    onPressItem={() => {}}
    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
  /> 

  <InstaExplorerLayout
    onPressItem={() => {}}
    data={["a", "b", "c", "d", "e", "f", "g"]}
  /> 

  <InstaExplorerLayout
    itemLbl="name"
    onPressItem={() => {}}
    data={[{ name: "a" }, { name: "b" }, { name: "c" }]}
  /> 

  <InstaExplorerLayout
    itemLbl="name"
    onPressItem={() => {}}
    data={[{ name: "a" }, { name: "b" }, { name: "c" }]}
  >
    <AppText label="Hi" />
  </InstaExplorerLayout> 
 */

export interface IInstaExplorerLayout {
  data: any;
  itemLbl?: string;
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
              children={props.children}
              itemLbl={props.itemLbl ?? ""}
              onPressItem={props.onPressItem}
            />
          );
        } else if (item.type == 2 || item.type == 4) {
          return (
            <SixComponents
              item={item}
              children={props.children}
              itemLbl={props.itemLbl ?? ""}
              onPressItem={props.onPressItem}
            />
          );
        } else if (item.type == 3) {
          return (
            <ThreeComponents
              item={item}
              isRight={false}
              children={props.children}
              itemLbl={props.itemLbl ?? ""}
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
