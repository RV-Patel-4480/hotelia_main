import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
//// This Stylesheet belongs to  OnBoarding
export default styles = {
  dotClass: {
    width: fixedWidth * 32,
    height: fixedWidth * 10,
    backgroundColor: Colors.secondary,
    borderRadius: fixedWidth * 10,
    alignItems: "center",
    textAlignVertical: "center",
  },
  dotClass2: {
    width: fixedWidth * 12,
    height: fixedWidth * 12,
    backgroundColor: Colors.white,
    borderRadius: fixedWidth * 100,
    alignItems: "center",
    textAlignVertical: "center",
  },
};
