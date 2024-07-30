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
import RNTextInput from "_components/RNTextInput";
import RNButton from "_components/RNButton";

export default class ProfileRequestPersonalData extends Component {
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
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "100.00%",
            paddingTop: fixedWidth * 30.0,
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
              paddingTop: fixedWidth * 20.0,
              paddingBottom: fixedWidth * 20.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.textgrey,
                fontWeight: "normal",
                textAlign: "left",
                textAlignVertical: "bottom",
              }}
            >
              Before we make you a copy of your personal data, please answer a
              few questions.
            </Text>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.lightgray,
              borderRadius: fixedWidth * 20,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RNTextInput
              title={"WHERE DO YOU LIVE?"}
              name={"location"}
              value={this.state.location}
              onChange={(location) => {
                this.setState({ location });
              }}
              required={false}
              placeholder={"Indonesia"}
              placeholderTextColor={Colors.darkblue}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              titleStyle={{ ...styles.grayText }}
              inputStyle={{ ...styles.inputTex }}
              disabledColor={Colors.primary}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 5.0,
                paddingBottom: fixedWidth * 5.0,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            ></RNTextInput>
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
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 15.0,
                paddingBottom: fixedWidth * 15.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.04,
                  color: Colors.darkblue,
                  fontWeight: "800",
                  textAlign: "left",
                }}
              >
                Why are you requesting your data?
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
              <RNTextInput
                name={"valueKey"}
                value={this.state.valueKey}
                onChange={(valueKey) => {
                  this.setState({ valueKey });
                }}
                required={false}
                placeholderTextColor={Colors.primary}
                editable={true}
                multiline={false}
                errors={this.state.errors || {}}
                disabledColor={Colors.primary}
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 40.0,
                  paddingBottom: fixedWidth * 40.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 15,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></RNTextInput>
              <View
                style={{
                  width: "100.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.textgrey,
                    fontWeight: "normal",
                    textAlign: "right",
                  }}
                >
                  0 / 150
                </Text>
              </View>
            </View>
          </View>
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
            name={"Request Data"}
            width={"100%"}
            textStyle={{ ...styles.whiteText }}
            onPress={() => {}}
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 12.0,
              paddingBottom: fixedWidth * 12.0,
              backgroundColor: Colors.primary,
              borderRadius: fixedWidth * 30,
              borderWidth: 0,
              borderColor: Colors.linegray,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></RNButton>
        </View>
      </View>
    );
  }
}
