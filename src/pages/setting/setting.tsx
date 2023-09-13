import { SafeAreaView } from "react-native";
import ThemeSetting from "./theme_setting";
import { useState } from "react";
import { useTheme } from "../../../themes/theme";
import getColor from "../../../themes/get_color";
import { Color } from "../../../themes/colors";
import variant from "../../../themes/text_style";
import { List, Divider, Switch } from "react-native-paper";
import { Text } from "react-native";

const Setting = () => {
  const { isDark, color, toggleTheme } = useTheme();
  const [colorModalOpen, setColorModalOpen] = useState<boolean>(false);

  return (
    <SafeAreaView style={{ backgroundColor: getColor(isDark, 0), flex: 1 }}>
      <Text style={[variant.titleLarge, { color: getColor(isDark, 9), margin: 15, marginTop: 30 }]}>설정</Text>
      <List.Section style={{ backgroundColor: getColor(isDark, 0) }}>
        <List.Item
          title="색상 테마 설정하기"
          titleStyle={[variant.boldLarge, { color: getColor(isDark, 9) }]}
          right={() => <List.Icon icon="chevron-right" color={getColor(isDark, 4)} />}
          onPress={() => setColorModalOpen(true)}
        />
        <Divider style={{ backgroundColor: getColor(isDark, 4) }} />
        <List.Item
          title="다크 모드"
          titleStyle={[variant.boldLarge, { color: getColor(isDark, 9) }]}
          right={() => <Switch value={isDark} onValueChange={() => toggleTheme()} thumbColor={Color[color][4]} trackColor={{ false: Color.gray[3], true: Color[color][6] }} />}
        />
      </List.Section>

      <ThemeSetting colorModalOpen={colorModalOpen} setColorModalOpen={setColorModalOpen} />
    </SafeAreaView>
  );
};

export default Setting;
