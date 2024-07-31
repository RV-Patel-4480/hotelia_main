import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Colors from "_styles/colors";
import {
  ScreenHeight,
  ScreenWidth,
  fixedHeight,
  fixedWidth,
} from "_styles/dimension";
import styles from "./styles";

import Icon from "_components/Icon";
const NextButton = (props) => {
  return (
    <View
      style={{
        width: fixedWidth * 60.0,
        height: fixedWidth * 60.0,
        backgroundColor: Colors.primary,
        borderRadius: fixedWidth * 100,
        borderWidth: 0,
        borderColor: Colors.white,
        flexDirection: "column",
        alignItems: "center",
        alignSelf:"center",
        justifyContent: "center",
        position: "absolute",
        bottom: 20,
        // right: 20,
      }}
    >
      <Icon
        type={"antdesign"}
        name={"arrowright"}
        color={Colors.white}
        style={{
          width: fixedWidth * 32.0,
          height: fixedWidth * 32.0,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      ></Icon>
    </View>
  );
};
export default NextButton;
