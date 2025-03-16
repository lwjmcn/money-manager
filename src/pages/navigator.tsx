import { NavigationContainer, NavigationContainerRef, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DeviceEventEmitter, StatusBar } from "react-native";
import { createRef, useLayoutEffect } from "react";

import Icon from "../components/svg_icon";
import { HomeTabs, Pages } from "./enum";
import { Color } from "../../themes/colors";
import { useTheme } from "../../themes/theme";

import ViewTab from "./view/view_tab";
import TravelTab from "./travel/travel_tab";
import HomeTab from "./home/home_tab";
import SettingTab from "./setting/setting_tab";
import StatisticsTab from "./statisitcs/statistics_tab";
import getColor from "../../themes/get_color";

// android widget listener
DeviceEventEmitter.addListener("OPEN_PAGE_BTN_1", event => {
  console.log("OPEN_PAGE_BTN_1");
  navigationRef.current?.navigate(Pages.TRAVEL);
});
DeviceEventEmitter.addListener("OPEN_PAGE_BTN_2", event => {
  console.log("OPEN_PAGE_BTN_2");
  navigationRef.current?.navigate(Pages.VIEW);
});
DeviceEventEmitter.addListener("OPEN_PAGE_BTN_3", event => {
  console.log("OPEN_PAGE_BTN_3");
  navigationRef.current?.navigate(Pages.STATISTICS);
});
DeviceEventEmitter.addListener("OPEN_PAGE_BTN_4", event => {
  console.log("OPEN_PAGE_BTN_4");
  navigationRef.current?.navigate(Pages.SETTING);
});

type RootStackParamList = {
  여행: undefined;
  조회: undefined;
  홈: undefined;
  통계: undefined;
  설정: undefined;
};

const BottomTab = createBottomTabNavigator();
const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>();

const Navigator = () => {
  const { isDark, color } = useTheme();

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} backgroundColor={getColor(isDark, 0)} />
      <BottomTab.Navigator
        initialRouteName={Pages.HOME}
        backBehavior="none"
        screenOptions={{
          headerShown: false,
          tabBarActiveBackgroundColor: isDark ? Color.gray[10] : Color.gray[1],
          tabBarInactiveBackgroundColor: isDark ? Color.gray[10] : Color.gray[1],
          tabBarActiveTintColor: Color[color][5],
          tabBarStyle: { height: 60 },
          tabBarIconStyle: { marginTop: 3 },
          tabBarLabelStyle: { height: 22, fontFamily: "Pretendard", fontSize: 12, fontWeight: "600" },
        }}>
        <BottomTab.Screen name={Pages.TRAVEL} component={TravelTab} options={{ tabBarIcon: ({ color }) => <Icon name="TravelIcon" fill={color} size={30} /> }} />
        <BottomTab.Screen
          name={Pages.VIEW}
          component={ViewTab}
          options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "CreditCardIconFill" : "CreditCardIcon"} fill={color} size={30} /> }}
        />
        <BottomTab.Screen name={Pages.HOME} component={HomeTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "HomeIconFill" : "HomeIcon"} fill={color} size={30} /> }} />
        <BottomTab.Screen
          name={Pages.STATISTICS}
          component={StatisticsTab}
          options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "ChartIconFill" : "ChartIcon"} fill={color} size={30} /> }}
        />
        <BottomTab.Screen
          name={Pages.SETTING}
          component={SettingTab}
          options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "SettingIconFill" : "SettingIcon"} fill={color} size={30} /> }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
