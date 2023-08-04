import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { appColors } from "../utils";

export const handleIcons = (name: string, size: number | undefined, color: string | undefined): JSX.Element | null => {
   if (size === undefined) size = 15;
   if (color === undefined) color = appColors.black;

   switch (name) {
      case "eyeoff": {
         return <Ionicons name="eye-off" size={size} color={color} />;
      }
      case "eye": {
         return <AntDesign name="eye" size={size} color={color} />;
      }
      case "check": {
         return <Entypo name="check" size={size} color={color} />;
      }
      case "close": {
         return <AntDesign name="close" size={size} color={color} />;
      }
      default:
         return null;
   }
};
