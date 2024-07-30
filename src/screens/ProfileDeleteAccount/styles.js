import Colors from "_styles/colors";
import {
  fixedHeight,
  fixedWidth,
  STATUSBAR_HEIGHT,
  ScreenHeight,
  ScreenWidth,
} from "_styles/dimension";
//// This Stylesheet belongs to  ProfileDeleteAccount
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
  button: {
    width: "100%",
    paddingTop: fixedWidth * 10,
    paddingBottom: fixedWidth * 10,
    backgroundColor: Colors.primary,
    borderRadius: fixedWidth * 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
  },
  redtext: {},
  redText: {
    textAlign: "center",
    fontSize: ScreenWidth * 0.04284,
    color: Colors.red,
  },
};
