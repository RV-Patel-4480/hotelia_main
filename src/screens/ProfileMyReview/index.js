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
import styles from "./styles";

import { AuthContext } from "_navigations/AuthContext";
import Icon from "_components/Icon";

export default class ProfileMyReview extends Component {
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
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ width: "100.00%" }}
        >
          <View
            style={{
              marginVertical: fixedWidth * 10.0,
              marginHorizontal: fixedWidth * 15.0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: fixedWidth * 20,
              borderColor: Colors.grey,
              padding: fixedWidth * 15.0,
            }}
          >
            <View
              style={{
                width: "100.00%",
                paddingBottom: fixedWidth * 10.0,
                borderRadius: fixedWidth * 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.linegray,
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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "30.00%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.black,
                    fontWeight: "normal",
                    textAlign: "right",
                  }}
                >
                  25/5/2019
                </Text>
              </View>
              <View
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
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
                    type={"font-awesome"}
                    name={"thumbs-o-up"}
                    color={Colors.primary}
                    style={{
                      width: fixedWidth * 15.0,
                      height: fixedWidth * 15.0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  ></Icon>
                </View>
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.darkgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  4 People think this useful
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 10.0,
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
                  fontSize: ScreenWidth * 0.03,
                  color: Colors.darkgrey,
                  fontWeight: "600",
                  textAlign: "left",
                  lineHeight: 20,
                }}
              >
                Hyat Regency has always been a favorite place to staycation with
                friend and have fun.
              </Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: fixedWidth * 10.0,
              marginHorizontal: fixedWidth * 15.0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: fixedWidth * 20,
              borderColor: Colors.grey,
              padding: fixedWidth * 15.0,
            }}
          >
            <View
              style={{
                width: "100.00%",
                paddingBottom: fixedWidth * 10.0,
                borderRadius: fixedWidth * 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.linegray,
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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "30.00%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      paddingLeft: fixedWidth * 2.0,
                      paddingRight: fixedWidth * 2.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"font-awesome"}
                      name={"star"}
                      color={Colors.primary}
                      style={{
                        width: fixedWidth * 15.0,
                        height: fixedWidth * 15.0,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.black,
                    fontWeight: "normal",
                    textAlign: "right",
                  }}
                >
                  25/5/2019
                </Text>
              </View>
              <View
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
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
                    type={"font-awesome"}
                    name={"thumbs-o-up"}
                    color={Colors.primary}
                    style={{
                      width: fixedWidth * 15.0,
                      height: fixedWidth * 15.0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  ></Icon>
                </View>
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.darkgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  4 People think this useful
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 10.0,
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
                  fontSize: ScreenWidth * 0.03,
                  color: Colors.darkgrey,
                  fontWeight: "600",
                  textAlign: "left",
                  lineHeight: 20,
                }}
              >
                Hyat Regency has always been a favorite place to staycation with
                friend and have fun.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
