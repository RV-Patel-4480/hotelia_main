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

export default class HotelContactDetails extends Component {
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
              <View
                style={{
                  width: "35.00%",
                  height: "20.00%",
                  backgroundColor: Colors.bluebgcolor,
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
                  backgroundColor: Colors.white,
                  borderRadius: fixedWidth * 100,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <View
                style={{
                  width: "35.00%",
                  height: "20.00%",
                  backgroundColor: Colors.bluebgcolor,
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
                  backgroundColor: Colors.white,
                  borderRadius: fixedWidth * 100,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
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
                  color: Colors.textgrey,
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
              borderColor: Colors.white,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 10.0,
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
                  ...styles.blackText,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  fontWeight: "800",
                }}
              >
                Booking Details
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 10.0,
                marginBottom: fixedWidth * 10.0,
                borderRadius: fixedWidth * 15,
                borderWidth: 1,
                borderColor: Colors.silver,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  paddingLeft: fixedWidth * 5.0,
                  paddingRight: fixedWidth * 5.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: fixedWidth * 100.0,
                    height: fixedWidth * 100.0,
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
                    style={{ width: "100.00%", height: "100.00%" }}
                  />
                </View>
                <View
                  style={{
                    width: "65.00%",
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
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        ...styles.blueText,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        fontWeight: "800",
                      }}
                    >
                      Hyatt Regency
                    </Text>
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
                        type={"material-community"}
                        name={"pencil"}
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
                  <Text
                    style={{
                      textTransform: "none",
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.textgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                    }}
                  >
                    Superior Twin bed
                  </Text>
                  <View
                    style={{
                      width: "100.00%",
                      marginTop: fixedWidth * 10.0,
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
                        marginBottom: fixedWidth * 5.0,
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
                          width: "30.00%",
                          marginRight: fixedWidth * 10.0,
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
                            type={"font-awesome-5"}
                            name={"user-alt"}
                            color={Colors.primary}
                            style={{
                              width: fixedWidth * 12.0,
                              height: fixedWidth * 12.0,
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            marginLeft: fixedWidth * 10.0,
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
                          width: "40.00%",
                          marginLeft: fixedWidth * 10.0,
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
                            name={"bed-king-outline"}
                            color={Colors.primary}
                            style={{
                              width: fixedWidth * 12.0,
                              height: fixedWidth * 12.0,
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            marginLeft: fixedWidth * 10.0,
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
                          width: "30.00%",
                          marginRight: fixedWidth * 10.0,
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
                            name={"bed-king-outline"}
                            color={Colors.primary}
                            style={{
                              width: fixedWidth * 12.0,
                              height: fixedWidth * 12.0,
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            marginLeft: fixedWidth * 10.0,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          2 Room
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "60.00%",
                          marginLeft: fixedWidth * 10.0,
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
                            type={"font-awesome-5"}
                            name={"utensils"}
                            color={Colors.primary}
                            style={{
                              width: fixedWidth * 12.0,
                              height: fixedWidth * 12.0,
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          ></Icon>
                        </TouchableOpacity>
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            marginLeft: fixedWidth * 8.0,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          Breakfast Included
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 8.0,
                  paddingBottom: fixedWidth * 8.0,
                  paddingLeft: fixedWidth * 20.0,
                  paddingRight: fixedWidth * 20.0,
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.darkgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                    }}
                  >
                    Check in
                  </Text>
                  <Text
                    style={{
                      ...styles.blackText,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      fontSize: ScreenWidth * 0.03808,
                    }}
                  >
                    Fri 7 Oct 2022
                  </Text>
                </View>
                <View
                  style={{
                    width: "15.00%",
                    borderRadius: fixedWidth * 20,
                    borderWidth: 1,
                    borderColor: Colors.silver,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: "15.00%",
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
                      type={"material-community"}
                      name={"moon-waning-crescent"}
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
                  <Text
                    style={{
                      ...styles.blackText,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      fontSize: ScreenWidth * 0.03808,
                    }}
                  >
                    2
                  </Text>
                </View>
                <View
                  style={{
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
                      fontSize: ScreenWidth * 0.03,
                      color: Colors.darkgrey,
                      fontWeight: "normal",
                      textAlign: "left",
                    }}
                  >
                    Check in
                  </Text>
                  <Text
                    style={{
                      ...styles.blackText,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      fontSize: ScreenWidth * 0.03808,
                    }}
                  >
                    Fri 9 Oct 2022
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingLeft: fixedWidth * 20.0,
              paddingRight: fixedWidth * 20.0,
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
                marginTop: fixedWidth * 10.0,
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
                  ...styles.blackText,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  fontWeight: "800",
                }}
              >
                Contact Details
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 10.0,
                marginBottom: fixedWidth * 10.0,
                borderRadius: fixedWidth * 15,
                borderWidth: 1,
                borderColor: Colors.silver,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "100.00%",
                  paddingTop: fixedWidth * 5.0,
                  paddingBottom: fixedWidth * 5.0,
                  paddingLeft: fixedWidth * 15.0,
                  paddingRight: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
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
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        ...styles.blueText,
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                      }}
                    >
                      Bruce Wayne
                    </Text>
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
                        type={"material-community"}
                        name={"pencil"}
                        color={Colors.blue}
                        style={{
                          width: fixedWidth * 25.0,
                          height: fixedWidth * 25.0,
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
                      marginTop: fixedWidth * 10.0,
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
                        marginBottom: fixedWidth * 5.0,
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
                          width: "100.00%",
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
                            width: "8.00%",
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
                            name={"envelope"}
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
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          wayneenterprise@mail.com
                        </Text>
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
                        justifyContent: "flex-start",
                      }}
                    >
                      <View
                        style={{
                          width: "100.00%",
                          marginTop: fixedWidth * 3.0,
                          marginRight: fixedWidth * 10.0,
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
                            width: "8.00%",
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
                            name={"phone"}
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
                        <Text
                          style={{
                            textTransform: "none",
                            fontSize: ScreenWidth * 0.03,
                            color: Colors.textgrey,
                            fontWeight: "normal",
                            textAlign: "left",
                          }}
                        >
                          +628123223922
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100.00%",
              paddingLeft: fixedWidth * 20.0,
              paddingRight: fixedWidth * 20.0,
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
                marginTop: fixedWidth * 10.0,
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
                  ...styles.blackText,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  fontWeight: "800",
                }}
              >
                Request
              </Text>
            </View>
            <View
              style={{
                width: "100.00%",
                marginTop: fixedWidth * 10.0,
                marginBottom: fixedWidth * 10.0,
                paddingLeft: fixedWidth * 15.0,
                paddingRight: fixedWidth * 15.0,
                borderRadius: fixedWidth * 15,
                borderWidth: 1,
                borderColor: Colors.silver,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "100.00%",
                  marginTop: fixedWidth * 15.0,
                  marginBottom: fixedWidth * 15.0,
                  borderRadius: fixedWidth * 0,
                  borderWidth: 0,
                  borderColor: Colors.white,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    width: "8.00%",
                    borderRadius: fixedWidth * 0,
                    borderWidth: 0,
                    borderColor: Colors.white,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={"material-community"}
                    name={"clipboard-edit"}
                    color={Colors.primary}
                    style={{
                      width: fixedWidth * 25.0,
                      height: fixedWidth * 25.0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  ></Icon>
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.blueText,
                    width: "78.00%",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  Add Special Request
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("HotelSpecialRequest");
                  }}
                  style={{
                    width: "8.00%",
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
                    name={"plus"}
                    color={Colors.blue}
                    style={{
                      width: fixedWidth * 25.0,
                      height: fixedWidth * 25.0,
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  ></Icon>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
                    fontSize: ScreenWidth * 0.03,
                    color: Colors.textgrey,
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  SUBTOTAL
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
                style={{
                  ...styles.button,
                  paddingTop: fixedWidth * 12.0,
                  paddingBottom: fixedWidth * 12.0,
                }}
                onPress={() => {
                  navigation.navigate("HotelPaymentDetail");
                }}
              ></RNButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
