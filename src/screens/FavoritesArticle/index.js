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

export default class FavoritesArticle extends Component {
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
            onPress={() => {
              navigation.navigate("FavoritesHotel");
            }}
            style={{
              width: "50.00%",
              paddingTop: fixedWidth * 12.0,
              paddingBottom: fixedWidth * 12.0,
              borderRadius: fixedWidth * 0,
              borderBottomWidth: 1,
              borderBottomColor: Colors.grey,
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
              Hotel
            </Text>
          </TouchableOpacity>
          <View
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
              Article
            </Text>
          </View>
        </View>
        <FlatGrid
          itemDimension={396}
          showsVerticalScrollIndicator={false}
          spacing={16}
          data={[1, 2, 3]}
          style={{ flex: 1 }}
          renderItem={({ index, item }) => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: "100.00%",
                // height: fixedWidth * 280.0,
                elevation: 2,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                backgroundColor: Colors.white,
                borderRadius: fixedWidth * 10,
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
                  borderTopLeftRadius: fixedWidth * 10,
                  borderTopRightRadius: fixedWidth * 10,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  resizeMode={"cover"}
                  source={require("_assets/hotelia/hotel6.png")}
                  style={{
                    width: "100.00%",
                    height: fixedWidth * 145.0,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
              </View>
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
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <View
                  style={{
                    width: "100.00%",
                    paddingTop: fixedWidth * 8.0,
                    paddingBottom: fixedWidth * 8.0,
                    borderRadius: fixedWidth * 0,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.lightgray,
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
                      fontWeight: "900",
                      textAlign: "left",
                      lineHeight: 21,
                    }}
                  >
                    10 Hotels in Yogyakarta that provide Netflix Service
                  </Text>
                </View>
                <View
                  style={{
                    width: "100.00%",
                    paddingTop: fixedWidth * 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: 'red'
                  }}
                >
                  <View
                    style={{
                      width: "60.00%",
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
                        width: "15.00%",
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
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      ></Icon>
                    </TouchableOpacity>
                    <View
                      style={{
                        width: "15.00%",
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
                          color: Colors.darkblue,
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        25
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        width: "15.00%",
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
                          width: fixedWidth * 20.0,
                          height: fixedWidth * 20.0,
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      ></Icon>
                    </TouchableOpacity>
                    <View
                      style={{
                        width: "15.00%",
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
                          color: Colors.darkblue,
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        25
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{
                        width: "15.00%",
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
                        name={"forward"}
                        color={Colors.textgrey}
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
                  <View
                    style={{
                      width: "40.00%",
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
