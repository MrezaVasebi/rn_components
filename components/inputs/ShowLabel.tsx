import React, { memo } from "react";
import { TextProps } from "react-native";
import { AppText } from "../texts";

interface IShowLabel {
  isLabelShow?: boolean;
  label: string | undefined;
}

const ShowLabel = (props: IShowLabel & TextProps) => {
  return props.isLabelShow ? (
    <AppText label={props.label} style={[{ marginBottom: 8 }, props.style]} />
  ) : null;
};

export default memo(ShowLabel);
