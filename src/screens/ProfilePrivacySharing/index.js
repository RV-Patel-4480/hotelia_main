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

export default class ProfilePrivacySharing extends Component {
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100.00%",
              marginBottom: fixedWidth * 8.0,
              paddingTop: fixedWidth * 30.0,
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
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  width: "100.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.06,
                  color: Colors.black,
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Manage your account data
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 16.0,
                paddingBottom: fixedWidth * 16.0,
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
                  width: "100.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.04,
                  color: Colors.textgrey,
                  fontWeight: "normal",
                  textAlign: "left",
                }}
              >
                You can make a request to download or delete your personal data
                from Travely.
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              marginBottom: fixedWidth * 8.0,
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
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text
                style={{
                  width: "100.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.05,
                  color: Colors.blue,
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Request your personal data
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 16.0,
                paddingBottom: fixedWidth * 16.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  width: "90.00%",
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
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.textgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  We'll create a file you to download your{`\n`}personal data.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: "10.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Icon
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.black}
                  style={{
                    width: fixedWidth * 18.0,
                    height: fixedWidth * 18.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </TouchableOpacity>
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
                  width: "100.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.05,
                  color: Colors.blue,
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Delete your account
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 16.0,
                paddingBottom: fixedWidth * 16.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  width: "90.00%",
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
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.textgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  By doing this your account and data will permanently deleted.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfileDeleteAccount");
                }}
                style={{
                  width: "10.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Icon
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.black}
                  style={{
                    width: fixedWidth * 18.0,
                    height: fixedWidth * 18.0,
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
    );
  }
}
