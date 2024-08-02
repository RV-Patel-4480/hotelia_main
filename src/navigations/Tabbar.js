import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import Icon from "_components/Icon";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
import Colors from "_styles/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Animated, {
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
// function Tabbar(props) {
//   const { navigation, state, descriptors, route } = props;

//   const focusedRoute = state.routes[state.index];
//   const focusedDescriptor = descriptors[focusedRoute.key];
//   const focusedOptions = focusedDescriptor.options;
//   const tabBarStyle = focusedOptions?.tabBarStyle || {};

// return (
//   <View
//     style={{
//       width: "100.00%",
//       backgroundColor: Colors.white,
//       borderRadius: fixedWidth * 0,
//       borderWidth: 0,
//       borderColor: Colors.white,
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       ...tabBarStyle,
//     }}
//   >
//     <View
//       style={{
//         width: "100.00%",
//         marginTop: fixedWidth * 10.0,
//         marginBottom: fixedWidth * 10.0,
//         paddingLeft: fixedWidth * 20.0,
//         paddingRight: fixedWidth * 20.0,
//         borderRadius: fixedWidth * 0,
//         borderWidth: 0,
//         borderColor: Colors.white,
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       <View
//         style={{
//           borderRadius: fixedWidth * 0,
//           borderWidth: 0,
//           borderColor: Colors.white,
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("HomeScreen");
//           }}
//           style={{
//             marginBottom: fixedWidth * 2.0,
//             borderRadius: fixedWidth * 0,
//             borderWidth: 0,
//             borderColor: Colors.white,
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Icon
//             type={"entypo"}
//             name={"home"}
//             color={state.index == 0 ? Colors.blue : Colors.textgrey}
//             style={{
//               width: fixedWidth * 24.0,
//               height: fixedWidth * 24.0,
//               marginVertical: fixedWidth * 4.0,
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           />
//           <Text
//             style={{
//               textTransform: "none",
//               fontSize: ScreenWidth * 0.04,
//               color: state.index == 0 ? Colors.blue : Colors.textgrey,
//               fontWeight: "normal",
//               textAlign: "center",
//             }}
//           >
//             Home
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           borderRadius: fixedWidth * 0,
//           borderWidth: 0,
//           borderColor: Colors.white,
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("MyOrders");
//           }}
//           style={{
//             marginBottom: fixedWidth * 2.0,
//             borderRadius: fixedWidth * 0,
//             borderWidth: 0,
//             borderColor: Colors.white,
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Icon
//             type={"material-community"}
//             name={"ticket-confirmation"}
//             color={state.index == 10 ? Colors.blue : Colors.textgrey}
//             style={{
//               width: fixedWidth * 24.0,
//               height: fixedWidth * 24.0,
//               marginVertical: fixedWidth * 4.0,
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           ></Icon>
//           <Text
//             style={{
//               textTransform: "none",
//               fontSize: ScreenWidth * 0.04,
//               color: state.index == 10 ? Colors.blue : Colors.textgrey,
//               fontWeight: "normal",
//               textAlign: "center",
//             }}
//           >
//             My Trip
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           borderRadius: fixedWidth * 0,
//           borderWidth: 0,
//           borderColor: Colors.white,
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("FavoritesHotel");
//           }}
//           style={{
//             marginBottom: fixedWidth * 2.0,
//             borderRadius: fixedWidth * 0,
//             borderWidth: 0,
//             borderColor: Colors.white,
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Icon
//             type={"ionicon"}
//             name={"bookmark"}
//             color={state.index == 11 ? Colors.blue : Colors.textgrey}
//             style={{
//               width: fixedWidth * 24.0,
//               height: fixedWidth * 24.0,
//               marginVertical: fixedWidth * 4.0,
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           ></Icon>
//           <Text
//             style={{
//               textTransform: "none",
//               fontSize: ScreenWidth * 0.04,
//               color: state.index == 11 ? Colors.blue : Colors.textgrey,
//               fontWeight: "normal",
//               textAlign: "center",
//             }}
//           >
//             Favorite
//           </Text>
//         </TouchableOpacity>
//       </View>
//       <View
//         style={{
//           borderRadius: fixedWidth * 0,
//           borderWidth: 0,
//           borderColor: Colors.white,
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <TouchableOpacity
//           style={{
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onPress={() => {
//             navigation.navigate("Profile1");
//           }}
//         >
//           <Icon
//             type={"font-awesome-5"}
//             name={"user-alt"}
//             color={state.index == 15 ? Colors.blue : Colors.textgrey}
//             style={{
//               width: fixedWidth * 24.0,
//               height: fixedWidth * 24.0,
//               marginVertical: fixedWidth * 4.0,
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           ></Icon>
//           <Text
//             style={{
//               textTransform: "none",
//               fontSize: ScreenWidth * 0.04,
//               color: state.index == 15 ? Colors.blue : Colors.textgrey,
//               fontWeight: "normal",
//               textAlign: "center",
//             }}
//           >
//             Profile
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// );
// }

import Svg, { Path } from "react-native-svg";
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const Tabbar = (props) => {
  const { navigation, state, descriptors, route } = props;

  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;
  const tabBarStyle = focusedOptions?.tabBarStyle || {};
  const { bottom } = useSafeAreaInsets();

  // get information about the components position on the screen -----

  const reducer = (state, action) => {
    // Add the new value to the state
    return [...state, { x: action.x, index: state.index }];
  };

  const [layout, dispatch] = React.useReducer(reducer, []);

  const handleLayout = (event, index) => {
    dispatch({ x: event.nativeEvent.layout.x, index });
  };

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    // Our code hasn't finished rendering yet, so we can't use the layout values
    if (layout.length !== state.routes.length) return 0;
    // We can use the layout values
    // Copy layout to avoid errors between different threads
    // We subtract 25 so the active background is centered behind our TabBar Components
    // 20 pixels is the width of the left part of the svg (the quarter circle outwards)
    // 5 pixels come from the little gap between the active background and the circle of the TabBar Components
    return [...layout].find(({ index }) => index === state.index).x - 25;
    // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
    // or the layout changes (e.g. when the components haven't finished rendering yet)
  }, [state.index, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{ translateX: withTiming(xOffset.value, { duration: 250 }) }],
    };
  });

  return (
    <View style={[styles.tabBar, { paddingBottom: bottom }]}>
      <AnimatedSvg
        width={110}
        height={60}
        viewBox="0 0 110 60"
        style={[styles.activeBackground, animatedStyles]}
      >
        <Path
          fill="#604AE6"
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>

      <View style={styles.tabBarContainer}>
        {/* {state.routes.map((route, index) => {
            const active = index === state.index
            const { options } = descriptors[route.key]
  console.log(active);
            console.log(options);
            return (
              <TabBarComponent
                key={route.key}
                Icon={() => {}}
                active={active}
                options={options}
                onLayout={(e) => handleLayout(e, index)}
                onPress={() => navigation.navigate(route.name)}
              />
            )
          })} */}
        <TabBarComponent
          active={state.index == 0 ? true : false}
          Icon={() => (
            <Icon
              type={"entypo"}
              name={"home"}
              color={state.index == 0 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          )}
          onLayout={(e) =>{
            // console.log('e[[[[[[000',e.nativeEvent.layout.x);
            handleLayout(e, state.index)}}
          onPress={() => navigation.navigate("HomeScreen")}
        />
        <TabBarComponent
          active={state.index == 10 ? true : false}
          Icon={() => (
            <Icon
              type={"material-community"}
              name={"ticket-confirmation"}
              color={state.index == 10 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          )}
          onLayout={(e) => handleLayout(e, state.index)}
          onPress={() => navigation.navigate("MyOrders")}
        />
        <TabBarComponent
          active={state.index == 11 ? true : false}
          Icon={() => (
            <Icon
              type={"ionicon"}
              name={"bookmark"}
              color={state.index == 11 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Icon>
          )}
          onLayout={(e) => handleLayout(e, state.index)}
          onPress={() => navigation.navigate("FavoritesHotel")}
        />
        <TabBarComponent
          active={state.index == 15 ? true : false}
          Icon={() => (
            <Icon
              type={"font-awesome-5"}
              name={"user-alt"}
              color={state.index == 15 ? Colors.blue : Colors.textgrey}
              style={{
                width: fixedWidth * 24.0,
                height: fixedWidth * 24.0,
                marginVertical: fixedWidth * 4.0,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Icon>
          )}
          onLayout={(e) => handleLayout(e, state.index)}
          onPress={() => navigation.navigate("Profile1")}
        />
      </View>
    </View>
  );
};

const TabBarComponent = ({ active, Icon, onLayout, onPress }) => {
  // handle lottie animation -----------------------------------------
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current.play();
    }
  }, [active]);

  // animations ------------------------------------------------------

  const animatedComponentCircleStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(active ? 1 : 0, { duration: 250 }),
        },
      ],
    };
  });

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, { duration: 250 }),
    };
  });

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[styles.componentCircle, animatedComponentCircleStyles]}
      />
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {/* @ts-ignore */}
        {Icon()}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  activeBackground: {
    position: "absolute",
  },
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: "white",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default Tabbar;
