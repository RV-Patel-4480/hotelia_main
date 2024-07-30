import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
import CalendarPicker from "react-native-calendar-picker";
import styles from "./styles";

import { AuthContext } from "_navigations/AuthContext";
import Icon from "_components/Icon";
import RNButton from "_components/RNButton";

export default class BookingDetails extends Component {
  static contextType = AuthContext;
  state = {
    selectedStartDate: null,
  };

  onDateChange = async (date) => {
    this.setState({
      selectedStartDate: date,
    });
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          backgroundColor: Colors.blue,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: "100.00%",
            height: "83.00%",
            backgroundColor: Colors.white,
            borderTopLeftRadius: fixedWidth * 25,
            borderTopRightRadius: fixedWidth * 25,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ width: "100.00%", height: "100.00%" }}
          >
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 20.0,
                marginBottom: fixedWidth * 8.0,
                paddingLeft: fixedWidth * 18.0,
                paddingRight: fixedWidth * 18.0,
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
                  paddingTop: fixedWidth * 8.0,
                  paddingBottom: fixedWidth * 8.0,
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
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Dates
                </Text>
              </View>
              <View
                style={{
                  // width: "95.00%",
                  // height: fixedWidth * 210.0,
                  backgroundColor: "#EAF1FF",
                  // marginHorizontal: 10,
                  borderRadius: fixedWidth * 15,
                  // borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <CalendarPicker
                  width={ScreenWidth * 0.9}
                  allowRangeSelection={true}
                  onDateChange={this.onDateChange}
                  nextComponent={<Icon name="angle-right" color={"blue"} />}
                  previousComponent={<Icon name="angle-left" color={"blue"} />}
                  nextTitleStyle={{ fontSize: fixedWidth * 22 }}
                  previousTitleStyle={{ fontSize: fixedWidth * 22 }}
                  selectedDayTextColor={Colors.white}
                  selectedRangeStyle={{ backgroundColor: Colors.blue }}
                />
              </View>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 8.0,
                paddingLeft: fixedWidth * 18.0,
                paddingRight: fixedWidth * 18.0,
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
                  paddingTop: fixedWidth * 8.0,
                  paddingBottom: fixedWidth * 8.0,
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
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Guest & Room
                </Text>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 4.0,
                  marginBottom: fixedWidth * 6.0,
                  paddingTop: fixedWidth * 16.0,
                  paddingBottom: fixedWidth * 16.0,
                  paddingLeft: fixedWidth * 12.0,
                  paddingRight: fixedWidth * 12.0,
                  borderRadius: fixedWidth * 10,
                  borderWidth: 1,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.blue,
                      fontWeight: "600",
                      textAlign: "left",
                      lineHeight: 20,
                    }}
                  >
                    Adults
                  </Text>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                      lineHeight: 20,
                    }}
                  >
                    Over 17 Years
                  </Text>
                </View>
                <View
                  style={{
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
                      width: fixedWidth * 35.0,
                      height: fixedWidth * 35.0,
                      marginLeft: fixedWidth * 2.0,
                      marginRight: fixedWidth * 6.0,
                      backgroundColor: Colors.lightgray,
                      borderRadius: fixedWidth * 8,
                      borderWidth: 1,
                      borderColor: Colors.silver,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"entypo"}
                      name={"minus"}
                      color={Colors.black}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginLeft: fixedWidth * 8.0,
                      marginRight: fixedWidth * 8.0,
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
                        fontSize: ScreenWidth * 0.04,
                        color: Colors.black,
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: fixedWidth * 35.0,
                      height: fixedWidth * 35.0,
                      marginLeft: fixedWidth * 6.0,
                      backgroundColor: Colors.lightgray,
                      borderRadius: fixedWidth * 8,
                      borderWidth: 1,
                      borderColor: Colors.silver,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"entypo"}
                      name={"plus"}
                      color={Colors.black}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 6.0,
                  marginBottom: fixedWidth * 6.0,
                  paddingTop: fixedWidth * 16.0,
                  paddingBottom: fixedWidth * 16.0,
                  paddingLeft: fixedWidth * 12.0,
                  paddingRight: fixedWidth * 12.0,
                  borderRadius: fixedWidth * 10,
                  borderWidth: 1,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.blue,
                      fontWeight: "600",
                      textAlign: "left",
                      lineHeight: 20,
                    }}
                  >
                    Child
                  </Text>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                      lineHeight: 20,
                    }}
                  >
                    Over 17 Years
                  </Text>
                </View>
                <View
                  style={{
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
                      width: fixedWidth * 35.0,
                      height: fixedWidth * 35.0,
                      marginLeft: fixedWidth * 2.0,
                      marginRight: fixedWidth * 6.0,
                      backgroundColor: Colors.lightgray,
                      borderRadius: fixedWidth * 8,
                      borderWidth: 1,
                      borderColor: Colors.silver,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"entypo"}
                      name={"minus"}
                      color={Colors.black}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginLeft: fixedWidth * 8.0,
                      marginRight: fixedWidth * 8.0,
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
                        fontSize: ScreenWidth * 0.04,
                        color: Colors.black,
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: fixedWidth * 35.0,
                      height: fixedWidth * 35.0,
                      marginLeft: fixedWidth * 6.0,
                      backgroundColor: Colors.lightgray,
                      borderRadius: fixedWidth * 8,
                      borderWidth: 1,
                      borderColor: Colors.silver,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"entypo"}
                      name={"plus"}
                      color={Colors.black}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 6.0,
                  paddingTop: fixedWidth * 16.0,
                  paddingBottom: fixedWidth * 16.0,
                  paddingLeft: fixedWidth * 12.0,
                  paddingRight: fixedWidth * 12.0,
                  borderRadius: fixedWidth * 10,
                  borderWidth: 1,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.blue,
                      fontWeight: "600",
                      textAlign: "left",
                      lineHeight: 20,
                    }}
                  >
                    Room
                  </Text>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                      lineHeight: 20,
                    }}
                  >
                    Over 17 Years
                  </Text>
                </View>
                <View
                  style={{
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
                      width: fixedWidth * 35.0,
                      height: fixedWidth * 35.0,
                      marginLeft: fixedWidth * 2.0,
                      marginRight: fixedWidth * 6.0,
                      backgroundColor: Colors.lightgray,
                      borderRadius: fixedWidth * 8,
                      borderWidth: 1,
                      borderColor: Colors.silver,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"entypo"}
                      name={"minus"}
                      color={Colors.black}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginLeft: fixedWidth * 8.0,
                      marginRight: fixedWidth * 8.0,
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
                        fontSize: ScreenWidth * 0.04,
                        color: Colors.black,
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: fixedWidth * 35.0,
                      height: fixedWidth * 35.0,
                      marginLeft: fixedWidth * 6.0,
                      backgroundColor: Colors.lightgray,
                      borderRadius: fixedWidth * 8,
                      borderWidth: 1,
                      borderColor: Colors.silver,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"entypo"}
                      name={"plus"}
                      color={Colors.black}
                      style={{
                        width: fixedWidth * 20.0,
                        height: fixedWidth * 20.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: "100.00%",
            height: "15.00%",
            paddingLeft: fixedWidth * 20.0,
            paddingRight: fixedWidth * 20.0,
            backgroundColor: Colors.white,
            borderRadius: fixedWidth * 0,
            borderTopWidth: 1,
            borderTopColor: Colors.silver,
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
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: fixedWidth * 70.0,
                marginLeft: fixedWidth * 5.0,
                marginRight: fixedWidth * 5.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.grey,
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
                SUBTOTAL
              </Text>
              <Text
                style={{
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.05,
                  color: Colors.blue,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                $125
              </Text>
            </View>
            <View
              style={{
                width: "75.00%",
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RNButton
                name={"Booking"}
                width={"100%"}
                textStyle={{ ...styles.whiteText }}
                style={{
                  ...styles.button,
                  paddingTop: fixedWidth * 12.0,
                  paddingBottom: fixedWidth * 12.0,
                }}
                onPress={() => {
                  navigation.navigate("HotelSelectRoomType");
                }}
              ></RNButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
