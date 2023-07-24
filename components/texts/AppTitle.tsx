import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";

interface IAppTitleProps {
   label: string;
   lblStyle?: object;
}

const AppTitle = (props: IAppTitleProps) => {
   let { label, lblStyle, ...rest } = props;
   return <AppText {...rest} label={label} lblStyle={{ ...styles.lblStyle, ...lblStyle }} />;
};

export default AppTitle;

const styles = StyleSheet.create({
   lblStyle: {
      fontSize: 20,
   },
});
