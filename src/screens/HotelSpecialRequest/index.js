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
import RNRadioButton from "_components/RNRadioButton";
import Icon from "_components/Icon";
import { Switch } from "@rneui/themed";
import RNTextInput from "_components/RNTextInput";
import RNButton from "_components/RNButton";

export default class HotelSpecialRequest extends Component {
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
          justifyContent: "space-between",
        }}
      >
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ width: "100.00%" }}
        >
          <View
            style={{
              width: "100.00%",
              height: "100.00%",
              paddingTop: fixedWidth * 15.0,
              paddingBottom: fixedWidth * 15.0,
              paddingLeft: fixedWidth * 15.0,
              paddingRight: fixedWidth * 15.0,
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
                  width: "100.00%",
                  marginTop: fixedWidth * 10.0,
                  marginBottom: fixedWidth * 10.0,
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
                    color: Colors.blue,
                    fontWeight: "900",
                    textAlign: "left",
                  }}
                >
                  Bed Type
                </Text>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 15.0,
                  paddingBottom: fixedWidth * 15.0,
                  paddingLeft: fixedWidth * 15.0,
                  paddingRight: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 1,
                  borderColor: Colors.silver,
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
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Double Bed
                </Text>
                <RNRadioButton
                  onPress={(value) => {
                    this.setState({ radioValue: value });
                  }}
                  outerCircleColor={Colors.blue}
                  innerCircleColor={Colors.blue}
                  selectedValue={this.state?.radioValue}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNRadioButton>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 15.0,
                  paddingBottom: fixedWidth * 15.0,
                  paddingLeft: fixedWidth * 15.0,
                  paddingRight: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 1,
                  borderColor: Colors.silver,
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
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Twin Bed
                </Text>
                <RNRadioButton
                  onPress={(value) => {
                    this.setState({ radioValue: value });
                  }}
                  outerCircleColor={Colors.textgrey}
                  innerCircleColor={Colors.blue}
                  selectedValue={this.state?.radioValue}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNRadioButton>
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
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 10.0,
                  marginBottom: fixedWidth * 10.0,
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
                    color: Colors.blue,
                    fontWeight: "900",
                    textAlign: "left",
                  }}
                >
                  Smoking preference
                </Text>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 15.0,
                  paddingBottom: fixedWidth * 15.0,
                  paddingLeft: fixedWidth * 15.0,
                  paddingRight: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 1,
                  borderColor: Colors.silver,
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
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Smoking Roon
                </Text>
                <RNRadioButton
                  onPress={(value) => {
                    this.setState({ radioValue: value });
                  }}
                  outerCircleColor={Colors.blue}
                  innerCircleColor={Colors.blue}
                  selectedValue={this.state?.radioValue}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNRadioButton>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 15.0,
                  paddingBottom: fixedWidth * 15.0,
                  paddingLeft: fixedWidth * 15.0,
                  paddingRight: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 1,
                  borderColor: Colors.silver,
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
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  Non Smoking Room
                </Text>
                <RNRadioButton
                  onPress={(value) => {
                    this.setState({ radioValue: value });
                  }}
                  outerCircleColor={Colors.textgrey}
                  innerCircleColor={Colors.blue}
                  selectedValue={this.state?.radioValue}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></RNRadioButton>
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
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 10.0,
                  marginBottom: fixedWidth * 10.0,
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
                    color: Colors.blue,
                    fontWeight: "900",
                    textAlign: "left",
                  }}
                >
                  Other Request
                </Text>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
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
                      width: "10.00%",
                      borderRadius: fixedWidth * 0,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"feather"}
                      name={"sun"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 25.0,
                        height: fixedWidth * 25.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </View>
                  <View
                    style={{
                      width: "100.00%",
                      marginLeft: fixedWidth * 5.0,
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
                        color: Colors.blue,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Check In Early
                    </Text>
                    <Text
                      style={{
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.03,
                        color: Colors.textgrey,
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Earliest Check in at 07:00
                    </Text>
                  </View>
                </View>
                <Switch
                  value={this.state.switch_}
                  onValueChange={(val) => {
                    this.setState({ switch_: val });
                  }}
                  color={Colors.textgrey}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Switch>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
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
                      width: "10.00%",
                      borderRadius: fixedWidth * 0,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"material-community"}
                      name={"moon-waning-crescent"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 25.0,
                        height: fixedWidth * 25.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </View>
                  <View
                    style={{
                      width: "100.00%",
                      marginLeft: fixedWidth * 5.0,
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
                        color: Colors.blue,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Check In Early
                    </Text>
                    <Text
                      style={{
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.03,
                        color: Colors.textgrey,
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Earliest Check in at 07:00
                    </Text>
                  </View>
                </View>
                <Switch
                  value={this.state.switch_}
                  onValueChange={(val) => {
                    this.setState({ switch_: val });
                  }}
                  color={Colors.textgrey}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Switch>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
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
                      width: "100.00%",
                      marginLeft: fixedWidth * 5.0,
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
                        color: Colors.blue,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Connected Room
                    </Text>
                    <Text
                      style={{
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.03,
                        color: Colors.textgrey,
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Get a room with connecting door
                    </Text>
                  </View>
                </View>
                <Switch
                  value={this.state.switch_}
                  onValueChange={(val) => {
                    this.setState({ switch_: val });
                  }}
                  color={Colors.textgrey}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Switch>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
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
                      width: "100.00%",
                      marginLeft: fixedWidth * 5.0,
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
                        color: Colors.blue,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      High Floor
                    </Text>
                    <Text
                      style={{
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.03,
                        color: Colors.textgrey,
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Get a room on the high floor
                    </Text>
                  </View>
                </View>
                <Switch
                  value={this.state.switch_}
                  onValueChange={(val) => {
                    this.setState({ switch_: val });
                  }}
                  color={Colors.textgrey}
                  style={{
                    width: fixedWidth * 30.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Switch>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 5.0,
                  marginBottom: fixedWidth * 5.0,
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
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
                      width: "100.00%",
                      marginLeft: fixedWidth * 5.0,
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
                        color: Colors.blue,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Other Request
                    </Text>
                    <Text
                      style={{
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.03,
                        color: Colors.textgrey,
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Write another request here
                    </Text>
                  </View>
                </View>
                <Switch
                  value={this.state.switch_}
                  onValueChange={(val) => {
                    this.setState({ switch_: val });
                  }}
                  color={Colors.textgrey}
                  style={{
                    width: fixedWidth * 30.0,
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
        </ScrollView>
        <View
          style={{
            width: "100.00%",
            height: "10.00%",
            borderRadius: fixedWidth * 0,
            borderTopWidth: 1,
            borderTopColor: Colors.lightgray,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <RNButton
            name={"Request"}
            width={"100%"}
            textStyle={{ ...styles.whiteText }}
            style={{
              ...styles.button,
              width: "85.00%",
              marginTop: fixedWidth * 10.0,
              borderWidth: 1,
              borderColor: Colors.lightgray,
            }}
            onPress={() => {
              navigation.navigate("HotelContactDetails");
            }}
          ></RNButton>
        </View>
      </View>
    );
  }
}
