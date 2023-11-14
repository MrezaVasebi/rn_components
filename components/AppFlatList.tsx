import React from "react";
import { ColorValue, FlatList, FlatListProps, StyleSheet } from "react-native";
import FooterLoading from "./FooterLoading";
import ItemSeparator from "./ItemSeparator";

interface IAppFlatList {
  flatStyle?: object;
  color?: ColorValue;
  isLoading?: boolean;
  contentContainerStyle?: object;
  separatedHeight?: number | string;
  size?: number | "small" | "large";
}

const AppFlatList = <ItemT,>(props: IAppFlatList & FlatListProps<ItemT>) => {
  return (
    <FlatList
      data={props.data}
      onEndReachedThreshold={0.5}
      renderItem={props.renderItem}
      onEndReached={props.onEndReached}
      ItemSeparatorComponent={() => (
        <ItemSeparator height={props.separatedHeight} />
      )}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={() => (
        <FooterLoading
          size={props.size}
          color={props.color}
          isLoading={props.isLoading}
        />
      )}
      contentContainerStyle={{
        ...styles.contentStyle,
        ...props.contentContainerStyle,
      }}
      style={props.flatStyle}
    />
  );
};

export default AppFlatList;

const styles = StyleSheet.create({
  contentStyle: {},
});
