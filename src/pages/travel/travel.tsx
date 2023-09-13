import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import TravelItem from "./component/travel_item";
import getColor from "../../../themes/get_color";
import { useTheme } from "../../../themes/theme";
import variant from "../../../themes/text_style";
import { Searchbar } from "react-native-paper";
import { Color } from "../../../themes/colors";
import { useState } from "react";

const Travel = () => {
  const { isDark, color } = useTheme();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const travel_data = [
    {
      id: 1,
      title: "일본, 후쿠오카",
      duration: "2021.01.01 - 2021.01.05",
      image: "https://source.unsplash.com/weekly?fukuoka",
    },
    {
      id: 2,
      title: "Discover all stories",
      duration: "2021.03.23 - 2021.03.31",
      image: "https://source.unsplash.com/weekly?hokkaido",
    },
    {
      id: 3,
      title: "Discover all stories",
      duration: "2021.03.23 - 2021.03.31",
      image: "https://source.unsplash.com/weekly?tokyo",
    },
    {
      id: 4,
      title: "Discover all stories",
      duration: "2021.03.23 - 2021.03.31",
      image: "https://source.unsplash.com/weekly?sapporo",
    },
  ];

  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: getColor(isDark, 0) }}>
      <Text style={[variant.titleLarge, { color: getColor(isDark, 9), margin: 15, marginTop: 30 }]}>여행</Text>
      <View style={{ flexGrow: 1, padding: 10 }}>
        <Searchbar
          value={searchQuery}
          onChange={e => setSearchQuery(e.nativeEvent.text)}
          placeholder="검색어를 입력하세요."
          inputStyle={[variant.normalLarge, { minHeight: 42 }]}
          style={{ backgroundColor: getColor(isDark, 2), borderRadius: 20, maxHeight: 40, marginHorizontal: 5, marginBottom: 10 }}
        />
        <ScrollView style={{ padding: 10, marginBottom: 60 }} contentContainerStyle={{ flexGrow: 1 }}>
          <Text>등록칸</Text>
          <View style={{ flexGrow: 1 }}>
            {travel_data.map(data => (
              <TravelItem key={data.id} title={data.title} duration={data.duration} image={data.image} />
            ))}
          </View>
          <View style={{ height: 30 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Travel;
