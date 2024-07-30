import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "_styles/colors";
import { fixedWidth } from "_styles/dimension";
import ImageSlider from "react-native-image-slider";

function RNImageSlider(props) {
  const {
    items,
    activeDotStyle,
    dotStyle,
    isDotDisabled,
    activePosition,
    dotContainerStyle,
    imageContainerStyle,
    imageStyle,
    onPositionChanged,
    onPress,
    customSlider,
    customButtonsNode,
    autoPlayWithInterval,
    loop,
  } = props;
  const [imagePosition, setPosition] = useState(activePosition);

  useEffect(() => {
    setPosition(props.activePosition || 0);
  }, [props.activePosition]);

  return (
    <ImageSlider
      // loopBothSides={true}
      loop={loop || true}
      {...(!!autoPlayWithInterval && {
        autoPlayWithInterval: autoPlayWithInterval,
      })}
      position={imagePosition}
      images={items}
      style={{
        width: fixedWidth * 395,
        backgroundColor: colors.white,
      }}
      customSlide={({ index, item, style, width }) => {
        if (!!customSlider) {
          return (
            <View
              style={{
                width: width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {customSlider({ index, item, style, width })}
            </View>
          );
        } else {
          return (
            <View
              style={{
                width: width,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: fixedWidth * 5,
              }}
            >
              {/* It's important to put style here because it's got offset inside */}
              <TouchableOpacity
                disabled={!onPress}
                onPress={onPress}
                key={index}
                style={{ ...styles.sliderStyle, ...imageContainerStyle }}
              >
                <Image
                  source={typeof item == "string" ? { uri: item } : item}
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "stretch",
                    ...imageStyle,
                  }}
                />
              </TouchableOpacity>
            </View>
          );
        }
      }}
      onPositionChanged={(index) => {
        onPositionChanged && onPositionChanged(index);
      }}
      customButtons={(position, move) => {
        return (
          <View
            style={{
              width: "100%",
              paddingVertical: fixedWidth * 10,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              ...dotContainerStyle,
            }}
          >
            {items.map((image, index) => {
              return (
                <TouchableHighlight
                  key={index}
                  disabled={isDotDisabled}
                  // underlayColor={colors.light}
                  onPress={() => move(index)}
                  style={{
                    ...styles.dotStyle,
                    dotStyle,
                    ...(position === index && {
                      ...styles.activeDotStyle,
                      ...activeDotStyle,
                    }),
                  }}
                >
                  <>
                    {!!customButtonsNode &&
                      customButtonsNode({
                        image,
                        index,
                        currentPosition: position,
                      })}
                  </>
                </TouchableHighlight>
              );
            })}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  sliderStyle: {
    width: "90%",
    height: "100%",
    marginHorizontal: fixedWidth * 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.2,
    backgroundColor: "#efedee",
    borderRadius: fixedWidth * 20,
    // borderWidth: 1,
    // borderColor: colors.inputBGGrey,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    // marginVertical: fixedWidth * 8
  },

  dotStyle: {
    width: fixedWidth * 6,
    height: fixedWidth * 6,
    borderRadius: 50,
    marginHorizontal: 3,
    backgroundColor: colors.transparentBG3,
  },

  activeDotStyle: {
    width: fixedWidth * 9,
    height: fixedWidth * 9,
    backgroundColor: colors.primary,
  },
});

RNImageSlider.defaultProps = {
  items: [],
  isDotDisabled: true,
  position: 0,
  loop: true,
};

export default RNImageSlider;
