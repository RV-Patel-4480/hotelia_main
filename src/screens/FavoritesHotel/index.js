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

export default class FavoritesHotel extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          paddingTop: fixedWidth * 2.0,
          backgroundColor: Colors.lightgray,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "100.00%",
            backgroundColor: Colors.white,
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
              width: "50.00%",
              paddingTop: fixedWidth * 12.0,
              paddingBottom: fixedWidth * 12.0,
              borderRadius: fixedWidth * 0,
              borderBottomWidth: 3,
              borderBottomColor: Colors.blue,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                width: "100.00%",
                textTransform: "none",
                fontSize: ScreenWidth * 0.05,
                color: Colors.darkblue,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Hotel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FavoritesArticle");
            }}
            style={{
              width: "50.00%",
              paddingTop: fixedWidth * 12.0,
              paddingBottom: fixedWidth * 12.0,
              borderRadius: fixedWidth * 0,
              borderBottomWidth: 1,
              borderBottomColor: Colors.textgrey,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                width: "100.00%",
                textTransform: "none",
                fontSize: ScreenWidth * 0.05,
                color: Colors.textgrey,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Article
            </Text>
          </TouchableOpacity>
        </View>
        <FlatGrid
          itemDimension={395.2}
          showsVerticalScrollIndicator={false}
          spacing={16}
          data={[1, 2]}
          style={{ flex: 1 }}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MapExploration1");
              }}
              style={{
                width: "100.00%",
                height: fixedWidth * 138.0,
                backgroundColor: Colors.white,
                borderRadius: fixedWidth * 10,
                borderWidth: 1,
                borderColor: Colors.silver,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "40.00%",
                  height: "100.00%",
                  borderBottomLeftRadius: fixedWidth * 10,
                  borderTopLeftRadius: fixedWidth * 10,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ImageBackground
                  source={require("_assets/hotelia/hotel3.png")}
                  imageStyle={{
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                    resizeMode: "cover",
                  }}
                  style={{
                    width: "100.00%",
                    height: "100.00%",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <View
                    style={{
                      width: "100.00%",
                      paddingTop: fixedWidth * 12.0,
                      paddingBottom: fixedWidth * 12.0,
                      paddingLeft: fixedWidth * 12.0,
                      paddingRight: fixedWidth * 12.0,
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
                        paddingTop: fixedWidth * 4.0,
                        paddingBottom: fixedWidth * 4.0,
                        paddingLeft: fixedWidth * 8.0,
                        paddingRight: fixedWidth * 8.0,
                        elevation: 1,
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.2,
                        backgroundColor: Colors.transparent,
                        borderRadius: fixedWidth * 5,
                        borderWidth: 1,
                        borderColor: Colors.transparent,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {}}
                        style={{
                          marginRight: fixedWidth * 3.0,
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
                          name={"star"}
                          color={Colors.primary}
                          style={{
                            width: fixedWidth * 18.0,
                            height: fixedWidth * 18.0,
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        ></Icon>
                      </TouchableOpacity>
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
                            width: "100.00%",
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.04,
                            color: Colors.white,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          4.8
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  width: "60.00%",
                  paddingLeft: fixedWidth * 12.0,
                  paddingRight: fixedWidth * 12.0,
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
                    height: "50.00%",
                    paddingTop: fixedWidth * 4.0,
                    paddingBottom: fixedWidth * 8.0,
                    borderRadius: fixedWidth * 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.lightgray,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <View
                    style={{
                      width: "100.00%",
                      marginBottom: fixedWidth * 5.0,
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
                        width: "100.00%",
                        textTransform: "none",
                        fontSize: ScreenWidth * 0.05,
                        color: Colors.darkblue,
                        fontWeight: "500",
                        textAlign: "left",
                      }}
                    >
                      Keraton Villa
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100.00%",
                      borderRadius: fixedWidth * 0,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        width: "10.00%",
                        borderRadius: fixedWidth * 0,
                        borderWidth: 0,
                        borderColor: Colors.white,
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Icon
                        type={"entypo"}
                        name={"location-pin"}
                        color={Colors.primary}
                        style={{
                          width: fixedWidth * 18.0,
                          height: fixedWidth * 18.0,
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      ></Icon>
                    </View>
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
                          width: "100.00%",
                          textTransform: "none",
                          fontSize: ScreenWidth * 0.03,
                          color: Colors.textgrey,
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        Sleman,DIY
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    paddingTop: fixedWidth * 8.0,
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
                      width: "70.00%",
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
                        marginBottom: fixedWidth * 2.0,
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
                          width: "100.00%",
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
                    </View>
                    <View
                      style={{
                        width: "100.00%",
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
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        /NIGHT
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "30.00%",
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
                        paddingTop: fixedWidth * 10.0,
                        paddingBottom: fixedWidth * 10.0,
                        paddingLeft: fixedWidth * 10.0,
                        paddingRight: fixedWidth * 10.0,
                        backgroundColor: Colors.lightpink,
                        borderRadius: fixedWidth * 8,
                        borderWidth: 0,
                        borderColor: Colors.white,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        type={"antdesign"}
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
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
