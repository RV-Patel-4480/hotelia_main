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
import MapView, { Marker } from "react-native-maps";
import RNTextInput from "_components/RNTextInput";
import Icon from "_components/Icon";

export default class MapExploration1 extends Component {
  static contextType = AuthContext;
  state = {};

  render() {
    const navigation = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <MapView
          zoomEnabled={true}
          showUserLocation={true}
          initialRegion={{
            latitude: 20.27,
            longitude: 77.78,
            latitudeDelta: 40,
            longitudeDelta: 0.000010,
          }}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          <Marker coordinate={{ latitude: 22.2741567, longitude: 70.7809511 }} title="Keraton Villa" />
          <Marker coordinate={{ latitude: 15.2841567, longitude: 75.7709511 }} title="Keraton Villa 2" />
          <Marker coordinate={{ latitude: 24.257, longitude: 78.7809511 }} title="Keraton Villa 3" />
          <Marker coordinate={{ latitude: 22.2241567, longitude: 80.7209511 }} title="Keraton Villa 4" />
        </MapView>

        <View
          style={{
            // width: "100.00%",
            marginHorizontal: fixedWidth * 0,
            paddingHorizontal: fixedWidth * 10,
            paddingVertical: fixedWidth * 4,
            backgroundColor: Colors.white,
            position: 'absolute',
            top: '3%',
            borderRadius: fixedWidth * 20,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
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
            <RNTextInput
              name={"valueKey"}
              value={this.state.valueKey}
              onChange={(valueKey) => {
                this.setState({ valueKey });
              }}
              required={false}
              placeholder={"Location"}
              placeholderTextColor={Colors.textgrey}
              editable={true}
              multiline={false}
              errors={this.state.errors || {}}
              disabledColor={Colors.primary}
              style={{
                width: "100.00%",
                paddingTop: fixedWidth * 10.0,
                paddingBottom: fixedWidth * 10.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></RNTextInput>
          </View>
          <View
            style={{
              width: fixedWidth * 32.0,
              height: fixedWidth * 32.0,
              backgroundColor: Colors.silver,
              borderRadius: fixedWidth * 5,
              borderWidth: 1,
              borderColor: Colors.grey,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              type={"font-awesome"}
              name={"search"}
              color={Colors.black}
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
        <View
          style={{
            width: "100.00%",
            position: 'absolute',
            bottom: '3%',
            height: fixedWidth * 190.0,
            paddingTop: fixedWidth * 22.0,
            backgroundColor: Colors.transparent,
            borderTopLeftRadius: fixedWidth * 20,
            borderTopRightRadius: fixedWidth * 20,
            borderWidth: 0,
            borderColor: Colors.white,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FlatGrid
            horizontal={true}
            itemDimension={395.7}
            showsVerticalScrollIndicator={false}
            spacing={18}
            data={[1, 2, 3, 4, 5]}
            style={{ flex: 1 }}
            renderItem={({ index, item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HotelDetails");
                }}
                style={{
                  width: ScreenWidth * 0.9,
                  height: fixedWidth * 140.0,
                  backgroundColor: 'white',
                  borderRadius: fixedWidth * 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ImageBackground
                  source={require("_assets/hotelia/hotel3.png")}
                  imageStyle={{
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: 12,
                    borderTopLeftRadius: 12,
                    resizeMode: "cover",
                  }}
                  style={{
                    width: fixedWidth * 150.0,
                    height: "100.00%",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    borderBottomLeftRadius: 12,
                    borderTopLeftRadius: 12,
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
                        elevation: 12,
                        shadowOffset: { width: 0, height: 6 },
                        shadowOpacity: 0.2,
                        backgroundColor: Colors.transparent,
                        borderRadius: fixedWidth * 10,
                        borderWidth: 1,
                        borderColor: Colors.transparent,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => { }}
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
                          marginBottom: fixedWidth * 3.0,
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
                        onPress={() => { }}
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
                          name={"hearto"}
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
      </View>

    );
  }
}
