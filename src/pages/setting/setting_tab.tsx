import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Setting from "./setting";

const Stack = createNativeStackNavigator();

const SettingTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_right" }}>
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default SettingTab;
