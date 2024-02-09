import React, { memo } from "react";
import { Image, StyleSheet, TouchableOpacityProps, View } from "react-native";
import { appColors } from "../utils";
import WrapIcon from "./WrapIcon";
import { ButtonWrapper } from "./buttons";
import { AppText } from "./texts";

interface IAppButton {
  imgUrl: string;
  rootStyle?: {};
  isShowEditButton?: boolean;
}

const AppAvatar = (props: IAppButton & TouchableOpacityProps) => {
  let noImgStyle = {};
  if (!props.imgUrl) {
    noImgStyle = {
      alignItems: "center",
      justifyContent: "center",
    };
  }

  return (
    <ButtonWrapper
      onPress={props.onPress}
      btnStyle={{ ...styles.rootStyle, ...props.rootStyle, ...noImgStyle }}
    >
      {props.imgUrl ? (
        <>
          <Image source={{ uri: props.imgUrl }} style={styles.imgStyle} />

          {props.isShowEditButton && (
            <View style={styles.editCover}>
              <WrapIcon iconName="edit" size={25} color={appColors.white} />
            </View>
          )}
        </>
      ) : (
        <AppText label="Upload Img" />
      )}
    </ButtonWrapper>
  );
};

export default memo(AppAvatar);

const styles = StyleSheet.create({
  rootStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 0.5,
    overflow: "hidden",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  editCover: {
    zIndex: 1,
    bottom: 0,
    height: 35,
    width: "100%",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: appColors.modalBgColor,
  },
});
