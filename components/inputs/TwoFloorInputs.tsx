import { StyleSheet, View } from "react-native";
import React from "react";
import { appColors, appRadius } from "../../utils";
import SimpleInput from "./SimpleInput";
import ShowLabel from "./ShowLabel";

interface ITwoFloorInput {
   root?: object;
   valueTop: string;
   inputStyleTop?: {};
   showLabel?: boolean;
   placeholderTop: string;
   label?: string | undefined;
   onChangeTextTop: (value: string) => void;
   valueBottom: string;
   inputStyleBottom?: {};
   placeholderBottom: string;
   onChangeTextBottom: (value: string) => void;
}

const TwoFloorInputs = (props: ITwoFloorInput) => {
   let { root, showLabel, label, onChangeTextTop, placeholderTop, valueTop, inputStyleTop, inputStyleBottom, onChangeTextBottom, placeholderBottom, valueBottom } = props;

   return (
      <>
         <ShowLabel label={label} isLabelShow={showLabel} />

         <View style={{ ...styles.root, ...root }}>
            <SimpleInput
               value={valueTop}
               placeholder={placeholderTop}
               onChangeText={onChangeTextTop}
               inputStyle={{
                  ...styles.commonStyle,
                  ...inputStyleTop,
               }}
            />

            <View style={styles.lineStyle} />

            <SimpleInput
               value={valueBottom}
               placeholder={placeholderBottom}
               onChangeText={onChangeTextBottom}
               inputStyle={{
                  ...styles.commonStyle,
                  ...inputStyleBottom,
               }}
            />
         </View>
      </>
   );
};

export default TwoFloorInputs;

const styles = StyleSheet.create({
   root: {
      height: 100,
      borderWidth: 0.5,
      overflow: "hidden",
      borderRadius: appRadius.m,
      borderColor: appColors.grey,
      justifyContent: "space-between",
      backgroundColor: appColors.lightGrey,
   },
   commonStyle: {
      height: "49%",
      borderWidth: 0,
   },
   lineStyle: {
      height: 1,
      marginHorizontal: 20,
      backgroundColor: appColors.grey,
   },
});
