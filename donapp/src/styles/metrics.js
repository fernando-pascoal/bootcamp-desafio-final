import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  padding: "13px",
  margin: "15px",
  bigPadding: "20px",
  bigMargin: "30px",
  radius: "8px",
  bigRadius: "16px",
  fontSize: "16px",
  fontBig: "20px",
  fontSmall: "14px",
  width: width < height ? width : height,
  height: width > height ? width : height
};
