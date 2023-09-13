import { SafeAreaView, Text } from "react-native";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";
import variant from "../../../themes/text_style";

const Statistics = () => {
  const { isDark } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: getColor(isDark, 0), flex: 1 }}>
      <Text style={[variant.titleLarge, { color: getColor(isDark, 9), margin: 15, marginTop: 30 }]}>통계</Text>
    </SafeAreaView>
  );
};
export default Statistics;
