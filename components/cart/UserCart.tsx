import React from "react";
import { StyleSheet, View } from "react-native";
import { IAddress, IUser } from "../../dummy/userDataType";
import { appColors, appPadding, appRadius } from "../../utils";
import RowItem from "../RowItem";
import { AppText } from "../texts";

interface IUSerCart {
  root?: {};
  item: IUser;
}

interface ITableItem {
  value: string;
  lblStyle?: {};
}

function showAddress(address: IAddress): string {
  return `${address.streetName}, ${address.allay}, ${address.buildingName}, ${address.postalCode}`;
}

function TableItem(props: ITableItem): JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <AppText label={props.value} lblStyle={props.lblStyle} />
    </View>
  );
}

const UserCart = (props: IUSerCart) => {
  let { item, root } = props;

  return (
    <View style={{ ...styles.root, ...root }}>
      <RowItem label={"FullName"} ans={item.fullName} />
      <RowItem label={"Gender"} ans={item.gender} />
      <RowItem label={"Martial Status"} ans={item.marriedStatus} />

      <RowItem label="Address" ans={showAddress(item.address)} />

      {item.education.length !== 0 && (
        <View style={{ marginVertical: 10 }}>
          <View style={styles.itemStyle}>
            {["Uni Name", "Average", "Start Date", "End Date"].map(
              (el, index) => {
                return (
                  <TableItem
                    key={index}
                    value={el}
                    lblStyle={{ color: appColors.grey }}
                  />
                );
              }
            )}
          </View>

          {item.education.map((el, index) => {
            return (
              <View key={index} style={styles.itemStyle}>
                <TableItem value={el.uniName} />
                <TableItem value={el.average.toString()} />
                <TableItem value={el.startDate.toString()} />
                <TableItem value={el.endDate.toString()} />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  root: {
    borderWidth: 0.5,
    padding: appPadding.m,
    borderRadius: appRadius.m,
    backgroundColor: appColors.white,
    borderColor: appColors.lightGrey,
  },
  itemStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
