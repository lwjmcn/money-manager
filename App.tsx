import React from "react";
import Navigator from "./src/pages/navigator";
import { ThemeProvider } from "./themes/theme";
import { enableScreens } from "react-native-screens";
import { MD3LightTheme, PaperProvider } from "react-native-paper";

enableScreens();
const theme = MD3LightTheme;

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
