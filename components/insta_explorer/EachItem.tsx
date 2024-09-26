import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { ButtonWrapper } from "../buttons";
import { AppText } from "../texts";

interface IEachItem {
  data: any;
  itemLbl: string;
  children: React.ReactNode;
  onPressItem: (value: any) => void;
}

const EachItem = (props: IEachItem) => {
  return (
    props.data && (
      <ButtonWrapper
        style={styles.itemStyle}
        onPress={() => props.onPressItem(props.data)}
      >
        {props.children ? (
          props.children
        ) : typeof props.data === "object" ? (
          <AppText style={{ fontSize: 25 }} label={props.data[props.itemLbl]} />
        ) : (
          <AppText label={props.data} style={{ fontSize: 25 }} />
        )}
      </ButtonWrapper>
    )
  );
};

export default memo(EachItem);

const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#bbb",
    justifyContent: "center",
  },
});
