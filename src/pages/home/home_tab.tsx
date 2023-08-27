import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./home";

const Stack = createNativeStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "card", animation: "slide_from_right" }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default HomeTab;
