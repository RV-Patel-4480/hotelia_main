import React, { Component, useEffect } from "react";
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
  StatusBar,
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
import colors from "_styles/colors";

export default class SplashScreen extends Component {
  static contextType = AuthContext;
  state = {};
  
  componentDidMount() {
    // Hide status bar when component mounts
    StatusBar.setHidden(true, 'fade');
  }

  componentWillUnmount() {
    // Ensure status bar is visible when component unmounts
    StatusBar.setHidden(false, 'fade');
  }
  render() {
    const navigation = this.props.navigation;
    
    return (
      <View
        style={{
          width: "100.00%",
          height: "100%",
          backgroundColor: Colors.primary,
          borderRadius: fixedWidth * 0,
          borderWidth: 0,
          borderColor: Colors.white,
          // flexDirection: "column",
          alignItems: "center",
         // justifyContent: "center",
        }}
      >
        <View style={{
          width: "60%",
          height: "50%",
          backgroundColor: colors.darkprimary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
          // padding: 
        }}>

        <Image
          resizeMode={"contain"}
          source={require("_assets/hotelia/Logo.png")}
          style={{ width: 500, height: 500}}
        />
        </View>
        <Text style={{color:"white" , fontSize:58 , fontWeight:"bold"}}>Hotilo</Text>
        <Text style={{color:"white" , fontSize:20 , fontWeight:"bold"}}>Easy Hotel Booking </Text>
      </View>
    );
  }
}
