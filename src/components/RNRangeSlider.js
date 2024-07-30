import React, { useCallback, useState, memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "rn-range-slider";

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const RNRangeSlider = (props) => {
  const [rangeDisabled, setRangeDisabled] = useState(
    props?.rangeDisabled || false
  );
  const [min, setMin] = useState(props?.min || 0);
  const [max, setMax] = useState(props?.max || 100);
  const [value, setValue] = useState(props?.value || 100);

  const renderThumb = useCallback((name) => <Thumb name={name} />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue, highValue) => {
    setValue({ low: lowValue, high: highValue });
    props?.onValueChange &&
      props?.onValueChange({ low: lowValue, high: highValue });
  }, []);

  const Notch = memo((props) => {
    return <View style={[styles.notch, props?.notchStyle]} {...props} />;
  });

  const Thumb = memo(({ name }) => {
    return (
      <View
        style={
          name === "high"
            ? [styles.thumbHigh, props?.thumbHighStyle]
            : [styles.thumbLow, props?.thumbLowStyle]
        }
      />
    );
  });

  const Rail = memo(() => {
    return <View style={[styles.rail, props?.railStyle]} />;
  });
  const RailSelected = memo(() => {
    return <View style={[styles.railSelected, props?.railSelectedStyle]} />;
  });

  const Label = memo(({ text, ...restProps }) => {
    return (
      <View style={styles.label} {...restProps}>
        <Text style={styles.labelText}>{text}</Text>
      </View>
    );
  });

  let style = props?.style || {};
  delete style?.justifyContent;
  delete style?.alignContent;
  delete style?.alignItems;

  return (
    <Slider
      style={[styles.slider, style]}
      min={min}
      max={max}
      low={props?.value?.low}
      high={props?.value?.high}
      step={props?.step || 1}
      disableRange={rangeDisabled}
      // floatingLabel={floatingLabel}
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      renderLabel={renderLabel}
      renderNotch={renderNotch}
      onValueChanged={handleValueChange}
    />
  );
};

export default RNRangeSlider;

const styles = StyleSheet.create({
  slider: {
    width: 200,
  },
  thumbLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
    borderColor: "#7f7f7f",
    backgroundColor: "#aaaaaa",
  },
  thumbHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
    borderColor: "#7f7f7f",
    backgroundColor: "#ffffff",
  },
  notch: {
    width: 8,
    height: 8,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#4499ff",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
  rail: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#7f7f7f",
  },
  railSelected: {
    height: 4,
    backgroundColor: "#4499ff",
    borderRadius: 2,
  },
  label: {
    alignItems: "center",
    padding: 8,
    backgroundColor: "#4499ff",
    borderRadius: 4,
  },
  labelText: {
    fontSize: 16,
    color: "#fff",
  },
});
