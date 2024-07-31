import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import colors from "_styles/colors";
import { ScreenHeight, ScreenWidth, STATUSBAR_HEIGHT } from "_styles/dimension";
import RNIntroSliderr from "./RNIntroSlider";

class IntroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      ScreenList: [],
    };
  }

  _onDone = () => {
    this.setState({ showRealApp: true });
  };

  nextButton = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.paragraphText}>Next</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.yellow,
            borderRadius: 50,
            width: "10%",
            height: 50,
            marginLeft: 10,
            shadowOffset: { width: 1, height: 0 },
          }}
        >
          <Text>{">"}</Text>
        </View>
      </View>
    );
  };

  skipButton = () => {
    return (
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => {}}
        >
          <Text style={styles.paragraphText}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };

  doneButton = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "35%",
            paddingVertical: 5,
          }}
        >
          <Text style={styles.paragraphText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  };

  onDone = () => {};

  onSkip = () => {
    return this.onDone();
  };

  render() {
    let style = this.props.style;
    delete style.alignItems;

    return (
      <View style={{ ...style }}>
        <RNIntroSliderr
          data={
            this.props.children || [
              <DemoPage name={"1"} />,
              <DemoPage name={"2"} />,
              <DemoPage name={"3"} />,
            ]
          }
          paginationWrapperStyle={{
            bottom: 50,
            left: 50,
          }}
        ></RNIntroSliderr>
        {/* <RNIntroSlider
          renderItem={({ item }) => {
            return item;
          }}
          data={
            this.props.children || [
              <DemoPage name={"1"} />,
              <DemoPage name={"2"} />,
              <DemoPage name={"3"} />,
            ]
          }
          bottomButton={this.props?.bottomButton}
          showDoneButton={
            typeof this.props.showDoneButton === "boolean"
              ? this.props.showDoneButton
              : true
          }
          showNextButton={
            typeof this.props.showNextButton === "boolean"
              ? this.props.showNextButton
              : true
          }
          showSkipButton={
            typeof this.props.showSkipButton === "boolean"
              ? this.props.showSkipButton
              : true
          }
          showPrevButton={
            typeof this.props.showPrevButton === "boolean"
              ? this.props.showPrevButton
              : true
          }
          renderNextButton={this.props?.renderNextButton || this.nextButton}
          renderSkipButton={this.props?.renderSkipButton || this.skipButton}
          renderDoneButton={this.props?.renderDoneButton || this.doneButton}
          renderPrevButton={this.props?.renderPrevButton || null}
          onDone={this.props?.onDone || this.onDone}
          onSkip={this.props?.onSkip || this.onSkip}
          dotStyle={
            this.props?.dotStyle
              ? this.props.dotStyle
              : {
                  borderColor: colors.white,
                  backgroundColor: colors.transparentBG1,
                  borderWidth: 1,
                }
          }
          activeDotStyle={
            this.props?.activeDotStyle
              ? this.props.activeDotStyle
              : {
                  borderColor: colors.white,
                  backgroundColor: colors.white,
                  borderWidth: 1,
                }
          }
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    marginTop: STATUSBAR_HEIGHT,
  },
  paragraphText: {
    width: "100%",
    color: colors.white,
    fontWeight: "600",
    fontSize: ScreenWidth * 0.046,
    textAlign: "center",
  },
});

export default IntroSlider;

const DemoPage = ({ name }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>demo {name}</Text>
    </View>
  );
};
