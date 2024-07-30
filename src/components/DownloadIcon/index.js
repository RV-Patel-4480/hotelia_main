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
const DownloadIcon = (props) => {
  return (
    <View style={{ ...props.style }}>
      <Icon
        type={"material"}
        name={"file-download"}
        color={Colors.white}
        style={{
          width: fixedWidth * 25.0,
          height: fixedWidth * 25.0,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      ></Icon>
    </View>
  );
};
export default DownloadIcon;
