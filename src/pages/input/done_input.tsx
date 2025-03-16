import LottieView from "lottie-react-native";
import { View } from "react-native";
import { useTheme } from "../../../themes/theme";
import getColor from "../../../themes/get_color";
import { useEffect } from "react";

const DoneInput = ({ navigation }) => {
  const { isDark, color } = useTheme();

  const done = {
    blue: require("../../assets/lottie/done/done_blue.json"),
    cyan: require("../../assets/lottie/done/done_cyan.json"),
    grape: require("../../assets/lottie/done/done_grape.json"),
    gray: require("../../assets/lottie/done/done_gray.json"),
    green: require("../../assets/lottie/done/done_green.json"),
    indigo: require("../../assets/lottie/done/done_indigo.json"),
    lime: require("../../assets/lottie/done/done_lime.json"),
    orange: require("../../assets/lottie/done/done_orange.json"),
    pink: require("../../assets/lottie/done/done_pink.json"),
    red: require("../../assets/lottie/done/done_red.json"),
    teal: require("../../assets/lottie/done/done_teal.json"),
    violet: require("../../assets/lottie/done/done_violet.json"),
    yellow: require("../../assets/lottie/done/done_yellow.json"),
  } as any;

  useEffect(() => {
    setTimeout(() => {
      navigation
        .getParent()
        .getParent()
        .setOptions({ tabBarStyle: { display: undefined, height: 60 } }); // show
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: getColor(isDark, 0) }}>
      <LottieView source={done[color]} autoPlay loop={false} style={{ width: 100, height: 100 }} duration={2000} />
    </View>
  );
};
export default DoneInput;
