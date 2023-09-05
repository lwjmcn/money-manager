import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";
import { HomeTabs } from "../enum";

const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_right" }}>
        <Stack.Screen name={HomeTabs.HOME} component={Home} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default HomeTab;
