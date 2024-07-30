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

export default class HotelPaymentSuccess extends Component {
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
          alignItems: "flex-start",
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
              paddingTop: fixedWidth * 20.0,
              paddingBottom: fixedWidth * 20.0,
              paddingLeft: fixedWidth * 20.0,
              paddingRight: fixedWidth * 20.0,
              backgroundColor: Colors.blue,
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: fixedWidth * 25.0,
                  height: fixedWidth * 25.0,
                  backgroundColor: Colors.primary,
                  borderRadius: fixedWidth * 100,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"feather"}
                  name={"check"}
                  color={Colors.white}
                  style={{
                    width: fixedWidth * 15.0,
                    height: fixedWidth * 15.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </View>
              <View
                style={{
                  width: "35.00%",
                  height: "20.00%",
                  backgroundColor: Colors.white,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View
                style={{
                  width: fixedWidth * 25.0,
                  height: fixedWidth * 25.0,
                  backgroundColor: Colors.primary,
                  borderRadius: fixedWidth * 100,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"feather"}
                  name={"check"}
                  color={Colors.white}
                  style={{
                    width: fixedWidth * 15.0,
                    height: fixedWidth * 15.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </View>
              <View
                style={{
                  width: "35.00%",
                  height: "20.00%",
                  backgroundColor: Colors.white,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View
                style={{
                  width: fixedWidth * 25.0,
                  height: fixedWidth * 25.0,
                  backgroundColor: Colors.primary,
                  borderRadius: fixedWidth * 100,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "60.00%",
                    height: "60.00%",
                    backgroundColor: Colors.white,
                    borderRadius: fixedWidth * 100,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></View>
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
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  width: "15.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.03,
                  marginTop: fixedWidth * 5.0,
                  color: Colors.white,
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                Booking
              </Text>
              <Text
                style={{
                  width: "15.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.03,
                  marginTop: fixedWidth * 5.0,
                  color: Colors.white,
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                Payment
              </Text>
              <Text
                style={{
                  width: "15.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.03,
                  marginTop: fixedWidth * 5.0,
                  color: Colors.textgrey,
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                Receipt
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingLeft: fixedWidth * 20.0,
              paddingRight: fixedWidth * 20.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.silver,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 20.0,
                paddingBottom: fixedWidth * 15.0,
                paddingLeft: fixedWidth * 15.0,
                paddingRight: fixedWidth * 15.0,
                borderRadius: fixedWidth * 8,
                borderWidth: 1,
                borderColor: Colors.silver,
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
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: fixedWidth * 120.0,
                    height: fixedWidth * 120.0,
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
                    source={require("_assets/hotelia/Login.png")}
                    style={{ width: "100.00%", height: "100.00%" }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 10.0,
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
                    ...styles.blackText,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    fontSize: ScreenWidth * 0.059500000000000004,
                    fontWeight: "bold",
                    color: Colors.blue,
                  }}
                >
                  Payment Successful
                </Text>
              </View>
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
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 5.0,
                    marginBottom: fixedWidth * 5.0,
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Invoice
                  </Text>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.blue,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    INV23124131332
                  </Text>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 5.0,
                    marginBottom: fixedWidth * 5.0,
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Transaction Date
                  </Text>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.blue,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    Wed, 18 Oct 2022
                  </Text>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 5.0,
                    marginBottom: fixedWidth * 5.0,
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Payment Method
                  </Text>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.blue,
                      fontWeight: "600",
                      textAlign: "right",
                    }}
                  >
                    BCA Virtual Account
                  </Text>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 5.0,
                    marginBottom: fixedWidth * 5.0,
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "600",
                      textAlign: "left",
                    }}
                  >
                    Price Details
                  </Text>
                  <View
                    style={{
                      borderRadius: fixedWidth * 0,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.05,
                        color: Colors.blue,
                        fontWeight: "900",
                        textAlign: "right",
                      }}
                    >
                      $125 USD
                    </Text>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
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
                        color={Colors.blue}
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
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 10.0,
                  borderRadius: fixedWidth * 0,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <RNButton
                  name={"Send Receipt"}
                  width={"100%"}
                  textStyle={{ ...styles.buttonBlueText }}
                  onPress={() => {}}
                  style={{
                    ...styles.button,
                    paddingTop: fixedWidth * 8.0,
                    paddingBottom: fixedWidth * 8.0,
                    backgroundColor: Colors.transparent,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.lightgray,
                    borderRightWidth: 1,
                    borderRightColor: Colors.lightgray,
                    borderTopWidth: 1,
                    borderTopColor: Colors.lightgray,
                    borderLeftWidth: 1,
                    borderLeftColor: Colors.lightgray,
                  }}
                ></RNButton>
              </View>
            </View>
          </View>
        </View>
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
            name={"See E-Voucher"}
            width={"100%"}
            textStyle={{ ...styles.whiteText }}
            style={{
              ...styles.button,
              width: "85.00%",
              marginTop: fixedWidth * 10.0,
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightgray,
              borderRightWidth: 1,
              borderRightColor: Colors.lightgray,
              borderTopWidth: 1,
              borderTopColor: Colors.lightgray,
              borderLeftWidth: 1,
              borderLeftColor: Colors.lightgray,
            }}
            onPress={() => {
              navigation.navigate("HotelETicket");
            }}
          ></RNButton>
        </View>
      </View>
    );
  }
}
