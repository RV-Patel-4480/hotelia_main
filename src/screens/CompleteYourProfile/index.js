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
import { CheckBox } from "@rneui/themed";
import RNButton from "_components/RNButton";

export default class CompleteYourProfile extends Component {
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
          justifyContent: "space-between",
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
                width: fixedWidth * 40.0,
                height: fixedWidth * 40.0,
                borderRadius: fixedWidth * 15,
                borderWidth: 1,
                borderColor: Colors.grey,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                type={"antdesign"}
                name={"arrowleft"}
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
                width: "85.00%",
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
                  fontSize: ScreenWidth * 0.05,
                  color: Colors.blue,
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                Complete Your Profile
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 8.0,
              marginBottom: fixedWidth * 8.0,
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.lightgray,
              borderRadius: fixedWidth * 20,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <RNTextInput
              title={"E-Mail"}
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"Antonywilliam12@gmail.coim"}
              placeholderTextColor={Colors.blue}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              titleStyle={{ ...styles.grayText }}
              inputStyle={{ ...styles.blueText }}
              disabledColor={Colors.primary}
              style={{
                width: "100.00%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></RNTextInput>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 8.0,
              marginBottom: fixedWidth * 8.0,
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.lightgray,
              borderRadius: fixedWidth * 20,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <RNTextInput
              title={"PHONE NUMBER"}
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"62 -1232245689"}
              placeholderTextColor={Colors.blue}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              titleStyle={{ ...styles.grayText }}
              inputStyle={{ ...styles.blueText }}
              disabledColor={Colors.primary}
              style={{
                width: "100.00%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></RNTextInput>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 8.0,
              marginBottom: fixedWidth * 8.0,
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.lightgray,
              borderRadius: fixedWidth * 20,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <RNTextInput
              title={"Full Name"}
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"Antony William"}
              placeholderTextColor={Colors.blue}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              titleStyle={{ ...styles.grayText }}
              inputStyle={{ ...styles.blueText }}
              disabledColor={Colors.primary}
              style={{
                width: "100.00%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></RNTextInput>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 8.0,
              marginBottom: fixedWidth * 8.0,
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.lightgray,
              borderRadius: fixedWidth * 20,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <RNTextInput
              title={"Birthday"}
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"02/09/1997"}
              placeholderTextColor={Colors.blue}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              titleStyle={{ ...styles.grayText }}
              inputStyle={{ ...styles.blueText }}
              disabledColor={Colors.primary}
              style={{
                width: "80.00%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></RNTextInput>
            <View
              style={{
                width: "15.00%",
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Icon
                type={"material-community"}
                name={"calendar-edit"}
                color={Colors.blue}
                style={{
                  width: fixedWidth * 25.0,
                  height: fixedWidth * 25.0,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></Icon>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 8.0,
              marginBottom: fixedWidth * 8.0,
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.lightgray,
              borderRadius: fixedWidth * 20,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <RNTextInput
              title={"Account Password"}
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"************"}
              placeholderTextColor={Colors.blue}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              titleStyle={{ ...styles.grayText }}
              inputStyle={{ ...styles.blueText }}
              disabledColor={Colors.primary}
              style={{
                width: "80.00%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></RNTextInput>
            <View
              style={{
                width: "15.00%",
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Icon
                type={"ionicon"}
                name={"eye-outline"}
                color={Colors.blue}
                style={{
                  width: fixedWidth * 25.0,
                  height: fixedWidth * 25.0,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              ></Icon>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckBox
              checked={false}
              checkedColor={Colors.primary}
              onPress={() => {
                this.setState({ cb_: !this.state.cb_ });
              }}
              containerStyle={{}}
              textStyle={{}}
              iconRight={false}
              style={{
                width: fixedWidth * 25.0,
                height: fixedWidth * 25.0,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            ></CheckBox>
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
                  ...styles.blueText,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  fontSize: ScreenWidth * 0.04284,
                }}
              >
                I agree to Travelz's Terms of Service,{`\n`}Payments Terms of
                Service
              </Text>
            </View>
          </View>
        </View>
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
        >
          <RNButton
            name={"Done"}
            width={"100%"}
            textStyle={{ ...styles.whiteText }}
            onPress={() => {
              const { signin } = this.context;
              signin({
                email: "email@mail.com",
                userToken: "Bearer sdkufbikeeuish948h93xno8ty84c",
                user: {},
                role: "user",
              });
            }}
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
