import React, { Component } from "react";
import { SafeAreaView, AppRegistry, StatusBar, StyleSheet, Platform } from "react-native";

import AppContainer from "./src/navigations";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;

AppRegistry.registerComponent("App", App);
