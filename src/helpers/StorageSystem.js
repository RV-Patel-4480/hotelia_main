import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageSystem extends Component {
  constructor(props) {
    super(props);
  }

  set = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // save error
      return false;
    }
    return true;
  };

  setMany = async (items) => {
    try {
      // console.log(items);
      const res = await AsyncStorage.multiSet(items);
    } catch (e) {
      // save error
      console.log("error: setMany: ", e);
      return false;
    }
    return true;
  };

  get = async (key) => {
    try {
      let value = await AsyncStorage.getItem(key);

      if (value != null) {
        return value;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  };

  clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      return false;
    }
    return true;
  };

  clearLogin = async () => {
    try {
      let keys = [
        "user",
        "email",
        "profile_picture",
        "current_status",
        "userToken",
        "notification_token",
        "role",
      ];
      await AsyncStorage.multiRemove(keys, (err) => {
        console.log("login Clear err =>", err);
        if (err) {
          return false;
        } else {
          return true;
        }
      });
    } catch (e) {
      return false;
    }
  };

  getAll = async () => {
    try {
      let keys;
      await AsyncStorage.getAllKeys().then((res) => {
        keys = res;
      });
      keys.map((key) => {
        this.get(key).then((value) => {
          /* console.log(">", key + "\t =\t " + value) */
        });
      });
    } catch (e) {
      console.log(e);
    }
  };
}
const storageSystem = new StorageSystem();
export default storageSystem;
