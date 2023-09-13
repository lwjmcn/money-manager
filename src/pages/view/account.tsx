import { SafeAreaView, Text } from "react-native";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";

const Account = () => {
  const { isDark } = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: getColor(isDark, 0), flex: 1 }}>
      <Text>계좌 및 카드 조회</Text>
    </SafeAreaView>
  );
};
export default Account;
