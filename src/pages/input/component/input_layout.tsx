import { SafeAreaView, View, Text, BackHandler, Alert, ScrollView, KeyboardAvoidingView } from "react-native";
import { Divider, IconButton } from "react-native-paper";
import getColor from "../../../../themes/get_color";
import variant from "../../../../themes/text_style";
import NextButton from "./next_button";
import { useTheme } from "../../../../themes/theme";
import Stepper from "./stepper";
import { useEffect } from "react";

interface InputLayoutProps {
  navigation: any;
  children: React.ReactNode;
  title: string;
  step: number;
  onNextPress: () => void;
  nextDisabled: boolean;
}
const InputLayout = ({ navigation, children, title, step, onNextPress, nextDisabled }: InputLayoutProps) => {
  const { isDark } = useTheme();

  const handleBack = () => {
    if (step === 1) {
      Alert.alert(
        "",
        "작성 중인 내용을 삭제하시겠습니까?",
        [
          {
            text: "취소",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "삭제",
            onPress: () => {
              navigation
                .getParent()
                .getParent()
                .setOptions({
                  tabBarStyle: { display: undefined, height: 60 },
                });
              navigation.goBack();
            },
            style: "destructive",
          },
        ],
        { userInterfaceStyle: isDark ? "dark" : "light" },
      );
    } else navigation.goBack();
  };

  useEffect(() => {
    // hardware back button handling
    const backAction = () => {
      handleBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: getColor(isDark, 0) }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
        {/* back button */}
        <IconButton icon="arrow-left" iconColor={getColor(isDark, 9)} size={25} onPress={handleBack} style={{ marginLeft: 10 }} />
        {/* title */}
        <Text style={[variant.titleMedium, { color: getColor(isDark, 9), flex: 1 }]}>{title}</Text>
      </View>
      <Divider />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 30 }}>
        {/* step */}
        <Stepper step={step} />
        {/* input */}
        <KeyboardAvoidingView style={{ paddingHorizontal: 20, marginTop: -50, flex: 1, justifyContent: "center" }}>{children}</KeyboardAvoidingView>
        {/* next button */}
        <NextButton onPress={onNextPress} disabled={nextDisabled} />
      </View>
    </SafeAreaView>
  );
};
export default InputLayout;
