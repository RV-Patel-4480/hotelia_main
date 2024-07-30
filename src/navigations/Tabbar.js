import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
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

function Tabbar(props) {
  const { navigation, state, descriptors, route } = props;

  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const tabBarStyle = focusedOptions?.tabBarStyle || {};

  return (
    <View
      style={{
        width: "100.00%",
        backgroundColor: Colors.white,
        borderRadius: fixedWidth * 0,
        borderWidth: 0,
        borderColor: Colors.white,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...tabBarStyle,
      }}
    >
      <View
        style={{
          width: "100.00%",
          marginTop: fixedWidth * 10.0,
          marginBottom: fixedWidth * 10.0,
          paddingLeft: fixedWidth * 20.0,
          paddingRight: fixedWidth * 20.0,
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
            style={{
              marginBottom: fixedWidth * 2.0,
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
              name={"home"}
              color={state.index == 0 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: state.index == 0 ? Colors.blue : Colors.textgrey,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyOrders");
            }}
            style={{
              marginBottom: fixedWidth * 2.0,
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
              name={"ticket-confirmation"}
              color={state.index == 10 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Icon>
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: state.index == 10 ? Colors.blue : Colors.textgrey,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              My Trip
            </Text>
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FavoritesHotel");
            }}
            style={{
              marginBottom: fixedWidth * 2.0,
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
              name={"bookmark"}
              color={state.index == 11 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Icon>
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: state.index == 11 ? Colors.blue : Colors.textgrey,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Favorite
            </Text>
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.navigate("Profile1");
            }}
          >
            <Icon
              type={"font-awesome-5"}
              name={"user-alt"}
              color={state.index == 15 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Icon>
            <Text
              style={{
                textTransform: "none",
                fontSize: ScreenWidth * 0.04,
                color: state.index == 15 ? Colors.blue : Colors.textgrey,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Tabbar;
