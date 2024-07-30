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
import RNButton from "_components/RNButton";

export default class PasswordChanged extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          paddingLeft: fixedWidth * 20.0,
          paddingRight: fixedWidth * 20.0,
          backgroundColor: Colors.white,
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
            marginTop: fixedWidth * 15.0,
            marginBottom: fixedWidth * 15.0,
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
              width: fixedWidth * 120.0,
              height: fixedWidth * 120.0,
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
              source={require("_assets/hotelia/Password_changed.png")}
              style={{ width: "100.00%", height: "100.00%" }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            marginTop: fixedWidth * 15.0,
            marginBottom: fixedWidth * 15.0,
            borderRadius: fixedWidth * 0,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textTransform: "none",
              fontSize: ScreenWidth * 0.07,
              color: Colors.black,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Password Changed!
          </Text>
          <Text
            style={{
              textTransform: "none",
              fontSize: ScreenWidth * 0.04,
              marginTop: fixedWidth * 10.0,
              marginBottom: fixedWidth * 10.0,
              color: Colors.textgrey,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Your password has been changed{`\n`}successfully.
          </Text>
        </View>
        <View
          style={{
            width: "100.00%",
            borderRadius: fixedWidth * 0,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RNButton
            name={"Back to Login"}
            width={"100%"}
            textStyle={{ ...styles.whiteText }}
            onPress={() => { navigation?.goBack() }}
            style={{
              ...styles.button,
              paddingTop: fixedWidth * 12.0,
              paddingBottom: fixedWidth * 12.0,
            }}
          ></RNButton>
        </View>
      </View>
    );
  }
}
