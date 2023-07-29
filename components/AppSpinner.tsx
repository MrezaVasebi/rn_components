import { ActivityIndicator } from "react-native";
import React from "react";
import { appColors } from "../utils";

interface IAppSpinner {
   color?: string;
   size?: "small" | "large" | number;
}

const AppSpinner = (props: IAppSpinner) => {
   let { color = appColors.black, size } = props;
   return <ActivityIndicator animating={true} color={color} size={size} />;
};

export default AppSpinner;
