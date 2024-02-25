import React, { memo } from "react";
import {
  Image,
  OpaqueColorValue,
  StyleSheet,
  TouchableOpacityProps,
  View,
} from "react-native";
import { appColors } from "../utils";
import WrapIcon from "./WrapIcon";
import { ButtonWrapper } from "./buttons";

interface IAppButton {
  imgUrl?: string;
  rootStyle?: {};
  iconName?: string;
  iconSize?: number;
  isShowEditButton?: boolean;
  iconColor?: string | OpaqueColorValue;
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
        <>
          <WrapIcon
            size={props.iconSize ?? 35}
            iconName={props.iconName ?? "user"}
            color={props.iconColor ?? appColors.black}
          />

          {/* <AppText label="Upload Img" lblStyle={{ marginTop: 10 }} /> */}
        </>
      )}
    </ButtonWrapper>
  );
};

export default memo(AppAvatar);

const styles = StyleSheet.create({
  rootStyle: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 40,
    overflow: "hidden",
    borderColor: appColors.lightGrey,
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
