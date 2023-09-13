import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";

const History = () => {
  const { isDark } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: getColor(isDark, 0), flex: 1 }}>
      <Text>입출금 내역 조회</Text>
    </SafeAreaView>
  );
};
export default History;
