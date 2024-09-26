import React, { memo } from "react";
import { StyleSheet, type TouchableOpacityProps } from "react-native";
import { appColors } from "../../utils";
import WrapIcon from "../WrapIcon";
import { FloatingButtonModal } from "../modal";
import ButtonWrapper from "./ButtonWrapper";

// how to use component
/*
  <FloatingButton
        menu={[
          { name: "language", label: "Language", iconName: "language" },
          { name: "location", label: "Location", iconName: "location" },
          { name: "video", label: "Video", iconName: "video" },
        ]}
        isShowModal={showModal}
        onPressItem={(item: any) => console.log(item)}
        showModalHandler={(value: boolean) => setShowModal(value)}
        innerButtonStyle={{ flexDirection: "row", backgroundColor: "red" }}
      />
*/

// point: `rootStyle` in floatingButton and floatingButtonModal should be same.

interface IMenu {
  name: string;
  label: string;
  iconName: string;
}

export interface IFloatingButton {
  size?: number;
  menu: IMenu[];
  color?: string;
  rootStyle?: {};
  isShowModal: boolean;
  innerButtonStyle?: {};
  onPressItem: (item: object) => void;
  showModalHandler: (value: boolean) => void;
}

const FloatingButton = (props: IFloatingButton & TouchableOpacityProps) => {
  return (
    <>
      <ButtonWrapper
        disabled={props.disabled}
        onPress={() => props.showModalHandler(true)}
        style={[styles.rootStyle, { zIndex: 1 }, props.rootStyle]}
      >
        <WrapIcon
          iconName="plus"
          size={props.size ?? 20}
          color={props.color ?? appColors.white}
        />
      </ButtonWrapper>

      {props.isShowModal && (
        <FloatingButtonModal
          menu={props.menu}
          size={props.size}
          color={props.color}
          rootStyle={props.rootStyle}
          isShowModal={props.isShowModal}
          onPressItem={props.onPressItem}
          innerButtonStyle={props.innerButtonStyle}
          showModalHandler={props.showModalHandler}
        />
      )}
    </>
  );
};

export default memo(FloatingButton);

const styles = StyleSheet.create({
  rootStyle: {
    right: 0,
    width: 45,
    bottom: 0,
    height: 45,
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.red,
  },
});
