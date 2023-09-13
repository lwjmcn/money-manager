import { View, ScrollView } from "react-native";
import { Color } from "../../../themes/colors";
import { useTheme } from "../../../themes/theme";
import { ColorThemes } from "../enum";
import Icon from "../../components/svg_icon";
import variant from "../../../themes/text_style";
import getColor from "../../../themes/get_color";
import { Divider, Dialog, Portal, List, IconButton } from "react-native-paper";
import { Text } from "react-native";

interface ThemeSettingProps {
  colorModalOpen: boolean;
  setColorModalOpen: (value: boolean) => void;
}
const ThemeSetting = ({ colorModalOpen, setColorModalOpen }: ThemeSettingProps) => {
  const { isDark, color, changeColor } = useTheme();

  return (
    <Portal>
      <Dialog visible={colorModalOpen} onDismiss={() => setColorModalOpen(false)} style={{ backgroundColor: getColor(isDark, 0), borderRadius: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <IconButton icon="arrow-left" size={25} onPress={() => setColorModalOpen(false)} style={{ marginLeft: 10 }} />
          <Text style={[variant.titleMedium, { color: getColor(isDark, 9), flex: 1 }]}>색상 테마 설정하기</Text>
        </View>
        <Dialog.ScrollArea style={{ borderColor: "transparent" }}>
          <ScrollView style={{ height: 350 }} showsVerticalScrollIndicator={false}>
            {Object.keys(Color).map((item: ColorThemes) => {
              return (
                <View key={item}>
                  <List.Item
                    title={item.charAt(0).toUpperCase().concat(item.slice(1))}
                    titleStyle={[variant.boldLarge, { color: Color[item][7] }]}
                    left={() => <View style={{ width: 22, height: 22, borderRadius: 22, marginLeft: 10, backgroundColor: Color[item][7] }} />}
                    right={() => item === color && <Icon name="CheckIcon" height={22} fill={Color.gray[5]} />}
                    onPress={() => changeColor(item)}
                  />
                  <Divider style={{ backgroundColor: getColor(isDark, 4) }} />
                </View>
              );
            })}
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};
export default ThemeSetting;
