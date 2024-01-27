import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { appColors, appPadding } from "../../utils";
import { AppTitle } from "../texts";

interface IRootMOdal {
  title: string;
  mainStyle?: {};
  innerStyle?: {};
  children?: React.ReactNode;
  onPressCloseModal: () => void;
}

const RootModalScreen = (props: IRootMOdal) => {
  let { onPressCloseModal, children, mainStyle, innerStyle, title } = props;

  return (
    <Modal animationType="fade" transparent={true} statusBarTranslucent={true}>
      <TouchableWithoutFeedback onPress={onPressCloseModal}>
        <View style={{ ...styles.mainStyle, ...mainStyle }}>
          <View
            onStartShouldSetResponder={() => true}
            style={{ ...styles.innerStyle, ...innerStyle }}
          >
            <View style={styles.titleContainer}>
              <AppTitle label={title} lblStyle={styles.lblTitleStyle} />
            </View>

            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default React.memo(RootModalScreen);

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: appColors.modalBgColor,
  },
  innerStyle: {
    height: "85%",
    padding: appPadding.l,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: appColors.white,
  },
  titleContainer: {
    alignItems: "flex-start",
  },
  lblTitleStyle: {
    paddingBottom: 3,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
});
