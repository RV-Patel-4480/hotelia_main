import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
//// This Stylesheet belongs to  Login
export default styles = {
  grayText: {
    paddingTop: "0%",
    paddingBottom: "0%",
    alignItems: "center",
    textAlign: "left",
    color: Colors.textgrey,
    textAlignVertical: "center",
  },
  blueText: {
    marginTop: "0%",
    paddingTop: "0%",
    paddingBottom: "0%",
    textAlign: "left",
    fontSize: ScreenWidth * 0.03808,
    fontWeight: "600",
    color: Colors.blue,
  },
  button: {
    width: "100%",
    paddingTop: fixedWidth * 10,
    paddingBottom: fixedWidth * 10,
    backgroundColor: Colors.primary,
    borderRadius: fixedWidth * 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
  },
  whiteText: {
    textAlign: "center",
    fontSize: ScreenWidth * 0.03808,
    fontWeight: "600",
    color: Colors.white,
  },
};
