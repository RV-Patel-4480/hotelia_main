import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
import styles from "./styles";

import { AuthContext } from "_navigations/AuthContext";
import NextButton from "_components/NextButton";
import OnBoarding1 from "_screens/OnBoarding1";
import OnBoarding2 from "_screens/OnBoarding2";
import OnBoarding3 from "_screens/OnBoarding3";
import RNIntroSlider from "_components/RNIntroSlider";
import DoneButton from "_components/DoneButton";

export default class OnBoarding extends Component {
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
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <RNIntroSlider
          showPrevButton={false}
          renderNextButton={(props) => {
            return <NextButton {...props} />;
          }}
          renderDoneButton={(props) => {
            return <DoneButton {...props} />;
          }}
          skipStyle={{
            position: "absolute",
            backgroundColor: "#ECECEC",
            right: 20,
            top: 20,
            paddingHorizontal: 15,
            borderRadius: 10,
          }}
          pagination={{ hideOnScreen: [3] }}
          dotStyle={{ ...styles.dotClass2 }}
          activeDotStyle={{ ...styles.dotClass }}
          onDone={() => {
            console.log("done");
            this.props.navigation.navigate("Login");
          }}
          style={{
            width: "100.00%",
            height: "100.00%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OnBoarding1 />
          <OnBoarding2 />
          <OnBoarding3 />
        </RNIntroSlider>
      </View>
    );
  }
}
