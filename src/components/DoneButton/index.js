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

const DoneButton = (props) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        backgroundColor: Colors.primary,
        width: "80%",
        paddingVertical: fixedWidth * 12.0,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ ...styles.whiteText }}>Get Started</Text>
    </View>
  );
};
export default DoneButton;
