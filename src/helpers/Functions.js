import React, { Component } from "react";
import { Dimensions, Platform } from "react-native";

class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ColorCode: null,
    };
  }

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
}
const functions = new Functions();
export default functions;
