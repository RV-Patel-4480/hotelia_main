import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
//// This Stylesheet belongs to  ProfileRequestPersonalData
export default styles = {
  emailTex: {},
  inputTex: {},
  grayText: {
    paddingTop: "0%",
    paddingBottom: "0%",
    alignItems: "center",
    textAlign: "left",
    color: Colors.textgrey,
    textAlignVertical: "center",
  },
  redtext: {},
  whiteText: {
    textAlign: "center",
    fontSize: ScreenWidth * 0.03808,
    fontWeight: "600",
    color: Colors.white,
  },
};
