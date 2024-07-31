import React, { Component } from "react";
import { SafeAreaView, AppRegistry, StatusBar, StyleSheet, Platform } from "react-native";

import AppContainer from "./src/navigations";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>
       <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
  },
});

export default App;

AppRegistry.registerComponent("App", App);
