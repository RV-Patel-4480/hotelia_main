import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
//// This Stylesheet belongs to  PasswordChanged
export default styles = {
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
    fontSize:20,
    fontWeight: "600",
    color: Colors.white,
  },
};
