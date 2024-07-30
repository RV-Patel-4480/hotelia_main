import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const RNIntroSlider = (props) => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get("window");
  let scrollRef = undefined;
  const data = props.children || [];

  const goToSlide = (pageNum, triggerOnSlideChange) => {
    const prevNum = sliderState.currentPage;
    console.log(pageNum, width);
    scrollRef.scrollTo({
      x: pageNum * width,
    });
    if (triggerOnSlideChange && props.onSlideChange) {
      props.onSlideChange(pageNum, prevNum);
    }
  };

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  const _renderPages = () => {
    return data.map((pg, index) => (
      <View style={{ width }} key={"p" + index}>
        {pg}
      </View>
    ));
  };

  const _renderDefaultButton = (name, label, onPress, cStyle = {}) => {
    let content = <Text style={styles.buttonText}>{label}</Text>;
    if (props.bottomButton) {
      content = (
        <View
          style={[
            name === "Skip" || name === "Prev"
              ? styles.transparentBottomButton
              : styles.bottomButton,
          ]}
        >
          {content}
        </View>
      );
    }

    return content;
  };

  const _renderButton = (name, label, onPress, render, style) => {
    const content = render
      ? render()
      : _renderDefaultButton(name, label, onPress, style);
    return (
      <TouchableOpacity onPress={onPress} style={[style]}>
        {content}
      </TouchableOpacity>
    );
  };

  const _renderNextButton = () =>
    props.showNextButton &&
    _renderButton(
      "Next",
      props.nextLabel,
      () => goToSlide(sliderState.currentPage + 1, true),
      props.renderNextButton,
      props.nextStyle
    );

  const _renderPrevButton = () =>
    props.showPrevButton &&
    _renderButton(
      "Prev",
      props.prevLabel,
      () => goToSlide(sliderState.currentPage - 1, true),
      props.renderPrevButton,
      props.prevStyle
    );

  const _renderDoneButton = () =>
    props.showDoneButton &&
    _renderButton(
      "Done",
      props.doneLabel,
      props.onDone,
      props.renderDoneButton,
      props.doneStyle
    );

  const _renderSkipButton = () =>
    props.showSkipButton &&
    _renderButton(
      "Skip",
      props.skipLabel,
      () => (props.onSkip ? props.onSkip() : goToSlide(data.length - 1)),
      props.renderSkipButton,
      props.skipStyle
    );

  const _renderPaginationDot = () => {
    return (
      <View style={[styles.paginationWrapper, props.paginationWrapperStyle]}>
        {data.map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              pageIndex === index
                ? { ...styles.activeDotStyle, ...props?.activeDotStyle }
                : { ...styles.dotStyle, ...props?.dotStyle },
            ]}
            key={"d" + index}
          />
        ))}
      </View>
    );
  };

  const isLastSlide = sliderState.currentPage === data.length - 1;
  const isFirstSlide = sliderState.currentPage === 0;

  const secondaryButton =
    (!isFirstSlide && _renderPrevButton()) ||
    (!isLastSlide && _renderSkipButton());
  const primaryButton = isLastSlide ? _renderDoneButton() : _renderNextButton();

  return (
    <GestureHandlerRootView>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        
        <ScrollView
          ref={(ref) => (scrollRef = ref)}
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          bounces={"false"}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          {_renderPages()}
        </ScrollView>
        {!props.pagination.hide &&
          !props.pagination?.hideOnScreen?.includes(
            sliderState.currentPage + 1
          ) &&
          _renderPaginationDot()}
        {primaryButton}
        {secondaryButton}
      </SafeAreaView>
      </GestureHandlerRootView>
   
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 40,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },
  leftButtonContainer: {
    position: "absolute",
    left: 0,
  },
  rightButtonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  bottomButton: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .3)",
    alignItems: "center",
    justifyContent: "center",
  },
  transparentBottomButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    padding: 5,
  },
  activeDotStyle: {
    backgroundColor: "rgba(255, 255, 255, .9)",
  },
  dotStyle: {
    backgroundColor: "rgba(0, 0, 0, .2)",
  },
});

RNIntroSlider.defaultProps = {
  activeDotStyle: {
    backgroundColor: "rgba(255, 255, 255, .9)",
  },
  dotStyle: {
    backgroundColor: "rgba(0, 0, 0, .2)",
  },
  dotClickEnabled: true,
  skipLabel: "Skip",
  doneLabel: "Done",
  nextLabel: "Next",
  prevLabel: "Back",
  pagination: { hide: false, hideOnScreen: [] },
  paginationWrapperStyle: {},
  nextStyle: {},
  prevStyle: {},
  skipStyle: {},
  doneStyle: {},
  onDone: () => {},
  showDoneButton: true,
  showNextButton: true,
  showPrevButton: true,
  showSkipButton: true,
  bottomButton: false,
};

export default RNIntroSlider;
