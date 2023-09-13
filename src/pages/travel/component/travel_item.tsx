import { View, Platform, Text, Image, ImageBackground } from "react-native";
import variant from "../../../../themes/text_style";
import getColor from "../../../../themes/get_color";
import { useTheme } from "../../../../themes/theme";

interface TravelItemProps {
  title: string;
  duration: string;
  image: string;
}
const TravelItem = (props: TravelItemProps) => {
  const { isDark } = useTheme();
  return (
    <View
      style={{
        marginBottom: 20,
        borderStyle: "solid",
        borderRadius: 20,
        backgroundColor: getColor(isDark, 4),
        ...Platform.select({
          android: {
            elevation: 7,
          },
          ios: {
            shadowColor: "gray",
            shadowRadius: 7,
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 10 },
          },
        }),
      }}>
      <ImageBackground source={{ uri: props.image }} style={{ display: "flex", flexDirection: "row", height: 250, paddingLeft: 25, paddingBottom: 15 }} imageStyle={{ borderRadius: 20, opacity: 0.3 }}>
        <View style={{ alignSelf: "flex-end", flex: 1 }}>
          <Text style={[variant.headlineMedium]}>{props.title}</Text>
          <Text style={[variant.normalSmall]}>{props.duration}</Text>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, marginTop: 5 }}>
            <Image source={{ uri: props.image }} style={{ width: 30, height: 30, borderRadius: 15 }} />
            <Text style={[variant.boldLarge]}>Maria Lee</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TravelItem;
