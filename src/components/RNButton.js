import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import { ScreenWidth, ScreenHeight, STATUSBAR_HEIGHT } from "_styles/dimension";
import colors from "_styles/colors";

const DEFAULT_RADIUS = 20;
const DEFAULT_MARGIN_TOP = 10;

function RNButton(props) {
  const STYLES = StyleSheet.create({
    defaultButtonStyle: {
      backgroundColor: props.transparent ? colors.transparent : colors.primary,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: props.width ? props.width : props.loading ? "100%" : "auto",
      paddingVertical: 5,
      marginTop: DEFAULT_MARGIN_TOP,
      marginBottom: 0,
      borderColor: props.transparent
        ? props.disabled
          ? colors.lightGrey
          : colors.primary
        : colors.transparent,
      borderWidth: props.transparent ? 1 : 0,
      borderRadius: DEFAULT_RADIUS,
      ...(props.disabled && { opacity: 0.8 }),
    },
  });

  if (props.loading) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={props.disabled ? 0.8 : props.opacity}
        disabled={props.disabled}
        style={[STYLES.defaultButtonStyle, props.style]}
      >
        {props.IconProps && !props.isIconRight && props.loading && (
          <View style={{ paddingHorizontal: 10 }}>
            <ActivityIndicator
              size="small"
              color={props.transparent ? colors.primary : colors.white}
            />
          </View>
        )}
        <Text
          style={[
            {
              fontSize: 0.04 * ScreenWidth,
              textAlignVertical: "center",
              fontWeight: "600",
              color: props.transparent ? colors.primary : colors.white,
              paddingVertical: 5,
              paddingHorizontal: 10,
            },
            props.textStyle,
          ]}
        >
          {props.loadingText || props.name}
        </Text>
        {props.loading &&
        (props.IconProps == undefined || props.isIconRight) ? (
          <ActivityIndicator
            size="small"
            color={
              props.transparent
                ? props.disabled
                  ? colors.lightGrey
                  : colors.primary
                : colors.white
            }
          />
        ) : null}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={props.disabled ? 0.8 : props.opacity}
        disabled={props.disabled}
        style={[
          STYLES.defaultButtonStyle,
          props.style,
          props.disabled && props.disabledStyle,
        ]}
      >
        {props.IconProps && !props.isIconRight && props.IconProps()}
        <Text
          style={[
            {
              width: !!props.IconProps ? "auto" : "100%",
              fontSize: 0.032 * ScreenWidth,
              textAlignVertical: "center",
              fontWeight: "600",
              color: props.transparent
                ? props.disabled
                  ? colors.lightGrey
                  : colors.primary
                : colors.white,
              paddingVertical: 5,
              paddingHorizontal: 10,
              textAlign: "center",
            },
            props.textStyle,
          ]}
        >
          {props.name}
        </Text>
        {props.IconProps && props.isIconRight && props.IconProps()}
      </TouchableOpacity>
    );
  }
}

RNButton.defaultProps = {
  name: "Button",
};

export default RNButton;
