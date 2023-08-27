import { PropsWithChildren } from "react";
import { useColorScheme, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps) {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={{ marginTop: 32, paddingHorizontal: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "600", color: isDarkMode ? Colors.white : Colors.black }}>{title}</Text>
      <Text style={{ marginTop: 8, fontSize: 18, fontWeight: "400", color: isDarkMode ? Colors.light : Colors.dark }}>{children}</Text>
    </View>
  );
}

export default Section;
