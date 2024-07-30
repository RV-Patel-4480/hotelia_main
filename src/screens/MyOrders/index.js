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
import RNButton from "_components/RNButton";

export default class MyOrders extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          paddingTop: fixedWidth * 38.0,
          paddingHorizontal: fixedWidth * 20.0,
          backgroundColor: Colors.white,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "100.00%",
            paddingVertical: fixedWidth * 18.0,
            paddingHorizontal: fixedWidth * 12.0,
            elevation: 2,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            backgroundColor: Colors.white,
            borderRadius: fixedWidth * 12,
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
              paddingBottom: fixedWidth * 18.0,
              borderRadius: fixedWidth * 0,
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightgray,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
                ORDER ID : 88587932798
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                type={"entypo"}
                name={"dots-three-vertical"}
                color={Colors.textgrey}
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
                paddingTop: fixedWidth * 12.0,
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
                  width: fixedWidth * 45.0,
                  height: fixedWidth * 45.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  resizeMode={"cover"}
                  source={require("_assets/hotelia/SuperiorTwinBed2.png")}
                  style={{
                    width: fixedWidth * 45.0,
                    height: fixedWidth * 45.0,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
              </View>
              <View
                style={{
                  width: "50.00%",
                  height: fixedWidth * 45.0,
                  paddingVertical: fixedWidth * 2,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.blue,
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Hyatt Regency
                </Text>
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    letterSpacing: fixedWidth * 1,
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.textgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  SUPERIOR TWIN BED
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  padding: fixedWidth * 6,
                  borderRadius: fixedWidth * 30,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  backgroundColor: Colors.lightgray,
                }}
              >
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    marginHorizontal: fixedWidth * 4,
                    color: Colors.red,
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Not Completed
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 12.0,
                paddingBottom: fixedWidth * 12.0,
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
                  width: "50.00%",
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
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.textgrey,
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  Price Details
                </Text>
              </View>
              <View
                style={{
                  width: "50.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
                    paddingLeft: fixedWidth * 8.0,
                    paddingRight: fixedWidth * 8.0,
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      width: "100.00%",
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.04,
                      color: Colors.blue,
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    $125 USD
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
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"entypo"}
                    name={"chevron-small-down"}
                    color={Colors.black}
                    style={{
                      width: fixedWidth * 22.0,
                      height: fixedWidth * 22.0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  ></Icon>
                </TouchableOpacity>
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
              name={"Complete Payment in 00:10:20"}
              width={"100%"}
              textStyle={{ ...styles.whiteText }}
              onPress={() => {
                navigation.navigate("BookingDetails");
              }}
              style={{ ...styles.button }}
            ></RNButton>
          </View>
        </View>
        <View
          style={{
            width: "100.00%",
            paddingVertical: fixedWidth * 18.0,
            paddingHorizontal: fixedWidth * 12.0,
            marginTop: fixedWidth * 12,
            elevation: 2,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            backgroundColor: Colors.white,
            borderRadius: fixedWidth * 12,
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
              paddingBottom: fixedWidth * 18.0,
              borderRadius: fixedWidth * 0,
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightgray,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
                ORDER ID : 88587932798
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
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                type={"entypo"}
                name={"dots-three-vertical"}
                color={Colors.textgrey}
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
                paddingTop: fixedWidth * 12.0,
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
                  width: fixedWidth * 45.0,
                  height: fixedWidth * 45.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  resizeMode={"cover"}
                  source={require("_assets/hotelia/SuperiorTwinBed2.png")}
                  style={{
                    width: fixedWidth * 45.0,
                    height: fixedWidth * 45.0,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                />
              </View>
              <View
                style={{
                  width: "50.00%",
                  height: fixedWidth * 45.0,
                  paddingVertical: fixedWidth * 2,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.blue,
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Hyatt Regency
                </Text>
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    letterSpacing: fixedWidth * 1,
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.textgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                  }}
                >
                  SUPERIOR TWIN BED
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  padding: fixedWidth * 6,
                  borderRadius: fixedWidth * 30,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  backgroundColor: Colors.lightgray,
                }}
              >
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    marginHorizontal: fixedWidth * 4,
                    color: Colors.red,
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Not Completed
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 12.0,
                paddingBottom: fixedWidth * 12.0,
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
                  width: "50.00%",
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
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.textgrey,
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  Price Details
                </Text>
              </View>
              <View
                style={{
                  width: "50.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{
                    width: "80.00%",
                    paddingLeft: fixedWidth * 8.0,
                    paddingRight: fixedWidth * 8.0,
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      width: "100.00%",
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.04,
                      color: Colors.blue,
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    $125 USD
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
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"entypo"}
                    name={"chevron-small-down"}
                    color={Colors.black}
                    style={{
                      width: fixedWidth * 22.0,
                      height: fixedWidth * 22.0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  ></Icon>
                </TouchableOpacity>
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
              name={"See E-Ticket"}
              width={"100%"}
              textStyle={{ ...styles.whiteText }}
              onPress={() => {
                navigation.navigate("HotelETicket");
              }}
              style={{ ...styles.button }}
            ></RNButton>
          </View>
        </View>
      </View>
    );
  }
}
