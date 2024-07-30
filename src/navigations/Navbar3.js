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

function Navbar3(props) {
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
          marginTop: fixedWidth * 15.0,
          marginBottom: fixedWidth * 15.0,
          color: Colors.black,
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        {ScreenName}
      </Text>
    </View>
  );
}
export default Navbar3;
const styles = StyleSheet.create({});
