import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { OpaqueColorValue } from "react-native";
import { appColors } from "../utils";

export const handleIcons = (
  name: string,
  size: number | undefined,
  color?: string | OpaqueColorValue
): JSX.Element | null => {
  if (size === undefined) size = 15;
  if (color === undefined) color = appColors.black;

  switch (name) {
    case "play":
      return <AntDesign name="play" size={size} color={color} />;
    case "stop":
      return <FontAwesome name="stop-circle" size={size} color={color} />;
    case "pause":
      return <AntDesign name="pausecircle" size={size} color={color} />;
    case "eyeoff":
      return <Ionicons name="eye-off" size={size} color={color} />;
    case "eye":
      return <AntDesign name="eye" size={size} color={color} />;
    case "check":
      return <Entypo name="check" size={size} color={color} />;
    case "close":
      return <AntDesign name="close" size={size} color={color} />;
    case "plus":
      return <AntDesign name="plus" size={size} color={color} />;
    case "location":
      return <Entypo name="location-pin" size={size} color={color} />;
    case "video":
      return <Entypo name="video" size={size} color={color} />;
    case "language":
      return <Entypo name="language" size={size} color={color} />;
    case "edit":
      return <Entypo name="camera" size={size} color={color} />;
    case "down":
      return <AntDesign name="caretdown" size={size} color={color} />;
    default:
      return null;
  }
};
