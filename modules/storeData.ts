import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKey } from "../utils";

export const storeData = async (value: object): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async (): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeValue = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    // remove error
  }

  // console.log("Done.");
};
