import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import { HomeTabs } from "../enum";
import InputTab from "../input/input_tab";
import MainInput from "../input/money_input";

const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator initialRouteName={HomeTabs.HOME}>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_bottom" }}>
        <Stack.Screen name={HomeTabs.HOME} component={Home} options={{ headerShown: false }} />
        <Stack.Screen name={HomeTabs.INPUT} component={InputTab} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default HomeTab;
