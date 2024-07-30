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

export default class HotelDetails extends Component {
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
          justifyContent: "flex-start",
        }}
      >
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ width: "100.00%", height: "100.00%" }}
        >
          <ImageBackground
            source={require("_assets/hotelia/hotel7.png")}
            imageStyle={{
              width: "100%",
              height: "100%",
              resizeMode: "stretch",
            }}
            style={{
              width: "100.00%",
              height: fixedWidth * 330.0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 22.0,
                paddingBottom: fixedWidth * 14.0,
                paddingLeft: fixedWidth * 18.0,
                paddingRight: fixedWidth * 18.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation?.goBack();
                }}
                style={{
                  width: fixedWidth * 45.0,
                  height: fixedWidth * 45.0,
                  backgroundColor: Colors.black,
                  borderRadius: fixedWidth * 50,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"entypo"}
                  name={"chevron-left"}
                  color={Colors.white}
                  style={{
                    width: fixedWidth * 22.0,
                    height: fixedWidth * 22.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: fixedWidth * 45.0,
                  height: fixedWidth * 45.0,
                  backgroundColor: Colors.olive,
                  borderRadius: fixedWidth * 50,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"entypo"}
                  name={"share"}
                  color={Colors.white}
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
                  width: "90.00%",
                  marginTop: fixedWidth * 15.0,
                  marginBottom: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: fixedWidth * 60.0,
                    height: fixedWidth * 60.0,
                    marginRight: fixedWidth * 10.0,
                    borderRadius: fixedWidth * 5,
                    borderWidth: 5,
                    borderColor: Colors.darkgrey,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    resizeMode={"cover"}
                    source={require("_assets/hotelia/hotel2.png")}
                    style={{
                      width: fixedWidth * 53.0,
                      height: fixedWidth * 53.0,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: fixedWidth * 60.0,
                    height: fixedWidth * 60.0,
                    marginRight: fixedWidth * 10.0,
                    borderRadius: fixedWidth * 5,
                    borderWidth: 5,
                    borderColor: Colors.darkgrey,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    resizeMode={"cover"}
                    source={require("_assets/hotelia/hotel1.png")}
                    style={{
                      width: fixedWidth * 53.0,
                      height: fixedWidth * 53.0,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: fixedWidth * 60.0,
                    height: fixedWidth * 60.0,
                    marginRight: fixedWidth * 10.0,
                    borderRadius: fixedWidth * 5,
                    borderWidth: 5,
                    borderColor: Colors.darkgrey,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    resizeMode={"cover"}
                    source={require("_assets/hotelia/hotel6.png")}
                    style={{
                      width: fixedWidth * 53.0,
                      height: fixedWidth * 53.0,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: fixedWidth * 60.0,
                    height: fixedWidth * 60.0,
                    marginRight: fixedWidth * 10.0,
                    borderRadius: fixedWidth * 5,
                    borderWidth: 5,
                    borderColor: Colors.darkgrey,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    resizeMode={"cover"}
                    source={require("_assets/hotelia/hotel5.png")}
                    style={{
                      width: fixedWidth * 53.0,
                      height: fixedWidth * 53.0,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 6.0,
              paddingBottom: fixedWidth * 6.0,
              paddingLeft: fixedWidth * 18.0,
              paddingRight: fixedWidth * 18.0,
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
                marginTop: fixedWidth * 4.0,
                marginBottom: fixedWidth * 4.0,
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
                  width: "80.00%",
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
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.05,
                    color: Colors.black,
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Aston White Coral
                </Text>
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 6.0,
                    marginBottom: fixedWidth * 2.0,
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
                      width: "100.00%",
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                    }}
                  >
                    Walik street 23, Depak, Sleman, DIY
                  </Text>
                  <View
                    style={{
                      width: "100.00%",
                      paddingTop: fixedWidth * 2.0,
                      paddingBottom: fixedWidth * 4.0,
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
                        borderRadius: fixedWidth * 0,
                        borderWidth: 0,
                        borderColor: Colors.white,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          marginRight: fixedWidth * 2.0,
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
                          name={"star"}
                          color={Colors.primary}
                          style={{
                            width: fixedWidth * 15.0,
                            height: fixedWidth * 15.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          marginLeft: fixedWidth * 2.0,
                          marginRight: fixedWidth * 2.0,
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
                          name={"star"}
                          color={Colors.primary}
                          style={{
                            width: fixedWidth * 15.0,
                            height: fixedWidth * 15.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          marginLeft: fixedWidth * 2.0,
                          marginRight: fixedWidth * 2.0,
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
                          name={"star"}
                          color={Colors.primary}
                          style={{
                            width: fixedWidth * 15.0,
                            height: fixedWidth * 15.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          marginRight: fixedWidth * 2.0,
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
                          name={"star"}
                          color={Colors.primary}
                          style={{
                            width: fixedWidth * 15.0,
                            height: fixedWidth * 15.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          marginRight: fixedWidth * 2.0,
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
                          name={"star"}
                          color={Colors.yellowlight}
                          style={{
                            width: fixedWidth * 15.0,
                            height: fixedWidth * 15.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        marginLeft: fixedWidth * 4.0,
                        marginRight: fixedWidth * 4.0,
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
                          textTransform: "none",
                          fontSize: ScreenWidth * 0.04,
                          paddingHorizontal: 6.0,
                          color: Colors.blue,
                          fontWeight: "700",
                          textAlign: "left",
                        }}
                      >
                        4.5
                      </Text>
                      <Text
                        style={{
                          textTransform: "none",
                          fontSize: ScreenWidth * 0.03,
                          paddingHorizontal: 6.0,
                          color: Colors.lightpurple,
                          fontWeight: "normal",
                          textAlign: "left",
                        }}
                      >
                        120 Reviews
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "20.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: fixedWidth * 45.0,
                    height: fixedWidth * 45.0,
                    backgroundColor: Colors.lightpink,
                    borderRadius: fixedWidth * 10,
                    borderWidth: 0,
                    borderColor: Colors.silver,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"ionicon"}
                    name={"heart"}
                    color={Colors.pink}
                    style={{
                      width: fixedWidth * 26.0,
                      height: fixedWidth * 26.0,
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
                marginTop: fixedWidth * 4.0,
                marginBottom: fixedWidth * 4.0,
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
                  marginTop: fixedWidth * 4.0,
                  marginBottom: fixedWidth * 8.0,
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
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Description
                </Text>
              </View>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  width: "100.00%",
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.03,
                  color: Colors.textgrey,
                  fontWeight: "normal",
                  textAlign: "left",
                }}
              >
                Aston White Coral is a hotel with a modern concept located in
                the Sleman area
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 6.0,
              paddingBottom: fixedWidth * 10.0,
              paddingLeft: fixedWidth * 18.0,
              paddingRight: fixedWidth * 18.0,
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
                marginTop: fixedWidth * 4.0,
                marginBottom: fixedWidth * 12.0,
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
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                Facility
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 4.0,
                marginBottom: fixedWidth * 4.0,
                paddingTop: fixedWidth * 14.0,
                paddingBottom: fixedWidth * 14.0,
                paddingLeft: fixedWidth * 14.0,
                paddingRight: fixedWidth * 14.0,
                borderRadius: fixedWidth * 8,
                borderWidth: 1,
                borderColor: Colors.silver,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: "20.00%",
                  paddingTop: fixedWidth * 10.0,
                  paddingBottom: fixedWidth * 10.0,
                  paddingLeft: fixedWidth * 4.0,
                  paddingRight: fixedWidth * 4.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 8,
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
                    marginBottom: fixedWidth * 4.0,
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"material-community"}
                    name={"parking"}
                    color={Colors.blue}
                    style={{
                      width: fixedWidth * 26.0,
                      height: fixedWidth * 26.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Icon>
                </View>
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.blue,
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Parking
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: "20.00%",
                  paddingTop: fixedWidth * 10.0,
                  paddingBottom: fixedWidth * 10.0,
                  paddingLeft: fixedWidth * 4.0,
                  paddingRight: fixedWidth * 4.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 8,
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
                    marginBottom: fixedWidth * 4.0,
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"material-community"}
                    name={"wifi"}
                    color={Colors.blue}
                    style={{
                      width: fixedWidth * 22.0,
                      height: fixedWidth * 22.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Icon>
                </View>
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.blue,
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Wi-Fi
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: "20.00%",
                  paddingTop: fixedWidth * 10.0,
                  paddingBottom: fixedWidth * 10.0,
                  paddingLeft: fixedWidth * 4.0,
                  paddingRight: fixedWidth * 4.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 8,
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
                    marginBottom: fixedWidth * 4.0,
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"material"}
                    name={"pool"}
                    color={Colors.blue}
                    style={{
                      width: fixedWidth * 26.0,
                      height: fixedWidth * 26.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Icon>
                </View>
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.blue,
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Pool
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: "20.00%",
                  paddingTop: fixedWidth * 10.0,
                  paddingBottom: fixedWidth * 10.0,
                  paddingLeft: fixedWidth * 4.0,
                  paddingRight: fixedWidth * 4.0,
                  backgroundColor: Colors.lightgray,
                  borderRadius: fixedWidth * 8,
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
                    marginBottom: fixedWidth * 4.0,
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"material-community"}
                    name={"arrow-top-left-bottom-right-bold"}
                    color={Colors.blue}
                    style={{
                      width: fixedWidth * 26.0,
                      height: fixedWidth * 26.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Icon>
                </View>
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.blue,
                    fontWeight: "normal",
                    textAlign: "center",
                  }}
                >
                  Gym
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingTop: fixedWidth * 10.0,
              paddingBottom: fixedWidth * 8.0,
              paddingLeft: fixedWidth * 18.0,
              paddingRight: fixedWidth * 18.0,
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
                  color: Colors.darkblue,
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                Reviews
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{
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
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.03,
                  color: Colors.textgrey,
                  fontWeight: "normal",
                  textAlign: "left",
                }}
              >
                See All
              </Text>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"feather"}
                  name={"chevron-right"}
                  color={Colors.textgrey}
                  style={{
                    width: fixedWidth * 18.0,
                    height: fixedWidth * 18.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100.00%",
              height: fixedWidth * 220.0,
              paddingLeft: fixedWidth * 4.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatGrid
              horizontal={true}
              itemDimension={391.6}
              showsVerticalScrollIndicator={false}
              spacing={14}
              data={[1, 2, 3, 4, 5]}
              style={{ flex: 1 }}
              renderItem={({ index, item }) => (
                <View
                  style={{
                    width: fixedWidth * 315.0,
                    height: fixedWidth * 190.0,
                    paddingLeft: fixedWidth * 14.0,
                    paddingRight: fixedWidth * 14.0,
                    borderRadius: fixedWidth * 16,
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
                      paddingTop: fixedWidth * 16.0,
                      paddingBottom: fixedWidth * 16.0,
                      borderRadius: fixedWidth * 0,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.silver,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        width: fixedWidth * 40.0,
                        height: fixedWidth * 40.0,
                        borderRadius: fixedWidth * 100,
                        borderWidth: 0,
                        borderColor: Colors.white,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        resizeMode={"cover"}
                        source={require("_assets/common/user_profile_round.png")}
                        style={{
                          width: "100.00%",
                          height: "100.00%",
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 50,
                          borderTopLeftRadius: 50,
                          borderTopRightRadius: 50,
                        }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        width: "85.00%",
                        paddingLeft: fixedWidth * 4.0,
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
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.04,
                            color: Colors.darkblue,
                            fontWeight: "600",
                            textAlign: "left",
                          }}
                        >
                          Bambang Ferdy
                        </Text>
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          25/5/2019
                        </Text>
                      </View>
                      <View
                        style={{
                          marginTop: fixedWidth * 2.0,
                          marginBottom: fixedWidth * 2.0,
                          borderRadius: fixedWidth * 0,
                          borderWidth: 0,
                          borderColor: Colors.white,
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {}}
                          style={{
                            marginRight: fixedWidth * 2.0,
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
                            name={"star"}
                            color={Colors.orange}
                            style={{
                              width: fixedWidth * 15.0,
                              height: fixedWidth * 15.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {}}
                          style={{
                            marginLeft: fixedWidth * 2.0,
                            marginRight: fixedWidth * 2.0,
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
                            name={"star"}
                            color={Colors.orange}
                            style={{
                              width: fixedWidth * 15.0,
                              height: fixedWidth * 15.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {}}
                          style={{
                            marginLeft: fixedWidth * 2.0,
                            marginRight: fixedWidth * 2.0,
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
                            name={"star"}
                            color={Colors.orange}
                            style={{
                              width: fixedWidth * 15.0,
                              height: fixedWidth * 15.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {}}
                          style={{
                            marginRight: fixedWidth * 2.0,
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
                            name={"star"}
                            color={Colors.orange}
                            style={{
                              width: fixedWidth * 15.0,
                              height: fixedWidth * 15.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {}}
                          style={{
                            marginRight: fixedWidth * 2.0,
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
                            name={"star"}
                            color={Colors.orange}
                            style={{
                              width: fixedWidth * 15.0,
                              height: fixedWidth * 15.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                      </View>
                    </View>
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
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      numberOfLines={4}
                      ellipsizeMode="tail"
                      style={{
                        width: "100.00%",
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.04,
                        color: Colors.textgrey,
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      Hyat Regency has always been a{`\n`}favorite place to
                      staycation with friend and have fun.
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
        <View
          style={{
            width: "100.00%",
            height: "10.00%",
            paddingLeft: fixedWidth * 20.0,
            paddingRight: fixedWidth * 20.0,
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
                START FROM
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
                width: "65.00%",
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
                style={{ ...styles.button }}
                onPress={() => {
                  navigation.navigate("BookingDetails");
                }}
              ></RNButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
