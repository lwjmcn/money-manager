import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ViewTab from "./view/view_tab";
import TravelTab from "./travel/travel_tab";
import HomeTab from "./home/home_tab";
import SettingTab from "./setting/setting_tab";
import StatisticsTab from "./statisitcs/statistics_tab";
import Icon from "../components/svg_icon";

const BottomTab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarIconStyle: { marginTop: 3 }, tabBarLabelStyle: { height: 18 } }}>
        <BottomTab.Screen name="여행" component={TravelTab} options={{ tabBarIcon: ({ color }) => <Icon name="TravelIcon" fill={color} /> }} />
        <BottomTab.Screen name="조회" component={ViewTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "CreditCardIconFill" : "CreditCardIcon"} fill={color} /> }} />
        <BottomTab.Screen name="홈" component={HomeTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "HomeIconFill" : "HomeIcon"} fill={color} /> }} />
        <BottomTab.Screen name="통계" component={StatisticsTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "ChartIconFill" : "ChartIcon"} fill={color} /> }} />
        <BottomTab.Screen name="설정" component={SettingTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "SettingIconFill" : "SettingIcon"} fill={color} /> }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
