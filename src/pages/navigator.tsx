import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ViewTab from "./view/view_tab";
import TravelTab from "./travel/travel_tab";
import HomeTab from "./home/home_tab";
import SettingTab from "./setting/setting_tab";
import StatisticsTab from "./statisitcs/statistics_tab";
import Icon from "../components/svg_icon";
import React from "react";
import { DeviceEventEmitter } from "react-native";
import { Pages } from "./enum";

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
const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTab.Navigator initialRouteName={Pages.HOME} backBehavior="none" screenOptions={{ headerShown: false, tabBarIconStyle: { marginTop: 3 }, tabBarLabelStyle: { height: 18 } }}>
        <BottomTab.Screen name={Pages.TRAVEL} component={TravelTab} options={{ tabBarIcon: ({ color }) => <Icon name="TravelIcon" fill={color} /> }} />
        <BottomTab.Screen name={Pages.VIEW} component={ViewTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "CreditCardIconFill" : "CreditCardIcon"} fill={color} /> }} />
        <BottomTab.Screen name={Pages.HOME} component={HomeTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "HomeIconFill" : "HomeIcon"} fill={color} /> }} />
        <BottomTab.Screen name={Pages.STATISTICS} component={StatisticsTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "ChartIconFill" : "ChartIcon"} fill={color} /> }} />
        <BottomTab.Screen name={Pages.SETTING} component={SettingTab} options={{ tabBarIcon: ({ focused, color }) => <Icon name={focused ? "SettingIconFill" : "SettingIcon"} fill={color} /> }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
