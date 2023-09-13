import { useColorScheme, View, SafeAreaView, ScrollView, TouchableOpacity, Text } from "react-native";
import { Colors, LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import * as API from "./api";
import Banner from "./component/banner";

// android에 정보 전달
import { NativeModules } from "react-native";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";
import variant from "../../../themes/text_style";
import LottieView from "lottie-react-native";
import { ColorThemes } from "../enum";
const SharedStorage = NativeModules.SharedStorage;
SharedStorage.set(JSON.stringify({ text: "This is data from RN App" }));

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === "dark";
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

  return (
    <SafeAreaView style={{ backgroundColor: getColor(isDark, 0) }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Banner />
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", gap: 2 }}>
            <TouchableOpacity
              onPress={async () => console.log(await API.getUsers())}
              style={{ flex: 1, backgroundColor: "skyblue", padding: 2, alignItems: "center", borderRadius: 5 }}
              touchSoundDisabled
              activeOpacity={0.8}>
              <Text style={variant.normalLarge}>Get Users</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => console.log(await API.createUser("Add"))}
              style={{ flex: 1, backgroundColor: "skyblue", padding: 2, alignItems: "center", borderRadius: 5 }}
              touchSoundDisabled
              activeOpacity={0.8}>
              <Text style={variant.normalLarge}>Create Users</Text>
            </TouchableOpacity>
          </View>
          <View>
            <LottieView source={done[color]} autoPlay loop={false} style={{ width: 100, height: 100 }} />
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
