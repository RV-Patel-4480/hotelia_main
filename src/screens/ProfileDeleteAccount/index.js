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
import DeleteIcon from "_components/DeleteIcon";
import RNButton from "_components/RNButton";

export default class ProfileDeleteAccount extends Component {
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
                color: Colors.gray,
                fontWeight: "normal",
                textAlign: "left",
                textAlignVertical: "bottom",
              }}
            >
              To confirm you're the true owner of this account,{`\n`}we may
              contact you
            </Text>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
              backgroundColor: Colors.boxbg,
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
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"Indonesia"}
              placeholderTextColor={Colors.black}
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
                  color: Colors.black,
                  fontWeight: "800",
                  textAlign: "left",
                }}
              >
                Why are you deleting this account?
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
                  backgroundColor: Colors.boxbg,
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
                    color: Colors.black,
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
            name={"Delete Account"}
            width={"100%"}
            textStyle={{ ...styles.redText }}
            IconProps={(props) => {
              <DeleteIcon {...props} />;
            }}
            onPress={() => {}}
            style={{
              ...styles.button,
              marginTop: fixedWidth * 10.0,
              marginBottom: fixedWidth * 10.0,
              backgroundColor: Colors.transparent,
              borderBottomWidth: 1,
              borderBottomColor: Colors.grey,
              borderRightWidth: 1,
              borderRightColor: Colors.grey,
              borderTopWidth: 1,
              borderTopColor: Colors.grey,
              borderLeftWidth: 1,
              borderLeftColor: Colors.grey,
            }}
          >
            <DeleteIcon
              style={{
                width: fixedWidth * 30.0,
                height: fixedWidth * 30.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </RNButton>
        </View>
      </View>
    );
  }
}
