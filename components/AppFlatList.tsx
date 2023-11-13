import React from "react";
import { ColorValue, FlatList, FlatListProps, StyleSheet } from "react-native";
import FooterLoading from "./FooterLoading";
import ItemSeparator from "./ItemSeparator";

interface IAppFlatList {
  isLoading: boolean;
  color?: ColorValue;
  contentContainerStyle?: object;
  size?: number | "small" | "large";
}

const AppFlatList = <ItemT,>(props: IAppFlatList & FlatListProps<ItemT>) => {
  return (
    <FlatList
      data={props.data}
      onEndReachedThreshold={0.5}
      renderItem={props.renderItem}
      onEndReached={props.onEndReached}
      ItemSeparatorComponent={ItemSeparator}
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
    />
  );
};

export default AppFlatList;

const styles = StyleSheet.create({
  contentStyle: {},
});
