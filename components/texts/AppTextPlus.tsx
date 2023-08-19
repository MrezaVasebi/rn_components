import React from "react";
import { Text } from "react-native";

const AppTextPlus = (props: Text["props"]) => {
   return <Text {...props} />;
};

// const AppTextPlus = ({ children }: { children: Text["props"]["children"] }) => {
//    return <Text children={children} />;
// };

// const AppTextPlus = ({ children }: { children: React.ReactNode }) => {
//    return <Text children={children} />;
// };

export default AppTextPlus;
