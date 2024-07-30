import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import colors from "_styles/colors";
import { fixedWidth } from "_styles/dimension";

export default class RNRadioButton extends Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={() => {
          this.props?.onPress && this.props?.onPress(this.props.value);
        }}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 0,
          ...this.props.style,
        }}
      >
        <View
          style={[
            {
              height: this.props.outerCircleSize || 19,
              width: this.props.outerCircleSize || 19,
              borderRadius: this.props.outerCircleSize / 2 || 12,
              borderWidth: this.props.outerCircleWidth || 2,
              borderColor: this.props.outerCircleColor || "#9eacb4",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          {this.props.value === this.props.selectedValue && (
            <View
              style={{
                height: this.props.innerCircleSize || 10,
                width: this.props.innerCircleSize || 10,
                borderRadius: this.props.innerCircleSize / 2 || 6,
                backgroundColor: this.props.innerCircleColor || "#9eacb4",
              }}
            />
          )}
        </View>
        {this.props.children ? (
          this.props.children
        ) : (
          <Text
            style={{
              flex: 1,
              justifyContent: "flex-start",
              textAlignVertical: "center",
              textAlign: "left",
              color: colors.darkGrey,
              fontSize: fixedWidth * 14,
              paddingHorizontal: fixedWidth * 10,
              ...this.props.optionTextStyle,
            }}
          >
            {this.props.name}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

RNRadioButton.defaultProps = {
  value: "",
  errors: {},
  name: "",
  required: false,
};
