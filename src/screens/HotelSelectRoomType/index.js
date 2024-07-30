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

export default class HotelSelectRoomType extends Component {
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
        <FlatGrid
          itemDimension={395.2}
          showsVerticalScrollIndicator={false}
          spacing={18}
          data={[1, 2, 3, 4, 5]}
          style={{ flex: 1 }}
          renderItem={({ index, item }) => (
            <View
              style={{
                width: "100.00%",
                height: fixedWidth * 160.0,
                elevation: 1,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                backgroundColor: "#ffffff",
                borderRadius: fixedWidth * 12,
                borderWidth: 1,
                borderColor: Colors.primary,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: fixedWidth * 150.0,
                  height: "100.00%",
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  resizeMode={"cover"}
                  source={require("_assets/hotelia/SuperiorTwinBed.png")}
                  style={{
                    width: "100.00%",
                    height: "100.00%",
                    borderBottomLeftRadius: 8,
                    borderTopLeftRadius: 8,
                  }}
                />
              </View>
              <View
                style={{
                  width: "55.00%",
                  paddingTop: fixedWidth * 10.0,
                  paddingBottom: fixedWidth * 10.0,
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
                    marginTop: fixedWidth * 2.0,
                    marginBottom: fixedWidth * 6.0,
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
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                  >
                    Superior Twin Bed
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
                      type={"entypo"}
                      name={"chevron-small-down"}
                      color={Colors.blue}
                      style={{
                        width: fixedWidth * 24.0,
                        height: fixedWidth * 24.0,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></Icon>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 2.0,
                    marginBottom: fixedWidth * 2.0,
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
                        paddingRight: fixedWidth * 6.0,
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
                          paddingRight: fixedWidth * 2.0,
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
                          name={"user"}
                          color={Colors.textgrey}
                          style={{
                            width: fixedWidth * 14.0,
                            height: fixedWidth * 14.0,
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
                          color: Colors.textgrey,
                          fontWeight: "normal",
                          textAlign: "left",
                        }}
                      >
                        2 Guest
                      </Text>
                    </View>
                    <View
                      style={{
                        paddingLeft: fixedWidth * 6.0,
                        paddingRight: fixedWidth * 4.0,
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
                          paddingLeft: fixedWidth * 4.0,
                          paddingRight: fixedWidth * 4.0,
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
                          name={"car"}
                          color={Colors.textgrey}
                          style={{
                            width: fixedWidth * 14.0,
                            height: fixedWidth * 14.0,
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
                          color: Colors.textgrey,
                          fontWeight: "normal",
                          textAlign: "left",
                        }}
                      >
                        Twin Bed
                      </Text>
                    </View>
                  </View>
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
                        paddingRight: fixedWidth * 2.0,
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
                        name={"restaurant"}
                        color={Colors.textgrey}
                        style={{
                          width: fixedWidth * 16.0,
                          height: fixedWidth * 16.0,
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
                        color: Colors.textgrey,
                        fontWeight: "normal",
                        textAlign: "left",
                      }}
                    >
                      Breakfast Included
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    marginTop: fixedWidth * 6.0,
                    marginBottom: fixedWidth * 2.0,
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
                          color: Colors.blue,
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
                          paddingLeft: fixedWidth * 5.0,
                          paddingRight: fixedWidth * 2.0,
                          color: Colors.textgrey,
                          fontWeight: "normal",
                          textAlign: "left",
                        }}
                      >
                        /night
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.red,
                      fontWeight: "normal",
                      textAlign: "left",
                    }}
                  >
                    12 rooms Left
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
        <View
          style={{
            width: "100.00%",
            height: "12.00%",
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
                PRICE
              </Text>
              <View
                style={{
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                }}
              >
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
                <Text
                  style={{
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.03,
                    marginLeft: fixedWidth * 5.0,
                    color: Colors.textgrey,
                    fontWeight: "600",
                    textAlign: "left",
                    textDecorationLine: "line-through",
                  }}
                >
                  $225
                </Text>
              </View>
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
                  navigation.navigate("HotelContactDetails");
                }}
              ></RNButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
