import React, { Component, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import colors from "_styles/colors";
import { fixedWidth, ScreenWidth } from "_styles/dimension";

function RNGroupRadioButton(props) {
  const {
    options,
    value,
    outerCircleWidth,
    outerCircleSize,
    outerCircleColor,
    onSelectValue = () => {},
    containerStyle,
    innerCircleSize,
    innerCircleColor,
    optionTextStyle,
    required,
    style,
    title,
    titleStyle,
    errors,
    name,
    disabledAll,
  } = props;

  let messageError;
  if (errors?.[name]) {
    messageError = errors?.[name];
  }

  const [selected, setSelected] = useState(value || null);

  const onSelect = (value) => {
    setSelected(value);
    props?.onSelectValue && props?.onSelectValue(value);
  };

  if (options.length > 0) {
    return (
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: fixedWidth * 10,
          ...style,
        }}
      >
        {!!title && (
          <Text style={{ ...styles.title, ...titleStyle }}>
            {title}{" "}
            {!!required && <Text style={{ ...styles.errorText }}> *</Text>}
          </Text>
        )}
        {options.map((item, index) => {
          return (
            <TouchableOpacity
              disabled={disabledAll || item?.disabled || false}
              onPress={() => onSelect(item.value)}
              key={index}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingVertical: fixedWidth * 5,
                ...containerStyle,
              }}
            >
              <View
                style={[
                  {
                    height: outerCircleSize || 19,
                    width: outerCircleSize || 19,
                    borderRadius: outerCircleSize / 2 || 12,
                    borderWidth: outerCircleWidth || 2,
                    borderColor: outerCircleColor || "#9eacb4",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                {selected === item?.value ? (
                  <View
                    style={{
                      height: innerCircleSize || 10,
                      width: innerCircleSize || 10,
                      borderRadius: innerCircleSize / 2 || 6,
                      backgroundColor: innerCircleColor || "#9eacb4",
                    }}
                  />
                ) : null}
              </View>
              <Text
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  textAlignVertical: "center",
                  textAlign: "left",
                  color: colors.darkGrey,
                  fontSize: fixedWidth * 14,
                  paddingHorizontal: fixedWidth * 10,
                  ...optionTextStyle,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        {!!messageError && (
          <Text style={{ ...styles.labelContent }}>{messageError}</Text>
        )}
      </View>
    );
  } else {
    return false;
  }
}

RNGroupRadioButton.defaultProps = {
  options: [],
  value: "",
  errors: {},
  name: "",
  required: false,
  title: "",
  disabledAll: false,
};

const styles = StyleSheet.create({
  title: {
    width: "100%",
    fontSize: ScreenWidth * 0.033,
    color: colors.labelColor,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  errorText: {
    fontWeight: "700",
    color: colors.red,
  },
  labelContent: {
    color: colors.red,
    fontWeight: "500",
    fontSize: ScreenWidth * 0.033,
    textAlign: "left",
    width: "100%",
    justifyContent: "center",
    paddingTop: 2,
    paddingLeft: 2,
  },
});

export default RNGroupRadioButton;
