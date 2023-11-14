import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { appColors } from "../../utils";
import AppFlatList from "../AppFlatList";
import WrapIcon from "../WrapIcon";
import { AppText } from "../texts";
import ButtonWrapper from "./ButtonWrapper";

// how to use component
/*
  <FloatingButton
    menu={[
    { _id: "Language", name: "Language", iconName: "language" },
    { _id: "Location", name: "Location", iconName: "location" },
    { _id: "Video", name: "Video", iconName: "video" },
    ]}
    showModalHandler={(value) => setShowModal(value)}
    isShowModal={showModal}
    innerButtonStyle={styles.rootStyle}
    onPressItem={(value) => console.log(value)}
  />
  */

interface IMenu {
  _id: string;
  name: string;
  iconName: string;
}

interface IFloatingButton {
  size?: number;
  menu: IMenu[];
  color?: string;
  rootStyle?: {};
  isShowModal: boolean;
  innerButtonStyle?: {};
  onPressItem: (item: object) => void;
  showModalHandler: (isShowModal: boolean) => void;
}

const FloatingButton = (props: IFloatingButton & TouchableOpacityProps) => {
  let {
    menu,
    rootStyle,
    size = 25,
    isShowModal,
    onPressItem,
    showModalHandler,
    innerButtonStyle,
    color = appColors.white,
  } = props;

  return (
    <>
      <ButtonWrapper
        onPress={() => showModalHandler(true)}
        btnStyle={{ ...styles.rootStyle, zIndex: 1, ...rootStyle }}
      >
        <WrapIcon iconName="plus" color={color} size={size} />
      </ButtonWrapper>

      {isShowModal && (
        <Modal transparent statusBarTranslucent animationType="fade">
          <TouchableWithoutFeedback onPress={() => showModalHandler(false)}>
            <View style={styles.modalStyle}>
              <View style={styles.menuStyle}>
                <AppFlatList
                  data={menu}
                  separatedHeight={10}
                  renderItem={({ item }) => {
                    return (
                      <ButtonWrapper
                        btnStyle={styles.itemStyle}
                        onPress={() => {
                          onPressItem(item);

                          // close modal
                          showModalHandler(false);
                        }}
                      >
                        <AppText
                          label={item?.name}
                          lblStyle={{ color: appColors.white }}
                        />

                        <WrapIcon
                          color={appColors.white}
                          iconName={item?.iconName}
                          rootStyle={{ marginRight: 10 }}
                        />
                      </ButtonWrapper>
                    );
                  }}
                  flatStyle={{ marginBottom: 10 }}
                />
              </View>

              <ButtonWrapper
                onPress={() => showModalHandler(false)}
                btnStyle={{ ...styles.rootStyle, ...innerButtonStyle }}
              >
                <WrapIcon iconName="close" color={color} size={size} />
              </ButtonWrapper>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </>
  );
};

export default FloatingButton;

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
  modalStyle: {
    flex: 1,
    backgroundColor: appColors.modalBgColor,
  },
  menuStyle: {
    right: 50,
    bottom: 80,
    position: "absolute",
  },
  itemStyle: {
    padding: 5,
    borderRadius: 5,
    // marginBottom: 15,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    backgroundColor: appColors.green,
  },
});
