import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "_styles/colors";
import {
  ScreenHeight,
  ScreenWidth,
  fixedHeight,
  fixedWidth,
} from "_styles/dimension";

import Icon from "_components/Icon";
const DeleteIcon = (props) => {
  return (
    <View style={{ ...props.style }}>
      <Icon
        type={"material-community"}
        name={"delete"}
        color={Colors.red}
        style={{
          width: fixedWidth * 30.0,
          height: fixedWidth * 30.0,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      ></Icon>
    </View>
  );
};
export default DeleteIcon;
