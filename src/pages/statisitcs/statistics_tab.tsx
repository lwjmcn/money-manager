import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Statistics from "./statistics";

const Stack = createNativeStackNavigator();

const StatisticsTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_right" }}>
        <Stack.Screen name="Statistics" component={Statistics} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StatisticsTab;
