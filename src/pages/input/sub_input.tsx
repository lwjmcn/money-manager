import { TouchableOpacity, SafeAreaView, Text } from "react-native";
import { InputTabs } from "../enum";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";
import InputLayout from "./component/input_layout";
import NextButton from "./component/next_button";
import { useState } from "react";

const SubInput = ({ navigation }) => {
  const { isDark } = useTheme();
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);
  const handleNext = () => {
    navigation.navigate(InputTabs.LAST);
  };
  return (
    <InputLayout navigation={navigation} title="새로운 내역 입력하기" step={3} onNextPress={handleNext} nextDisabled={nextDisabled}>
      <Text>Second</Text>
    </InputLayout>
  );
};
export default SubInput;
