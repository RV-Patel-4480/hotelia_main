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

export default class Register extends Component {
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
              source={require("_assets/hotelia/Register.png")}
              style={{ width: "100.00%", height: "100.00%" }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            paddingLeft: fixedWidth * 20.0,
            paddingRight: fixedWidth * 20.0,
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
                marginTop: fixedWidth * 10.0,
                color: Colors.black,
                fontWeight: "bold",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Register
            </Text>
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                marginTop: fixedWidth * 10.0,
                marginBottom: fixedWidth * 10.0,
                color: Colors.textgrey,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Get a discount for new member
            </Text>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 15.0,
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
                marginTop: fixedWidth * 10.0,
                marginBottom: fixedWidth * 10.0,
                paddingLeft: fixedWidth * 15.0,
                paddingRight: fixedWidth * 15.0,
                backgroundColor: Colors.lightgray,
                borderRadius: fixedWidth * 15,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: fixedWidth * 20.0,
                  height: fixedWidth * 20.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"font-awesome"}
                  name={"user-circle"}
                  color={Colors.blue}
                  style={{
                    width: fixedWidth * 20.0,
                    height: fixedWidth * 20.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </View>
              <View
                style={{
                  width: "90.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RNTextInput
                  title={"Phone number/E-mail"}
                  name={"valueKey"}
                  value={this.state.valueKey}
                  onChange={(valueKey) => {
                    this.setState({ valueKey });
                  }}
                  required={false}
                  placeholder={"youremail@mail.com"}
                  placeholderTextColor={Colors.blue}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  titleStyle={{ ...styles.grayText }}
                  inputStyle={{ ...styles.blueText }}
                  disabledColor={Colors.primary}
                  style={{
                    width: "100.00%",
                    paddingTop: fixedWidth * 5.0,
                    paddingBottom: fixedWidth * 5.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></RNTextInput>
              </View>
            </View>
            <View
              style={{
                width: "100.00%",
                marginBottom: fixedWidth * 15.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <RNButton
                name={"Register"}
                width={"100%"}
                textStyle={{ ...styles.whiteText }}
                onPress={() => { navigation.navigate('CompleteYourProfile') }}
                style={{
                  ...styles.button,
                  paddingTop: fixedWidth * 12.0,
                  paddingBottom: fixedWidth * 12.0,
                }}
              ></RNButton>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 20.0,
              marginBottom: fixedWidth * 20.0,
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
                width: "35.00%",
                paddingTop: "0.12%",
                backgroundColor: Colors.grey,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            ></View>
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.03,
                color: Colors.textgrey,
                fontWeight: "normal",
                textAlign: "left",
              }}
            >
              Or Sign in With
            </Text>
            <View
              style={{
                width: "35.00%",
                paddingTop: "0.12%",
                backgroundColor: Colors.grey,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            ></View>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 10.0,
              marginBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: fixedWidth * 80.0,
                height: fixedWidth * 50.0,
                marginLeft: fixedWidth * 5.0,
                marginRight: fixedWidth * 5.0,
                borderRadius: fixedWidth * 20,
                borderWidth: 1,
                borderColor: Colors.grey,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode={"cover"}
                source={require("_assets/common/facebook_plain_logo.png")}
                style={{ width: "30.00%", height: "50.00%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: fixedWidth * 80.0,
                height: fixedWidth * 50.0,
                marginLeft: fixedWidth * 5.0,
                marginRight: fixedWidth * 5.0,
                borderRadius: fixedWidth * 20,
                borderWidth: 1,
                borderColor: Colors.grey,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode={"cover"}
                source={require("_assets/common/google_plain_logo.png")}
                style={{ width: "30.00%", height: "50.00%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: fixedWidth * 80.0,
                height: fixedWidth * 50.0,
                marginLeft: fixedWidth * 5.0,
                marginRight: fixedWidth * 5.0,
                borderRadius: fixedWidth * 20,
                borderWidth: 1,
                borderColor: Colors.grey,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode={"cover"}
                source={require("_assets/common/apple_plain_logo.png")}
                style={{ width: "30.00%", height: "50.00%" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            marginTop: fixedWidth * 15.0,
            borderRadius: fixedWidth * 0,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
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
                color: Colors.textgrey,
                fontWeight: "normal",
                textAlign: "left",
              }}
            >
              Already have an account ?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
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
                paddingLeft: fixedWidth * 8.0,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
