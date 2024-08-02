import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";

import { AuthContext } from "_navigations/AuthContext";

export default class OnBoarding1 extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          backgroundColor: Colors.white,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "100.00%",
            height: "60.00%",
            borderRadius: fixedWidth * 0,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100.00%",
              height: "15.00%",
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <View
            style={{
              width: fixedWidth * 250.0,
              height: fixedWidth * 420.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              resizeMode={"contain"}
              source={require("_assets/hotelia/Choose_a_Place.png")}
              style={{ width: "100.00%", height: "100.00%" }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            height: "40.00%",
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textTransform: "none",
              fontSize: 30,
             
              color: Colors.black,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Choose a Place
          </Text>
          <Text
            style={{
              textTransform: "none",
              fontSize: 14,
              color: Colors.black,
              fontWeight: "normal",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet,consectetur{`\n`}adipiscing elit.Nunc molis diam tellus{`\n`}fermentum ehoncus
          </Text>
          <View
            style={{
              width: "100.00%",
              height: "20.00%",
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></View>
        </View>
      </View>
    );
  }
}
