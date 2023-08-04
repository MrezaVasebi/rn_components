import React from "react";
import { AppText } from "../texts";

interface IShowLabel {
   label: string;
   lblStyle?: {};
   isLabelShow?: boolean;
}

const ShowLabel = (props: IShowLabel) => {
   return props.isLabelShow ? <AppText label={props.label} lblStyle={{ marginBottom: 8, ...props.lblStyle }} /> : null;
};

export default ShowLabel;
