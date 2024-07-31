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

export default class OTP extends Component {
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
              width: fixedWidth * 160.0,
              height: fixedWidth * 160.0,
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
              source={require("_assets/hotelia/OTP.png")}
              style={{ width: 100, height: 100 }}
            />
          </View>
        </View>
        <View 
          style={{
            width: "100.00%",
            borderRadius: fixedWidth * 0,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100.00%",
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
                color: Colors.black,
                fontWeight: "normal",
                textAlign: "left",
              }}
            >
              OTP has been sent to XXX720
            </Text>
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                marginBottom: fixedWidth * 20.0,
                marginTop:10,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Change Number
            </Text>
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
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "100.00%",
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: fixedWidth * 50.0,
                  height: fixedWidth * 50.0,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 2,
                  borderColor: Colors.blue,
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
                  placeholder={"4"}
                  placeholderTextColor={Colors.black}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  inputStyle={{ ...styles.blackText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNTextInput>
              </View>
              <View
                style={{
                  width: fixedWidth * 50.0,
                  height: fixedWidth * 50.0,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 2,
                  borderColor: Colors.blue,
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
                  placeholder={"4"}
                  placeholderTextColor={Colors.black}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  inputStyle={{ ...styles.blackText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNTextInput>
              </View>
              <View
                style={{
                  width: fixedWidth * 50.0,
                  height: fixedWidth * 50.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 0,
                  borderColor: Colors.blue,
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
                  placeholder={"-"}
                  placeholderTextColor={Colors.textgrey}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  inputStyle={{ ...styles.blackText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNTextInput>
              </View>
              <View
                style={{
                  width: fixedWidth * 50.0,
                  height: fixedWidth * 50.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 0,
                  borderColor: Colors.blue,
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
                  placeholder={"-"}
                  placeholderTextColor={Colors.textgrey}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  inputStyle={{ ...styles.blackText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNTextInput>
              </View>
              <View
                style={{
                  width: fixedWidth * 50.0,
                  height: fixedWidth * 50.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 0,
                  borderColor: Colors.blue,
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
                  placeholder={"-"}
                  placeholderTextColor={Colors.textgrey}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  inputStyle={{ ...styles.blackText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNTextInput>
              </View>
              <View
                style={{
                  width: fixedWidth * 50.0,
                  height: fixedWidth * 50.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 0,
                  borderColor: Colors.blue,
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
                  placeholder={"-"}
                  placeholderTextColor={Colors.textgrey}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  inputStyle={{ ...styles.blackText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNTextInput>
              </View>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 10.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.black,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  Don't get the OTP code?
                </Text>
              </View>
              <View
                style={{
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: 18,
                    paddingLeft: fixedWidth * 8.0,
                    color: Colors.blue,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  resending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
