import React, { memo } from "react";
import { StyleSheet, TouchableOpacityProps, View } from "react-native";
import { appColors, appRadius } from "../../utils";
import AppFlatList from "../AppFlatList";
import WrapIcon from "../WrapIcon";
import SimpleInput from "../inputs/SimpleInput";
import { RootModalScreen } from "../modal";
import AppText from "../texts/AppText";
import ButtonWrapper from "./ButtonWrapper";

interface ISingleSelectButtonModal<D> {
  label: string;
  itemLabel: string;
  lblStyle?: object;
  rootStyle?: object;
  showModal: boolean;
  modalTitle?: string;
  innerStyle?: object;
  placeholder: string;
  selectedLabel: string;
  isShowSearch?: boolean;
  modalData: ArrayLike<D>;
  onDeleteValue: () => void;
  onSelectItem: (item: D) => void;
  onChangeText?: (value: string) => void;
  onPressShowModal: (value: boolean) => void;
}

// how to use component
/*
export interface IModalData {
  name: string;
  label: string;
}

  const [name, setName] = useState<string>("Selecting...");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Array<IModalData>>([
    { name: "tabriz", label: "Tabriz" },
    { name: "tehran", label: "Tehran" },
    { name: "Shiraz", label: "Shiraz" },
  ]);
  const [copyModalData, setCopyModalData] = useState<Array<IModalData>>([
    { name: "tabriz", label: "Tabriz" },
    { name: "tehran", label: "Tehran" },
    { name: "Shiraz", label: "Shiraz" },
  ]);

  const handleSearchValue = (value: string) => {
    if (value.length === 0) setCopyModalData(modalData);
    else {
      let res = modalData.filter((el) => el.label.includes(value));
      setCopyModalData(res);
    }
  };

  <SingleSelectButtonModal
    itemLabel="label"
    isShowSearch={true}
    selectedLabel={name}
    showModal={showModal}
    placeholder="Selecting..."
    label={"Please select city name"}
    modalData={copyModalData as IModalData[]}
    onDeleteValue={() => setName("Selecting...")}
    onChangeText={(value: string) => handleSearchValue(value)}
    onSelectItem={(item: any) => {
      // selected item
      console.log({ item });
      setName(item.label);

      // close modal
      setShowModal(false);
    }}
    onPressShowModal={(value: boolean) => {
      setShowModal(value);
    }}
  />
*/

const SingleSelectButtonModal = <D,>(
  props: ISingleSelectButtonModal<D> & TouchableOpacityProps
) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <AppText
        label={props.label}
        lblStyle={{ ...styles.lblStyle, ...props.lblStyle }}
      />

      <View style={{ ...styles.innerStyle, ...props.innerStyle }}>
        <ButtonWrapper
          btnStyle={styles.showModalStyle}
          onPress={() => props.onPressShowModal(true)}
        >
          <AppText
            label={props.selectedLabel}
            lblStyle={{
              color:
                props.selectedLabel === props.placeholder
                  ? appColors.grey
                  : appColors.black,
            }}
          />
        </ButtonWrapper>

        {props.selectedLabel !== props.placeholder && (
          <ButtonWrapper
            onPress={props.onDeleteValue}
            btnStyle={styles.deleteStyle}
          >
            <WrapIcon iconName="close" size={20} />
          </ButtonWrapper>
        )}
      </View>

      {props.showModal && (
        <RootModalScreen
          mainStyle={{}}
          innerStyle={{}}
          title={props.modalTitle ?? "Select Item"}
          onPressCloseModal={() => props.onPressShowModal(false)}
        >
          <View style={{ flex: 1 }}>
            {props.isShowSearch && (
              <View style={{ marginBottom: 15 }}>
                <SimpleInput
                  placeholder="Search"
                  inputStyle={styles.inputStyle}
                  onChangeText={props.onChangeText}
                />
              </View>
            )}

            <AppFlatList
              separatedHeight={5}
              data={props.modalData}
              renderItem={({ item }: { item: any }) => {
                return (
                  <ButtonWrapper
                    onPress={() => {
                      props.onSelectItem(item);
                    }}
                    btnStyle={styles.btnStyle}
                  >
                    <AppText
                      lblStyle={{ fontSize: 15 }}
                      label={item[props.itemLabel]}
                    />
                  </ButtonWrapper>
                );
              }}
            />
          </View>
        </RootModalScreen>
      )}
    </View>
  );
};

export default memo(SingleSelectButtonModal);

const styles = StyleSheet.create({
  rootStyle: {},
  lblStyle: {},
  innerStyle: {
    height: 45,
    marginTop: 10,
    borderWidth: 0.5,
    overflow: "hidden",
    paddingHorizontal: 7,
    flexDirection: "row",
    borderRadius: appRadius.m,
    borderColor: appColors.grey,
  },
  showModalStyle: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: "center",
  },
  deleteStyle: {
    width: 30,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    height: 40,
    borderBottomWidth: 1,
    justifyContent: "center",
    borderColor: appColors.lightGrey,
  },
  inputStyle: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
  },
});
