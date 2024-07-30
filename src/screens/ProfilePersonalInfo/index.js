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
import Icon from "_components/Icon";
import RNTextInput from "_components/RNTextInput";
import RNButton from "_components/RNButton";

export default class ProfilePersonalInfo extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          paddingBottom: fixedWidth * 30.0,
          paddingLeft: fixedWidth * 20.0,
          paddingRight: fixedWidth * 20.0,
          backgroundColor: Colors.white,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100.00%",
              marginBottom: fixedWidth * 16.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: fixedWidth * 120.0,
                height: fixedWidth * 120.0,
                borderRadius: fixedWidth * 100,
                borderWidth: 1,
                borderColor: Colors.silver,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode={"cover"}
                source={require("_assets/common/user_profile_round.png")}
                style={{
                  width: "83.00%",
                  height: "83.00%",
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                }}
              />
            </TouchableOpacity>
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
                  width: "30.00%",
                  height: "21.00%",
                  position: "absolute",
                  bottom: fixedWidth * 22.0,
                  paddingLeft: fixedWidth * 30.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: fixedWidth * 40.0,
                    height: fixedWidth * 40.0,
                    backgroundColor: Colors.white,
                    borderRadius: fixedWidth * 100,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: fixedWidth * 32.0,
                      height: fixedWidth * 32.0,
                      backgroundColor: Colors.blue,
                      borderRadius: fixedWidth * 100,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"octicon"}
                      name={"pencil"}
                      color={Colors.white}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
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
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 6.0,
                marginBottom: fixedWidth * 6.0,
                paddingLeft: fixedWidth * 10.0,
                paddingRight: fixedWidth * 10.0,
                backgroundColor: Colors.lightgray,
                borderRadius: fixedWidth * 18,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <RNTextInput
                title={"Full Name"}
                name={"name"}
                value={this.state.name}
                onChange={(name) => {
                  this.setState({ name });
                }}
                required={false}
                placeholder={"Enter name"}
                placeholderTextColor={Colors.darkblue}
                editable={true}
                multiline={false}
                errors={this.state.errors || {}}
                titleStyle={{ ...styles.grayText }}
                inputStyle={{ ...styles.blueText }}
                disabledColor={Colors.primary}
                style={{
                  width: "100.00%",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></RNTextInput>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 6.0,
                marginBottom: fixedWidth * 6.0,
                paddingLeft: fixedWidth * 10.0,
                paddingRight: fixedWidth * 10.0,
                backgroundColor: Colors.lightgray,
                borderRadius: fixedWidth * 18,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <RNTextInput
                title={"Email"}
                name={"email"}
                value={this.state.email}
                onChange={(email) => {
                  this.setState({ email });
                }}
                required={false}
                placeholder={"Enter email"}
                placeholderTextColor={Colors.darkblue}
                editable={true}
                multiline={false}
                errors={this.state.errors || {}}
                titleStyle={{ ...styles.grayText }}
                inputStyle={{ ...styles.blueText }}
                disabledColor={Colors.primary}
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 4.0,
                  paddingBottom: fixedWidth * 4.0,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></RNTextInput>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 6.0,
                marginBottom: fixedWidth * 6.0,
                paddingLeft: fixedWidth * 10.0,
                paddingRight: fixedWidth * 10.0,
                backgroundColor: Colors.lightgray,
                borderRadius: fixedWidth * 18,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <RNTextInput
                title={"Phone numbers"}
                name={"numbers"}
                value={this.state.numbers}
                onChange={(numbers) => {
                  this.setState({ numbers });
                }}
                required={false}
                placeholder={"Enter numbers"}
                placeholderTextColor={Colors.darkblue}
                editable={true}
                multiline={false}
                errors={this.state.errors || {}}
                titleStyle={{ ...styles.grayText }}
                inputStyle={{ ...styles.blueText }}
                disabledColor={Colors.primary}
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 4.0,
                  paddingBottom: fixedWidth * 4.0,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></RNTextInput>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 6.0,
                marginBottom: fixedWidth * 6.0,
                paddingLeft: fixedWidth * 10.0,
                paddingRight: fixedWidth * 10.0,
                backgroundColor: Colors.lightgray,
                borderRadius: fixedWidth * 18,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <RNTextInput
                title={"GOVERNMENT ID"}
                name={"idnumbers"}
                value={this.state.idnumbers}
                onChange={(idnumbers) => {
                  this.setState({ idnumbers });
                }}
                required={false}
                placeholder={"Enter ID numbers"}
                placeholderTextColor={Colors.darkblue}
                editable={true}
                multiline={false}
                errors={this.state.errors || {}}
                titleStyle={{ ...styles.grayText }}
                inputStyle={{ ...styles.blueText }}
                disabledColor={Colors.primary}
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 4.0,
                  paddingBottom: fixedWidth * 4.0,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></RNTextInput>
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <RNButton
            name={"Done"}
            width={"100%"}
            textStyle={{ ...styles.whiteText }}
            style={{ ...styles.button, backgroundColor: Colors.buttongrey }}
            onPress={() => {
              navigation.navigate("Profile1");
            }}
          ></RNButton>
        </View>
      </View>
    );
  }
}
