import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { appColors } from "../utils";
import WrapIcon from "./WrapIcon";
import { ButtonWrapper } from "./buttons";
import { AppText } from "./texts";

/**
 * how to use this component
 interface IData {
  name: string;
  isSelected: boolean;
 }

  const [data, setData] = useState<IData[]>([
    { name: "A", isSelected: false },
    { name: "B", isSelected: false },
    { name: "C", isSelected: false },
    { name: "D", isSelected: false },
    { name: "E", isSelected: false },
    { name: "F", isSelected: false },
    { name: "J", isSelected: false },
    { name: "H", isSelected: false },
    { name: "I", isSelected: false },
  ]);

  let handleSelectedItem = (item: any) => {
    let res = data.map((el) => {
      return el === item ? { ...el, isSelected: !el.isSelected } : { ...el };
    });

    setData(res);
  };

  <AppMultiSelect
    data={data}
    itemLabel="name"
    isShowSelectedCount
    selectedLabel="isSelected"
    lblStyle={{ fontSize: 20 }}
    onPressItem={handleSelectedItem}
  />
 */

interface IAppMultiSelect<D> {
  data: D[];
  lblStyle?: {};
  btnStyle?: {};
  rootStyle?: {};
  scrollStyle?: {};
  itemLabel: string;
  containerStyle?: {};
  selectedLabel: string;
  isShowSelectedCount?: boolean;
  onPressItem: (item: D) => void;
}

const AppMultiSelect = <D,>(props: IAppMultiSelect<D>) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, ...props.scrollStyle }}
      >
        {props.isShowSelectedCount &&
          props?.data.filter((el: any) => el[props.selectedLabel]).length !==
            0 && (
            <AppText
              label={`Selected count: ${props?.data
                ?.filter((el: any) => el[props.selectedLabel])
                .length.toString()}`}
              style={{ marginBottom: 10 }}
            />
          )}

        <View
          style={{
            ...styles.containerStyle,
            ...props.containerStyle,
          }}
        >
          {props.data.length !== 0 &&
            props.data?.map((el: any, index: number) => {
              return (
                <ButtonWrapper
                  key={index}
                  onPress={() => props.onPressItem(el as any)}
                  style={{ ...styles.btnStyle, ...props.btnStyle }}
                >
                  {el[props.selectedLabel] && (
                    <View style={styles.checkStyle}>
                      <WrapIcon
                        size={15}
                        iconName="check"
                        color={appColors.green}
                      />
                    </View>
                  )}

                  <AppText
                    label={el[props.itemLabel]}
                    style={{
                      color: el.isSelected ? appColors.red : appColors.black,
                      ...props.lblStyle,
                    }}
                  />
                </ButtonWrapper>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(AppMultiSelect);

const styles = StyleSheet.create({
  rootStyle: {},
  containerStyle: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  btnStyle: {
    width: 60,
    height: 60,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkStyle: {
    top: 5,
    left: 5,
    position: "absolute",
  },
});
