import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import Colors from "_styles/colors";
import { ScreenWidth, ScreenHeight, STATUSBAR_HEIGHT } from "_styles/dimension";

function RNDatePicker(props) {
  let {
    errors,
    title,
    name,
    disabledColor,
    required,
    dateFormat = "DD-MM-YYYY",
    placeholder,
    value,
    onChange,
    disabled,
    placeholderTextColor,
    mode,
    backgroundColor,
  } = props;
  let messageError;

  if (errors?.[name]) {
    messageError = errors?.[name];
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    onChange?.(date || "");
    hideDatePicker();
  };

  let TextColor = value
    ? Colors.transparentBG5
    : placeholderTextColor
    ? placeholderTextColor
    : Colors.black;
  let bgColor = value
    ? backgroundColor
      ? backgroundColor
      : Colors.white
    : disabledColor
    ? disabledColor
    : Colors.white;

  return (
    <View
      style={{
        ...styles.inputMainContainer,
        backgroundColor: bgColor,
        ...props.mainContainerStyle,
      }}
    >
      {title && (
        <Text style={{ ...styles.title, ...props.titleStyle }}>
          {title} {required && <Text style={{ ...styles.errorText }}> *</Text>}
        </Text>
      )}
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          showDatePicker(true);
        }}
        style={{ ...styles.inputContainer, ...props.containerStyle }}
      >
        <Text
          style={{
            width: "100%",
            color: TextColor,
            fontSize: ScreenWidth * 0.035,
            fontWeight: "500",
          }}
        >
          {value || placeholder || "DD-MM-YYYY"}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={
          value
            ? new Date(
                moment(value, "DD-MM-YYYY").format("YYYY-MM-DDTHH:MM:SS")
              )
            : new Date()
        }
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {messageError && (
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
    fontWeight: "400",
    textTransform: "capitalize",
  },
  inputMainContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.transparentBG2,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
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

export default RNDatePicker;
