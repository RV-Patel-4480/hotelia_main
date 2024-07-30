import React, { Component, useState } from "react";
import * as Permissions from "expo-permissions";
import StorageSystem from "./StorageSystem";
import Strings from "./Constants";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

var notificationToken = null;

class PNotification extends Component {
  constructor(props) {
    super(props);
  }

  getToken = async () => {
    if (notificationToken) {
      return notificationToken;
    } else {
      // this.registerToken();
    }
  };

  registerExpoNotificationToken = async () => {
    console.log("Called");
    let token = await this.registerForPushNotificationsAsync().then((token) => {
      console.log(token);
      return token;
    });

    if (!token) {
      return false;
    }

    StorageSystem.set("notification_token", token);

    const userToken = await StorageSystem.get("token");
    if (!userToken) {
      return false;
    }

    // console.log("api token= " + token, userToken);
    fetch(Strings.API_URL + "setNotificationToken", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userToken,
      },
      body: JSON.stringify({
        notificationToken: token,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.status) {
          console.log("notification registered token");
          return true;
        } else if (responseData.message || responseData.error) {
          console.log("problem in register notification token");
          return false;
        } else {
          console.log("problem in register notification token");
          return false;
        }
      })
      .catch((err) => {
        setTimeout(() => {
          console.log("error: ", err);
          return false;
        }, 2000);
      });
  };

  async registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //   console.log(token);
    } else {
      return alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

  registerToken = async () => {
    return false;
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    StorageSystem.store("notification_token", token);

    const userToken = await StorageSystem.get("token");
    console.log("token= " + token, userToken);
    fetch(Strings.url + "update-notification-token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
      body: JSON.stringify({
        notification_token: token,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.response == "true") {
          console.log("registered token");
          return true;
        } else if (responseData.message || responseData.error) {
          console.log("problem in register");

          return false;
        } else {
          console.log("problem in register");

          return false;
        }
      })
      .catch((err) => {
        setTimeout(() => {
          console.log("error catched");
          return false;
        }, 2000);
      });
  };
}

const pNotification = new PNotification();
export default pNotification;
