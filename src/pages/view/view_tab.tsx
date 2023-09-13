import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import History from "./history";
import Account from "./account";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";
import { Color } from "../../../themes/colors";

import variant from "../../../themes/text_style";
const TopTab = createMaterialTopTabNavigator();

const ViewTab = () => {
  const { isDark, color } = useTheme();

  return (
    <TopTab.Navigator
      initialRouteName="History"
      screenOptions={{
        swipeEnabled: true,
        tabBarStyle: { backgroundColor: getColor(isDark, 0) },
        tabBarContentContainerStyle: { borderColor: Color[color][9] },
        tabBarActiveTintColor: getColor(isDark, 9),
        tabBarLabelStyle: { ...variant.titleMedium, marginTop: 15, color: getColor(isDark, 9) },
      }}>
      <TopTab.Screen name="입출금 내역" component={History} />
      <TopTab.Screen name="내 자산" component={Account} />
    </TopTab.Navigator>
  );
};
export default ViewTab;
