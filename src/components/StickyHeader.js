import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Animated,
  LayoutAnimation,
} from "react-native";

const StickyHeader = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const headerRef = useRef(null);

  const onScroll = (event) => {
    LayoutAnimation.configureNext({
      duration: 300,
      update: {
        type: LayoutAnimation.Types.easeInOut,
        property: LayoutAnimation.Properties.opacity,
      },
    });
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  const headerY = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -150],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Animated.View
        ref={headerRef}
        style={[styles.header, { transform: [{ translateY: headerY }] }]}
      >
        <Text style={styles.headerText}>Sticky Header</Text>
      </Animated.View>
      <ScrollView onScroll={onScroll}>
        <View style={styles.content}>{/* ...content goes here... */}</View>
      </ScrollView>
    </View>
  );
};

const styles = {
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: "#6200ee",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    paddingTop: 150,
  },
};

export default StickyHeader;
