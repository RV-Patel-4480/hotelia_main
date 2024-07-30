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

export default class Profile1 extends Component {
  static contextType = AuthContext;
  state = {};

  SignOut = async () => {
    const { signOut } = this.context;
    return signOut();
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          paddingTop: fixedWidth * 30.0,
          paddingLeft: fixedWidth * 20.0,
          paddingRight: fixedWidth * 20.0,
          backgroundColor: Colors.white,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
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
              marginBottom: fixedWidth * 16.0,
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
                width: fixedWidth * 120.0,
                height: fixedWidth * 120.0,
                borderRadius: fixedWidth * 100,
                borderWidth: 1,
                borderColor: Colors.lightgray,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode={"cover"}
                source={require("_assets/common/user_profile_round.png")}
                style={{
                  width: "83.00%",
                  height: "83.00%",
                  borderBottomLeftRadius: 100,
                  borderBottomRightRadius: 100,
                  borderTopLeftRadius: 100,
                  borderTopRightRadius: 100,
                }}
              />
            </TouchableOpacity>
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
                  width: "30.00%",
                  height: "21.00%",
                  position: "absolute",
                  bottom: fixedWidth * 22.0,
                  paddingLeft: fixedWidth * 30.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: fixedWidth * 40.0,
                    height: fixedWidth * 40.0,
                    backgroundColor: Colors.white,
                    borderRadius: fixedWidth * 100,
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
                      width: fixedWidth * 32.0,
                      height: fixedWidth * 32.0,
                      backgroundColor: Colors.blue,
                      borderRadius: fixedWidth * 100,
                      borderWidth: 0,
                      borderColor: Colors.white,
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      type={"octicon"}
                      name={"pencil"}
                      color={Colors.white}
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
                  paddingTop: fixedWidth * 8.0,
                  paddingBottom: fixedWidth * 8.0,
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
                    fontSize: ScreenWidth * 0.06,
                    color: Colors.darkblue,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Antony willam
                </Text>
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
                <Text
                  style={{
                    width: "100.00%",
                    textTransform: "none",
                    fontSize: ScreenWidth * 0.04,
                    color: Colors.textgrey,
                    fontWeight: "400",
                    textAlign: "center",
                  }}
                >
                  Antonywillam12@gmail.com
                </Text>
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
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfilePersonalInfo");
              }}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 20.0,
                paddingBottom: fixedWidth * 20.0,
                borderRadius: fixedWidth * 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.lightgray,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                  type={"font-awesome"}
                  name={"user"}
                  color={Colors.darkblue}
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
                    color: Colors.darkblue,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Personal info
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
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.darkblue}
                  style={{
                    width: fixedWidth * 16.0,
                    height: fixedWidth * 16.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfilePrivacySharing");
              }}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 20.0,
                paddingBottom: fixedWidth * 20.0,
                borderRadius: fixedWidth * 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.lightgray,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                  type={"material"}
                  name={"verified-user"}
                  color={Colors.darkblue}
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
                    color: Colors.darkblue,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Privacy & Sharing
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
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.darkblue}
                  style={{
                    width: fixedWidth * 16.0,
                    height: fixedWidth * 16.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileNotification");
              }}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 20.0,
                paddingBottom: fixedWidth * 20.0,
                borderRadius: fixedWidth * 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.lightgray,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                  type={"fontisto"}
                  name={"bell-alt"}
                  color={Colors.darkblue}
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
                    color: Colors.darkblue,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Notification
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
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.darkblue}
                  style={{
                    width: fixedWidth * 16.0,
                    height: fixedWidth * 16.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileMyReview");
              }}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 20.0,
                paddingBottom: fixedWidth * 20.0,
                borderRadius: fixedWidth * 0,
                borderBottomWidth: 1,
                borderBottomColor: Colors.lightgray,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
                  type={"ionicon"}
                  name={"chatbubble-ellipses"}
                  color={Colors.darkblue}
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
                    color: Colors.darkblue,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Review
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
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.darkblue}
                  style={{
                    width: fixedWidth * 16.0,
                    height: fixedWidth * 16.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.SignOut();
              }}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 20.0,
                paddingBottom: fixedWidth * 20.0,
                borderRadius: fixedWidth * 0,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
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
                  type={"material-community"}
                  name={"logout-variant"}
                  color={Colors.red}
                  style={{
                    width: fixedWidth * 20.0,
                    height: fixedWidth * 20.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </View>
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
                    color: Colors.red,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Log Out
                </Text>
              </View>
              <View
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
                  type={"font-awesome-5"}
                  name={"chevron-right"}
                  color={Colors.red}
                  style={{
                    width: fixedWidth * 16.0,
                    height: fixedWidth * 16.0,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                ></Icon>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
