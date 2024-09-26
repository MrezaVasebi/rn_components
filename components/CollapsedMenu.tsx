import React, { memo, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { appColors } from "../utils";
import AppFlatList from "./AppFlatList";
import { AppText } from "./texts";

/**
 * how to use this component
 <CollapsedMenu
    data={[
      { title: "Computer", data: [{ lbl: "A" }, { lbl: "D" }] },
      { title: "Table", data: [{ lbl: "B" }] },
      { title: "Room", data: [{ lbl: "C" }] },
    ]}
    itemLbl="lbl"
    dataLbl="data"
    itemTitle="title"
    onPressChild={(value: any) => {
      console.log(value);
    }}
  />
 */

interface ICollapsedMenu<D> {
  data?: D[];
  itemLbl: string;
  dataLbl: string;
  itemTitle: string;
  rootStyle?: object;
  titleStyle?: object;
  childStyle?: object;
  itemContainer?: object;
  lblTitleStyle?: object;
  onPressChild?(value: any): void;
}

const CollapsedMenu = <D,>(props: ICollapsedMenu<D>) => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (props.data && Array.isArray(props.data)) {
      let res = props.data.map((el: any) => {
        return { ...el, isOpened: false };
      });

      setList(res);
    }
  }, [props.data]);

  const handleIsOpened = (item: D) => {
    let res = list.map((el: any) => {
      return el === item ? { ...el, isOpened: !el.isOpened } : { ...el };
    });

    setList(res);
  };

  return (
    <View style={{ ...styles.rootStyle, ...props?.rootStyle }}>
      <AppFlatList
        data={list}
        renderItem={({ item }: { item: any }) => {
          return (
            <View style={{ ...styles.itemContainer, ...props?.itemContainer }}>
              <TouchableOpacity
                onPress={() => handleIsOpened(item)}
                style={{ ...styles.titleStyle, ...props?.titleStyle }}
              >
                <AppText
                  label={item[props?.itemTitle]}
                  style={{
                    ...styles.lblTitleStyle,
                    ...props?.lblTitleStyle,
                  }}
                />
              </TouchableOpacity>

              {item?.isOpened &&
                props?.data &&
                item[props?.dataLbl]?.length !== 0 &&
                item[props?.dataLbl]?.map((el: any, index: number) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        props?.onPressChild && props?.onPressChild(el);
                      }}
                      style={{ ...styles.childStyle, ...props?.childStyle }}
                    >
                      <AppText label={el[props?.itemLbl]} />
                    </TouchableOpacity>
                  );
                })}
            </View>
          );
        }}
      />
    </View>
  );
};

export default memo(CollapsedMenu);

const styles = StyleSheet.create({
  rootStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderColor: appColors.black,
  },
  itemContainer: {},
  titleStyle: {
    paddingBottom: 3,
    borderBottomWidth: 2,
  },
  lblTitleStyle: {},
  childStyle: {
    marginTop: 5,
    marginLeft: 8,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderColor: appColors.grey,
  },
});
