import { useColorScheme, View, Text, SafeAreaView, ScrollView, StatusBar, Button } from "react-native";
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import Section from "./component/section";

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
          <Button title="버튼" onPress={() => navigation.navigate("Home")} touchSoundDisabled />
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
