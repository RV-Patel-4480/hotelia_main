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
import RNButton from "_components/RNButton";

export default class HomeScreen extends Component {
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
        <View
          style={{
            width: "100.00%",
            marginTop: fixedWidth * 6.0,
            marginBottom: fixedWidth * 2.0,
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
              marginTop: fixedWidth * 10.0,
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
                  width: fixedWidth * 45.0,
                  height: fixedWidth * 45.0,
                  borderRadius: fixedWidth * 50,
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
                  paddingLeft: fixedWidth * 10.0,
                  paddingRight: fixedWidth * 4.0,
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
                    color: Colors.textgrey,
                    fontWeight: "normal",
                    textAlign: "left",
                    lineHeight: 18,
                  }}
                >
                  HELLO THERE
                </Text>
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.darkblue,
                    fontWeight: "900",
                    textAlign: "left",
                  }}
                >
                  Antony William
                </Text>
              </View>
            </View>
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
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: fixedWidth * 45.0,
                  height: fixedWidth * 45.0,
                  elevation: 1,
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.2,
                  backgroundColor: Colors.silver,
                  borderRadius: fixedWidth * 100,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"font-awesome-5"}
                  name={"envelope"}
                  color={Colors.primary}
                  style={{
                    width: fixedWidth * 24.0,
                    height: fixedWidth * 24.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
                <View
                  style={{
                    width: fixedWidth * 15.0,
                    height: fixedWidth * 15.0,
                    position: "absolute",
                    top: "0.01%",
                    right: "0.75%",
                    backgroundColor: Colors.blue,
                    borderRadius: fixedWidth * 100,
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
                      fontSize: ScreenWidth * 0.02,
                      color: Colors.white,
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    5
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 14.0,
              marginBottom: fixedWidth * 2.0,
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                  name={"search"}
                  color={Colors.blue}
                  style={{
                    width: fixedWidth * 25.0,
                    height: fixedWidth * 25.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </TouchableOpacity>
              <View
                style={{
                  paddingLeft: fixedWidth * 8.0,
                  paddingRight: fixedWidth * 4.0,
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
                  placeholder={"Explore Something Fun"}
                  placeholderTextColor={Colors.textgrey}
                  editable={true}
                  multiline={false}
                  errors={this.state.errors || {}}
                  disabledColor={Colors.primary}
                  style={{
                    width: "100.00%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></RNTextInput>
              </View>
            </View>
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
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: fixedWidth * 35.0,
                  height: fixedWidth * 35.0,
                  backgroundColor: Colors.silver,
                  borderRadius: fixedWidth * 8,
                  borderWidth: 1,
                  borderColor: Colors.grey,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"ionicon"}
                  name={"options"}
                  color={Colors.blue}
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
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ width: "100.00%" }}
        >
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 16.0,
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
                marginTop: fixedWidth * 12.0,
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
                  Category
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
                  justifyContent: "flex-end",
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
                    alignItems: "flex-end",
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
                height: fixedWidth * 65.0,
                paddingLeft: fixedWidth * 8.0,
                borderRadius: fixedWidth * 0,
                borderWidth: 0,
                borderColor: Colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FlatGrid
                horizontal={true}
                itemDimension={387.8}
                showsVerticalScrollIndicator={false}
                spacing={8}
                data={[1, 2, 3, 4, 5]}
                style={{ flex: 1 }}
                renderItem={({ index, item }) => (
                  <RNButton
                    name={"Popular"}
                    width={"100%"}
                    onPress={() => {}}
                    style={{
                      width: fixedWidth * 85.0,
                      paddingTop: fixedWidth * 5.0,
                      paddingBottom: fixedWidth * 5.0,
                      paddingLeft: fixedWidth * 10.0,
                      paddingRight: fixedWidth * 10.0,
                      backgroundColor: Colors.primary,
                      borderRadius: fixedWidth * 30,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></RNButton>
                )}
              />
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              height: fixedWidth * 340.0,
              borderRadius: fixedWidth * 0,
              borderWidth: 0,
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <FlatGrid
              horizontal={true}
              itemDimension={395.6}
              showsVerticalScrollIndicator={false}
              spacing={15}
              data={[1, 2, 3, 4, 5]}
              style={{ flex: 1 }}
              renderItem={({ index, item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("HotelDetails");
                  }}
                  style={{
                    width: fixedWidth * 180.0,
                    height: fixedWidth * 290.0,
                    borderRadius: fixedWidth * 10,
                    borderWidth: 1,
                    borderColor: Colors.grey,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ImageBackground
                    source={require("_assets/hotelia/hotel1.png")}
                    imageStyle={{
                      width: "100%",
                      height: "100%",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      resizeMode: "cover",
                    }}
                    style={{
                      width: "100.00%",
                      height: fixedWidth * 145.0,
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    }}
                  >
                    <View
                      style={{
                        width: "100.00%",
                        paddingTop: fixedWidth * 10.0,
                        paddingBottom: fixedWidth * 4.0,
                        paddingLeft: fixedWidth * 10.0,
                        paddingRight: fixedWidth * 10.0,
                        borderRadius: fixedWidth * 0,
                        borderWidth: 0,
                        borderColor: Colors.white,
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          paddingTop: fixedWidth * 6.0,
                          paddingBottom: fixedWidth * 6.0,
                          paddingLeft: fixedWidth * 8.0,
                          paddingRight: fixedWidth * 8.0,
                          elevation: 1,
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.2,
                          backgroundColor: Colors.modelbgtransparent,
                          borderRadius: fixedWidth * 6,
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
                            marginRight: fixedWidth * 4.0,
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
                              width: fixedWidth * 16.0,
                              height: fixedWidth * 16.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.white,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          4.8
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      width: "100.00%",
                      paddingTop: fixedWidth * 10.0,
                      paddingBottom: fixedWidth * 10.0,
                      paddingLeft: fixedWidth * 10.0,
                      paddingRight: fixedWidth * 10.0,
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
                        paddingTop: fixedWidth * 6.0,
                        paddingBottom: fixedWidth * 12.0,
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
                          fontSize: ScreenWidth * 0.04,
                          color: Colors.darkblue,
                          fontWeight: "700",
                          textAlign: "left",
                        }}
                      >
                        The Phoenix Hotel
                      </Text>
                      <View
                        style={{
                          width: "100.00%",
                          paddingTop: fixedWidth * 2.0,
                          paddingBottom: fixedWidth * 2.0,
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
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon
                            type={"fontisto"}
                            name={"map-marker-alt"}
                            color={Colors.primary}
                            style={{
                              width: fixedWidth * 13.0,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          ></Icon>
                        </View>
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
                              fontSize: ScreenWidth * 0.03,
                              color: Colors.textgrey,
                              fontWeight: "normal",
                              textAlign: "left",
                            }}
                          >
                            Slemon, DYY
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100.00%",
                        paddingTop: fixedWidth * 12.0,
                        paddingBottom: fixedWidth * 6.0,
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
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                            lineHeight: 18,
                          }}
                        >
                          start from
                        </Text>
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
                          <Text
                            style={{
                              textTransform: "none",
                              fontSize: ScreenWidth * 0.04,
                              color: Colors.darkblue,
                              fontWeight: "700",
                              textAlign: "left",
                            }}
                          >
                            $125
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
                            /NIGHT
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          width: fixedWidth * 35.0,
                          height: fixedWidth * 35.0,
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
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              width: "100.00%",
              marginTop: fixedWidth * 10.0,
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: fixedWidth * 8.0,
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
                  name={"direction"}
                  color={Colors.primary}
                  style={{
                    width: fixedWidth * 20.0,
                    height: fixedWidth * 20.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </TouchableOpacity>
              <Text
                style={{
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.04,
                  color: Colors.darkblue,
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                Top Nearby
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
              <View
                style={{
                  paddingRight: fixedWidth * 8.0,
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
                    alignItems: "flex-end",
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
                    Location
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
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.darkblue,
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Sleman, Yogyakarta
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
                      name={"chevron-down"}
                      color={Colors.blue}
                      style={{
                        width: fixedWidth * 17.0,
                        height: fixedWidth * 17.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  padding: fixedWidth * 8,
                  backgroundColor: Colors.silver,
                  borderRadius: fixedWidth * 15,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"material"}
                  name={"my-location"}
                  color={Colors.blue}
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
          <FlatGrid
            itemDimension={395.4}
            showsVerticalScrollIndicator={false}
            spacing={18}
            data={[1, 2, 3, 4, 5]}
            style={{ flex: 1 }}
            renderItem={({ index, item }) => (
              <View
                style={{
                  width: "100.00%",
                  height: fixedWidth * 150.0,
                  borderRadius: fixedWidth * 16,
                  borderWidth: 1,
                  borderColor: Colors.silver,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ImageBackground
                  source={require("_assets/hotelia/hotel3.png")}
                  imageStyle={{
                    width: "100%",
                    borderBottomLeftRadius: 14,
                    borderTopLeftRadius: 14,
                    resizeMode: "cover",
                  }}
                  style={{
                    width: fixedWidth * 150.0,
                    height: "100.00%",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderBottomLeftRadius: 14,
                    borderTopLeftRadius: 14,
                  }}
                >
                  <View
                    style={{
                      width: "100.00%",
                      paddingTop: fixedWidth * 10.0,
                      paddingBottom: fixedWidth * 4.0,
                      paddingLeft: fixedWidth * 10.0,
                      paddingRight: fixedWidth * 10.0,
                      borderRadius: fixedWidth * 0,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        paddingTop: fixedWidth * 6.0,
                        paddingBottom: fixedWidth * 6.0,
                        paddingLeft: fixedWidth * 8.0,
                        paddingRight: fixedWidth * 8.0,
                        elevation: 1,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.2,
                        backgroundColor: Colors.modelbgtransparent,
                        borderRadius: fixedWidth * 6,
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
                          marginRight: fixedWidth * 4.0,
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
                            width: fixedWidth * 16.0,
                            height: fixedWidth * 16.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </TouchableOpacity>
                      <Text
                        style={{
                          textTransform: "none",
                          fontSize: ScreenWidth * 0.03,
                          color: Colors.white,
                          fontWeight: "normal",
                          textAlign: "left",
                        }}
                      >
                        4.8
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View
                  style={{
                    width: "50.00%",
                    marginLeft: fixedWidth * 12.0,
                    marginRight: fixedWidth * 12.0,
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
                      paddingTop: fixedWidth * 10.0,
                      paddingBottom: fixedWidth * 10.0,
                      borderRadius: fixedWidth * 0,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.silver,
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
                        color: Colors.darkblue,
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                    >
                      Keraton Villa
                    </Text>
                    <View
                      style={{
                        width: "100.00%",
                        paddingTop: fixedWidth * 4.0,
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
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          type={"fontisto"}
                          name={"map-marker-alt"}
                          color={Colors.primary}
                          style={{
                            width: fixedWidth * 13.0,
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></Icon>
                      </View>
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
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          Slemon, DYY
                        </Text>
                      </View>
                    </View>
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
                          color: Colors.textgrey,
                          fontWeight: "normal",
                          textAlign: "left",
                          lineHeight: 20,
                          textDecorationLine: "line-through",
                        }}
                      >
                        $225
                      </Text>
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
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.04,
                            color: Colors.darkblue,
                            fontWeight: "700",
                            textAlign: "left",
                          }}
                        >
                          $125
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
                          /NIGHT
                        </Text>
                      </View>
                    </View>
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
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          width: fixedWidth * 35.0,
                          height: fixedWidth * 35.0,
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
              </View>
            )}
          />
          <View
            style={{
              width: "100.00%",
              marginBottom: fixedWidth * 6.0,
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
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: fixedWidth * 8.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={"simple-line-icon"}
                  name={"graph"}
                  color={Colors.primary}
                  style={{
                    width: fixedWidth * 26.0,
                    height: fixedWidth * 26.0,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Icon>
              </TouchableOpacity>
              <Text
                style={{
                  textTransform: "none",
                  fontSize: ScreenWidth * 0.04,
                  color: Colors.darkblue,
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                Insight for You
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
              height: fixedWidth * 360.0,
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
              itemDimension={395.6}
              showsVerticalScrollIndicator={false}
              spacing={18}
              data={[1, 2, 3, 4, 5]}
              style={{ flex: 1 }}
              renderItem={({ index, item }) => (
                <View
                  style={{
                    width: fixedWidth * 270.0,
                    height: fixedWidth * 280.0,
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
                      height: fixedWidth * 130.0,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      resizeMode={"cover"}
                      source={require("_assets/hotelia/hotel4.png")}
                      style={{
                        width: "100.00%",
                        height: "100.00%",
                        borderTopLeftRadius: fixedWidth * 16,
                        borderTopRightRadius: fixedWidth * 16,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "100.00%",
                      paddingVertical: fixedWidth * 10.0,
                      paddingHorizontal: fixedWidth * 10.0,
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
                        marginBottom: fixedWidth * 10,
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
                          paddingVertical: fixedWidth * 4.0,
                          paddingHorizontal: fixedWidth * 6.0,
                          backgroundColor: Colors.lightgray,
                          borderRadius: fixedWidth * 8,
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
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.green,
                            fontWeight: "normal",
                            textAlign: "center",
                          }}
                        >
                          MODERN
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100.00%",
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
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={{
                          textTransform: "none",
                          fontSize: ScreenWidth * 0.04,
                          color: Colors.darkblue,
                          fontWeight: "700",
                          textAlign: "left",
                        }}
                      >
                        10 Hotels in Yogyakarta that{`\n`}provide Netflix
                        services
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "100.00%",
                        // marginBottom: fixedWidth * 5.0,
                        paddingTop: fixedWidth * 12.0,
                        borderRadius: fixedWidth * 0,
                        borderTopWidth: 1,
                        borderTopColor: Colors.lightgray,
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
                            marginRight: fixedWidth * 8.0,
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
                              marginRight: fixedWidth * 4.0,
                              borderRadius: fixedWidth * 0,
                              borderWidth: 0,
                              borderColor: Colors.white,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              type={"antdesign"}
                              name={"like1"}
                              color={Colors.textgrey}
                              style={{
                                width: fixedWidth * 18.0,
                                height: fixedWidth * 18.0,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            ></Icon>
                          </View>
                          <Text
                            style={{
                              textTransform: "none",
                              fontSize: ScreenWidth * 0.03,
                              color: Colors.darkblue,
                              fontWeight: "600",
                              textAlign: "left",
                            }}
                          >
                            25
                          </Text>
                        </View>
                        <View
                          style={{
                            marginLeft: fixedWidth * 8.0,
                            marginRight: fixedWidth * 8.0,
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
                              marginRight: fixedWidth * 4.0,
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
                              name={"message-text-outline"}
                              color={Colors.textgrey}
                              style={{
                                width: fixedWidth * 18.0,
                                height: fixedWidth * 18.0,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            ></Icon>
                          </View>
                          <Text
                            style={{
                              textTransform: "none",
                              fontSize: ScreenWidth * 0.03,
                              color: Colors.darkblue,
                              fontWeight: "600",
                              textAlign: "left",
                            }}
                          >
                            4
                          </Text>
                        </View>
                        <View
                          style={{
                            marginLeft: fixedWidth * 8.0,
                            marginRight: fixedWidth * 8.0,
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
                              marginRight: fixedWidth * 4.0,
                              borderRadius: fixedWidth * 0,
                              borderWidth: 0,
                              borderColor: Colors.white,
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Icon
                              type={"ionicon"}
                              name={"arrow-redo-sharp"}
                              color={Colors.textgrey}
                              style={{
                                width: fixedWidth * 18.0,
                                height: fixedWidth * 18.0,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            ></Icon>
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
                            width: fixedWidth * 35.0,
                            height: fixedWidth * 35.0,
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
                </View>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
