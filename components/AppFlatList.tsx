import React from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import FooterLoading from "./FooterLoading";
import ItemSeparator from "./ItemSeparator";

interface IAppFlatList {
  data: [];
  contentStyle?: {};
  isLoading?: boolean | undefined;
  renderItem: ListRenderItem<never> | null | undefined;
  onEndReached?:
    | ((info: { distanceFromEnd: number }) => void)
    | null
    | undefined;
}

const AppFlatList = ({
  data,
  isLoading,
  renderItem,
  onEndReached,
  contentStyle,
}: IAppFlatList) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<FooterLoading isLoading={isLoading} />}
      contentContainerStyle={{ ...styles.contentStyle, ...contentStyle }}
    />
  );
};

export default React.memo(AppFlatList);

const styles = StyleSheet.create({
  contentStyle: {},
});
