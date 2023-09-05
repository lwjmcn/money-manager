import { useColorScheme, View, Text, SafeAreaView, ScrollView, StatusBar, Button, TouchableOpacity } from "react-native";
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import Section from "./component/section";
import * as API from "./api";

// android에 정보 전달
import { NativeModules } from "react-native";
const SharedStorage = NativeModules.SharedStorage;
SharedStorage.set(JSON.stringify({ text: "This is data from RN App" }));

const Home = ({ navigation }: any) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* /SafeAreaView는 안드로이드의 상단 상태바와 하단 소프트키를 고려한 영역을 잡아준다. */}
      {/* 최상단 상태바 */}
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={backgroundStyle.backgroundColor} />
      {/* 스크롤 */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* 상단 배너 */}
        <Header />
        {/* 내용 */}
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          {/* 버튼 */}
          <View style={{ width: "100%", display: "flex", flexDirection: "row", gap: 2 }}>
            <TouchableOpacity
              onPress={async () => console.log(await API.getUsers())}
              style={{ flex: 1, backgroundColor: "skyblue", padding: 2, alignItems: "center", borderRadius: 5 }}
              touchSoundDisabled
              activeOpacity={0.8}>
              <Text>Get Users</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => console.log(await API.createUser("Add"))}
              style={{ flex: 1, backgroundColor: "skyblue", padding: 2, alignItems: "center", borderRadius: 5 }}
              touchSoundDisabled
              activeOpacity={0.8}>
              <Text>Create Users</Text>
            </TouchableOpacity>
          </View>
          <Section title="Reload : R">
            <ReloadInstructions />
          </Section>
          <Section title="Debug : Shake">
            <DebugInstructions />
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
