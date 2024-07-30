import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const RNProgressBar = ({
  progress = 0.7,
  animated = true,
  fillColor = "green",
  unfilledColor = "lightgreen",
  borderWidth = 0,
  borderColor = "#000000",
  borderRadius = 10,
  width = null,
  height = 15,
  duration = 500,
  style,
}) => {
  // Animate transform style prop so native driver can be used
  const translateXValue = useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = useState(0);

  const layoutHadler = useCallback(
    (event) => {
      if (width === null) {
        const { nativeEvent } = event;
        const layoutWidth = nativeEvent.layout.width;

        translateXValue.setValue(-Math.abs(layoutWidth));
        setContainerWidth(layoutWidth);
      }
    },
    [translateXValue, width]
  );

  useEffect(() => {
    if (width !== null) {
      translateXValue.setValue(-Math.abs(width));
      setContainerWidth(width);
    }
  }, [translateXValue, width]);

  useEffect(() => {
    let progressValue = progress;

    if (progressValue > 1) {
      progressValue = 1;
    } else if (progressValue < 0) {
      progressValue = 0;
    }

    if (!animated) {
      translateXValue.setValue(
        -Math.abs(containerWidth * progressValue - containerWidth)
      );
      return;
    }

    Animated.timing(translateXValue, {
      toValue: -Math.abs(containerWidth * progressValue - containerWidth),
      duration,
      easing: Easing.cubic,
      isInteraction: true,
      useNativeDriver: true,
    }).start();
  }, [translateXValue, containerWidth, progress, animated, duration]);

  return (
    <View
      style={{
        ...styles.container,
        ...(unfilledColor ? { backgroundColor: unfilledColor } : {}),
        ...(width ? { width } : {}),
        height,
        borderWidth,
        borderColor,
        borderRadius,
        ...style,
      }}
      onLayout={layoutHadler}
    >
      {containerWidth !== 0 && (
        <Animated.View
          style={{
            ...styles.progress,
            backgroundColor: fillColor,
            borderRadius,
            transform: [{ translateX: translateXValue }],
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    width: "100%",
  },
});

export default RNProgressBar;
