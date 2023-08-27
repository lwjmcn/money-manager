import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import History from "./history";
import Account from "./account";

const TopTab = createMaterialTopTabNavigator();

const ViewTab = () => {
  return (
    <TopTab.Navigator initialRouteName="History" screenOptions={{ swipeEnabled: true }}>
      <TopTab.Screen name="History" component={History} />
      <TopTab.Screen name="Account" component={Account} />
    </TopTab.Navigator>
  );
};
export default ViewTab;
