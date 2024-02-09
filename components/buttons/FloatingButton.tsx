import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
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
    innerButtonStyle={styles.rootStyle}
    onPressItem={(item) => console.log(item)}
    showModalHandler={(value) => setShowModal(value)}
  />
*/

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
        onPress={() => props.showModalHandler(true)}
        btnStyle={{ ...styles.rootStyle, zIndex: 1, ...props.rootStyle }}
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
    width: 60,
    bottom: 0,
    height: 60,
    borderRadius: 20,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.red,
  },
});
