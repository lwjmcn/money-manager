import { useColorScheme, View, SafeAreaView, ScrollView, TouchableOpacity, Text, Pressable } from "react-native";
import { Colors, LearnMoreLinks } from "react-native/Libraries/NewAppScreen";
import * as API from "./api";
import Banner from "./component/banner";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";
import variant from "../../../themes/text_style";
import { HomeTabs, InputTabs } from "../enum";

// android에 정보 전달
import { NativeModules } from "react-native";
const SharedStorage = NativeModules.SharedStorage;
SharedStorage.set(JSON.stringify({ text: "This is data from RN App" }));

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === "dark";
  const { isDark } = useTheme();

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
            <TouchableOpacity
              onPress={() => {
                navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
                navigation.navigate(HomeTabs.INPUT, { screen: InputTabs.MAIN });
              }}>
              <Text style={[variant.normalLarge]}>INPUT</Text>
            </TouchableOpacity>
          </View>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
