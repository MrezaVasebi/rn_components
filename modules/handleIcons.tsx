import { Entypo } from "@expo/vector-icons";
import { appColors } from "../utils";

export const handleIcons = (name: string, size: number | undefined, color: string | undefined): JSX.Element | null => {
   if (size === undefined) size = 15;
   if (color === undefined) color = appColors.black;

   switch (name) {
      case "check": {
         return <Entypo name="check" size={size} color={color} />;
      }
      default:
         return null;
   }
};
