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
const LogoutIcon = (props) => {
  return (
    <View style={{ ...props.style }}>
      <Icon
        type={"material"}
        name={"logout"}
        color={Colors.primary}
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      ></Icon>
    </View>
  );
};
export default LogoutIcon;
