import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InputTabs } from "../enum";
import SubInput from "./sub_input";
import DoneInput from "./done_input";
import LastInput from "./last_input";
import TypeInput from "./type_input";
import MoneyInput from "./money_input";

const Stack = createNativeStackNavigator();

const InputTab = () => {
  return (
    <Stack.Navigator initialRouteName={InputTabs.TYPE}>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_right" }}>
        <Stack.Screen name={InputTabs.TYPE} component={TypeInput} options={{ headerShown: false }} />
        <Stack.Screen name={InputTabs.MONEY} component={MoneyInput} options={{ headerShown: false }} />
        <Stack.Screen name={InputTabs.SECOND} component={SubInput} options={{ headerShown: false }} />
        <Stack.Screen name={InputTabs.LAST} component={LastInput} options={{ headerShown: false }} />
        <Stack.Screen name={InputTabs.DONE} component={DoneInput} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default InputTab;
