import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text, Platform } from "react-native";
import Colors from "_styles/colors";

import { ScreenWidth, ScreenHeight, STATUSBAR_HEIGHT } from "_styles/dimension";

function RNTextInput(props) {
  let {
    title,
    name,
    disabledColor,
    required,
    placeholder,
    value,
    placeholderTextColor,
    editable,
    containerStyle,
    style,
    titleStyle,
    disabledStyle,
    inputStyle,
    onChange,
    inputProps,
    errors,
  } = props;
  let messageError;

  if (errors?.[name]) {
    messageError = errors?.[name];
  }

  let numberOfLines = props?.numberOfLines || 0;
  let multiline = props?.multiline || false;

  const [text, setText] = useState(value || "");
  useEffect(() => {
    onChange && onChange(text);
  }, [text]);
  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <View style={{ ...styles.inputMainContainer, ...style }}>
      {!!title && (
        <Text style={{ ...styles.title, ...titleStyle }}>
          {title}{" "}
          {!!required && <Text style={{ ...styles.errorText }}> *</Text>}
        </Text>
      )}
      <View
        style={{
          ...styles.inputContainer,
          ...containerStyle,
          ...(editable == false && {
            ...disabledStyle,
            backgroundColor: !!disabledColor
              ? disabledColor
              : Colors.transparentBG1,
          }),
        }}
      >
        <TextInput
          style={{ ...styles.inputStyle, ...inputStyle }}
          value={text}
          onChangeText={setText}
          placeholder={placeholder || title || ""}
          placeholderTextColor={placeholderTextColor || Colors.lightGrey}
          {...inputProps}
          editable={editable}
          numberOfLines={
            multiline ? (Platform.OS === "ios" ? null : numberOfLines) : 1
          }
          minHeight={
            multiline
              ? Platform.OS === "ios" && numberOfLines
                ? 20 * numberOfLines
                : null
              : 1
          }
        />
      </View>
      {!!messageError && (
        <Text style={{ ...styles.labelContent }}>{messageError}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: "100%",
    fontSize: ScreenWidth * 0.033,
    color: Colors.labelColor,
    fontWeight: "700",
  },
  inputMainContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 0,
    //borderBottomWidth: 0,
    //borderBottomColor: Colors.inputBorderColor
  },
  inputStyle: {
    width: "100%",
    fontSize: ScreenWidth * 0.04,
    color: Colors.inputTextColor,
    paddingVertical: 0,
  },
  errorText: {
    fontWeight: "700",
    color: Colors.red,
  },
  labelContent: {
    color: Colors.red,
    fontWeight: "500",
    fontSize: ScreenWidth * 0.033,
    textAlign: "left",
    width: "100%",
    justifyContent: "center",
    paddingTop: 2,
    paddingLeft: 2,
  },
});

RNTextInput.defaultProps = {
  value: "",
  errors: {},
  name: "",
  required: false,
  multiline: false,
  editable: true,
  numberOfLines: 0,
  title: "",
  disabledColor: "#9c9c9c",
};

export default RNTextInput;
