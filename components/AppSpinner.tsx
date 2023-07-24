import { ActivityIndicator } from "react-native";
import React from "react";
import { appColors } from "../utils";

interface IAppSpinner {
   color?: string;
   size?: number | "small" | "large";
}

const AppSpinner = (props: IAppSpinner) => {
   let { color = appColors.black, size = "small" } = props;
   return <ActivityIndicator color={color} size={size} />;
};

export default AppSpinner;
