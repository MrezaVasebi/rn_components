import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { appColors } from "../../utils";
import AppFlatList from "../AppFlatList";
import WrapIcon from "../WrapIcon";
import ButtonWrapper from "../buttons/ButtonWrapper";
import { IFloatingButton } from "../buttons/FloatingButton";
import AppText from "../texts/AppText";

const FloatingButtonModal = (props: IFloatingButton) => {
  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <TouchableWithoutFeedback onPress={() => props.showModalHandler(false)}>
        <View style={styles.modalStyle}>
          <View style={styles.menuStyle}>
            <AppFlatList
              data={props.menu}
              separatedHeight={10}
              renderItem={({ item }: { item: any }) => {
                return (
                  <ButtonWrapper
                    btnStyle={styles.itemStyle}
                    onPress={() => {
                      props.onPressItem(item);

                      // close modal
                      props.showModalHandler(false);
                    }}
                  >
                    <AppText
                      label={item?.label}
                      lblStyle={{ color: appColors.white }}
                    />

                    <WrapIcon
                      size={20}
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
            onPress={() => props.showModalHandler(false)}
            btnStyle={{ ...styles.rootStyle, ...props.innerButtonStyle }}
          >
            <WrapIcon
              iconName="close"
              size={props.size ?? 20}
              color={props.color ?? appColors.white}
            />
          </ButtonWrapper>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default React.memo(FloatingButtonModal);

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
