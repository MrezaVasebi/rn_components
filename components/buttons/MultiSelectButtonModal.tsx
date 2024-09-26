import React, { memo } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from "react-native";
import { appColors, appRadius } from "../../utils";
import AppFlatList from "../AppFlatList";
import WrapIcon from "../WrapIcon";
import SimpleInput from "../inputs/SimpleInput";
import RootModalScreen from "../modal/RootModalScreen";
import AppText from "../texts/AppText";
import ButtonWrapper from "./ButtonWrapper";
import CheckBoxButton from "./CheckBoxButton";

interface IMultiSelectButtonModal<D> {
  label: string;
  modalData: D[];
  itemLabel: string;
  lblStyle?: object;
  showModal: boolean;
  rootStyle?: object;
  innerStyle?: object;
  modalTitle?: string;
  placeholder: string;
  isShowSearch?: boolean;
  onSelectItem: (item: D) => void;
  onChangeText?: (value: string) => void;
  onDeleteSelectedItem: (item: D) => void;
  onPressShowModal: (value: boolean) => void;
}

// how to use component
/*
  export interface IModalData {
    name: string;
    label: string;
    isChecked: boolean;
  }

  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Array<IModalData>>([
    { name: "tabriz", label: "Tabriz", isChecked: false },
    { name: "tehran", label: "Tehran", isChecked: false },
    { name: "shiraz", label: "Shiraz", isChecked: false },
  ]);
  const pureData = [
    { name: "tabriz", label: "Tabriz", isChecked: false },
    { name: "tehran", label: "Tehran", isChecked: false },
    { name: "shiraz", label: "Shiraz", isChecked: false },
  ];

  const onDeleteSelectedItem = (item: IModalData) => {
    let res = modalData.map((el) => {
      return item === el ? { ...el, isChecked: false } : { ...el };
    });
    setModalData(res);
  };

  const onSelectItem = (item: IModalData) => {
    let res = modalData.map((el) => {
      return el === item ? { ...el, isChecked: !el.isChecked } : { ...el };
    });
    setModalData(res);
  };

  const handleSearchValue = (value: string) => {
    let res = pureData.filter((el) => el.label.includes(value));
    setModalData(res);
  };

  <MultiSelectButtonModal
    itemLabel={"label"}
    isShowSearch={true}
    showModal={showModal}
    placeholder="Selecting..."
    label="Please select city names"
    modalData={modalData as IModalData[]}
    onSelectItem={(item: any) => onSelectItem(item)}
    onChangeText={(value: string) => handleSearchValue(value)}
    onPressShowModal={(value: boolean) => {
      if (value) {
        let selectedItem = modalData.filter((el) => el.isChecked);

        let newData = [...pureData];
        if (selectedItem.length > 0) {
          for (const selected of selectedItem) {
            for (const pure of newData) {
              if (selected.name === pure.name) {
                pure.isChecked = true;
              }
            }
          }
        }
        setModalData(newData);
      }
      setShowModal(value);
    }}
    onDeleteSelectedItem={(item: any) => onDeleteSelectedItem(item)}
  />
*/

const MultiSelectButtonModal = <D,>(
  props: IMultiSelectButtonModal<D> & TouchableOpacityProps
) => {
  return (
    <View style={{ ...styles.rootStyle }}>
      <AppText
        label={props.label}
        style={{ ...styles.lblStyle, ...props.lblStyle }}
      />

      <View style={{ ...styles.innerStyle, ...props.innerStyle }}>
        <ButtonWrapper
          style={styles.showModalStyle}
          onPress={() => props.onPressShowModal(true)}
        >
          {props.modalData.filter((el: any) => el.isChecked).length > 0 ? (
            <View style={styles.itemContainer}>
              {props.modalData.map((el: any, index: number) => {
                if (el.isChecked)
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.itemStyle}
                      onPress={() => props.onDeleteSelectedItem(el)}
                    >
                      <AppText label={el[props.itemLabel]} />

                      <WrapIcon
                        size={15}
                        iconName="close"
                        rootStyle={{ marginLeft: 8 }}
                      />
                    </TouchableOpacity>
                  );
              })}
            </View>
          ) : (
            <View style={styles.noItemStyle}>
              <AppText
                label={props.placeholder}
                style={{ color: appColors.grey }}
              />

              <WrapIcon size={13} iconName="down" color={appColors.grey} />
            </View>
          )}
        </ButtonWrapper>
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

            <View style={{ flex: 1 }}>
              <AppFlatList
                data={props.modalData}
                renderItem={({ item }: { item: any }) => {
                  return (
                    <CheckBoxButton
                      isSelected={item.isChecked}
                      label={item[props.itemLabel]}
                      onPress={() => props.onSelectItem(item)}
                    />
                  );
                }}
              />
            </View>
          </View>
        </RootModalScreen>
      )}
    </View>
  );
};

export default memo(MultiSelectButtonModal);

const styles = StyleSheet.create({
  rootStyle: {},
  lblStyle: {},
  innerStyle: {
    marginTop: 10,
    paddingLeft: 7,
    borderWidth: 0.5,
    overflow: "hidden",
    paddingVertical: 10,
    flexDirection: "row",
    borderRadius: appRadius.m,
    borderColor: appColors.grey,
  },
  noItemStyle: {
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  showModalStyle: {
    flex: 1,
  },
  itemContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  itemStyle: {
    padding: 7,
    marginRight: 7,
    borderWidth: 1,
    marginBottom: 3,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    borderColor: appColors.lightGrey,
  },
  inputStyle: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
  },
});
