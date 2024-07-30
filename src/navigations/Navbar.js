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

function Navbar(props) {
  const { route, navigation } = props;
  const navOption = props?.options?.navOption || "menu";
  const ScreenName = props?.options?.title || route?.name || "";

  return (
    <View
      style={{
        width: "100.00%",
        // height: 100,
        paddingLeft: fixedWidth * 20.0,
        paddingRight: fixedWidth * 20.0,
        paddingVertical: fixedWidth * 14,
        backgroundColor: Colors.blue,
        flexDirection: "row",
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: fixedWidth * 40.0,
            height: fixedWidth * 40.0,
            borderRadius: fixedWidth * 15,
            borderWidth: 1,
            borderColor: Colors.grey,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation?.goBack();
          }}
        >
          <Icon
            type={"antdesign"}
            name={"arrowleft"}
            color={Colors.white}
            style={{
              width: fixedWidth * 20.0,
              height: fixedWidth * 20.0,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Icon>
        </TouchableOpacity>
        <View
          style={{
            width: "85.00%",
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
              fontSize: ScreenWidth * 0.05,
              color: Colors.white,
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            {ScreenName}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Navbar;
const styles = StyleSheet.create({});
