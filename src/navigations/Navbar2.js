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

function Navbar2(props) {
  const { route, navigation } = props;
  const navOption = props?.options?.navOption || "menu";
  const ScreenName = props?.options?.title || route?.name || "";

  return (
    <View
      style={{
        width: "100.00%",
        backgroundColor: Colors.white,
        borderRadius: fixedWidth * 0,
        borderWidth: 0,
        borderColor: Colors.white,
        paddingHorizontal: fixedWidth * 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "100.00%",
          marginTop: fixedWidth * 15.0,
          marginBottom: fixedWidth * 15.0,
          marginLeft: fixedWidth * 15.0,
          marginRight: fixedWidth * 15.0,
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
            fontSize: ScreenWidth * 0.06,
            color: Colors.black,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {ScreenName}
        </Text>
        <View
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
            type={"entypo"}
            name={"open-book"}
            color={Colors.blue}
            style={{
              width: fixedWidth * 20.0,
              height: fixedWidth * 20.0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
export default Navbar2;
const styles = StyleSheet.create({});
