import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Travel from "./travel";

const Stack = createNativeStackNavigator();

const TravelTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_right" }}>
        <Stack.Screen name="Travel" component={Travel} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default TravelTab;
