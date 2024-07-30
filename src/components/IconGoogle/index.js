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
const IconGoogle = (props) => {
  return (
    <View style={{ ...props.style }}>
      <Icon
        type={"antdesign"}
        name={"google"}
        color={Colors.white}
        style={{
          width: fixedWidth * 30.0,
          height: fixedWidth * 30.0,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Icon>
    </View>
  );
};
export default IconGoogle;
