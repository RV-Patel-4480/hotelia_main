import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "_components/Icon";

import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
import Colors from "_styles/colors";

function Navbar4(props) {
  const { route, navigation } = props;
  const navOption = props?.options?.navOption || "menu";
  const ScreenName = props?.options?.title || route?.name || "";

  return (
    <View
      style={{
        width: "100.00%",
        backgroundColor: Colors.white,
        paddingHorizontal: fixedWidth * 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100.00%",
          margin: fixedWidth * 15.0,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            width: fixedWidth * 60.0,
            height: fixedWidth * 40.0,
            borderRadius: fixedWidth * 15,
            borderWidth: 1,
            borderColor: Colors.grey,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            type={"antdesign"}
            name={"arrowleft"}
            color={Colors.sky}
            style={{
              width: fixedWidth * 25.0,
              height: fixedWidth * 25.0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Icon>
        </TouchableOpacity>
        <Text
          style={{
            textTransform: "none",
            fontSize: ScreenWidth * 0.06,
            marginLeft: fixedWidth * 10.0,
            color: Colors.black,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {ScreenName}
        </Text>
      </View>
    </View>
  );
}
export default Navbar4;
const styles = StyleSheet.create({});
