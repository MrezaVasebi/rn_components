import React, { memo } from "react";
import { AppText } from "../texts";

interface IShowLabel {
  lblStyle?: {};
  isLabelShow?: boolean;
  label: string | undefined;
}

const ShowLabel = (props: IShowLabel) => {
  return props.isLabelShow ? (
    <AppText
      label={props.label}
      lblStyle={{ marginBottom: 8, ...props.lblStyle }}
    />
  ) : null;
};

export default memo(ShowLabel);
