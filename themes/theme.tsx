import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ColorThemes } from "../src/pages/enum";
import { useColorScheme } from "react-native";

interface ThemeContextProps {
  isDark: boolean;
  color: ColorThemes;
  toggleTheme: () => void;
  changeColor: (color: ColorThemes) => void;
}
export const ThemeContext = createContext<ThemeContextProps>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isDarkMode = useColorScheme() === "dark"; // 시스템 다크모드 가져오기

  const [isDark, setIsDark] = useState<boolean>(isDarkMode); // 다크모드 초기값
  const [color, setColor] = useState<ColorThemes>(ColorThemes.BLUE); // 색상테마 초기값
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };
  const changeColor = (color: ColorThemes) => {
    setColor(color);
  };

  useEffect(() => {
    if (isDarkMode) setIsDark(true);
    else setIsDark(false);
  }, [isDarkMode]); // 시스템 다크모드 리스너

  return <ThemeContext.Provider value={{ isDark, color, toggleTheme, changeColor }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context: ThemeContextProps = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
