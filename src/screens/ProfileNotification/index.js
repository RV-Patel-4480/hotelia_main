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
import { Switch } from "@rneui/themed";

export default class ProfileNotification extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          paddingLeft: fixedWidth * 25.0,
          paddingRight: fixedWidth * 25.0,
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
            paddingTop: fixedWidth * 10.0,
            paddingBottom: fixedWidth * 10.0,
            borderRadius: fixedWidth * 0,
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightgray,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 5.0,
              paddingBottom: fixedWidth * 5.0,
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
                fontSize: ScreenWidth * 0.03,
                color: Colors.textgrey,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              SPECIAL TIPS AND OFFERS
            </Text>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Push Notification
            </Text>
            <Switch
              value={this.state.switch_}
              onValueChange={(val) => {
                this.setState({ switch_: val });
              }}
              color={Colors.blue}
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Switch>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Email
            </Text>
            <Switch
              value={this.state.switch_}
              onValueChange={(val) => {
                this.setState({ switch_: val });
              }}
              color={Colors.blue}
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Switch>
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            paddingTop: fixedWidth * 10.0,
            paddingBottom: fixedWidth * 10.0,
            borderRadius: fixedWidth * 0,
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightgray,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 5.0,
              paddingBottom: fixedWidth * 5.0,
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
                fontSize: ScreenWidth * 0.03,
                color: Colors.textgrey,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              ACTIVITY
            </Text>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Push Notification
            </Text>
            <Switch
              value={this.state.switch_}
              onValueChange={(val) => {
                this.setState({ switch_: val });
              }}
              color={Colors.blue}
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Switch>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Email
            </Text>
            <Switch
              value={this.state.switch_}
              onValueChange={(val) => {
                this.setState({ switch_: val });
              }}
              color={Colors.blue}
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Switch>
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            paddingTop: fixedWidth * 10.0,
            paddingBottom: fixedWidth * 10.0,
            borderRadius: fixedWidth * 0,
            borderBottomWidth: 1,
            borderBottomColor: Colors.lightgray,
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 5.0,
              paddingBottom: fixedWidth * 5.0,
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
                fontSize: ScreenWidth * 0.03,
                color: Colors.textgrey,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              SPECIAL TIPS AND OFFERS
            </Text>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Push Notification
            </Text>
            <Switch
              value={this.state.switch_}
              onValueChange={(val) => {
                this.setState({ switch_: val });
              }}
              color={Colors.blue}
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Switch>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 10.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: Colors.blue,
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Email
            </Text>
            <Switch
              value={this.state.switch_}
              onValueChange={(val) => {
                this.setState({ switch_: val });
              }}
              color={Colors.blue}
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Switch>
          </View>
        </View>
      </View>
    );
  }
}
