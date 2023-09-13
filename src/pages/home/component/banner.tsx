import React from "react";
import { Text, View } from "react-native";
import Wave from "./wave";
import { Svg } from "react-native-svg";
import { Color } from "../../../../themes/colors";
import { useTheme } from "../../../../themes/theme";
import getColor from "../../../../themes/get_color";
import variant from "../../../../themes/text_style";
import LinearGradient from "react-native-linear-gradient";

const Banner = () => {
  const { isDark, color } = useTheme();
  const height = 300;

  return (
    <LinearGradient colors={[getColor(isDark, 0), getColor(isDark, 1)]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.3 }}>
      <View style={{ alignItems: "center" }}>
        <Svg height={height}>
          <Wave height={height} amplitude={20} frequency={0.012} topColor={Color[color][2]} bottomColor={"white"} speed={0.03} />
          <Wave height={height} amplitude={15} frequency={0.015} topColor={Color[color][3]} bottomColor={"white"} speed={0.08} />
        </Svg>
        <View style={{ position: "absolute", top: height / 2 - 45, flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={[variant.headlineLarge, { color: getColor(isDark, 8) }]}>{`3,210,299`}</Text>
          <Text style={[variant.headlineSmall, { color: getColor(isDark, 8), marginBottom: 10 }]}>{`원`}</Text>
        </View>
      </View>
      {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ height, position: "relative" }}>
          <SineWave topColor={Color[color][2]} bottomColor={"white"} delay={0} amplitude={0.5} />
        </View>
        <View style={{ height, position: "absolute" }}>
          <SineWave topColor={Color[color][3]} bottomColor={"white"} delay={400} amplitude={0.3} />
        </View>
        <View style={{ height, position: "absolute" }}>
          <SineWave topColor={Color[color][4]} bottomColor={"white"} delay={1000} amplitude={0.2} />
        </View>
        <View style={{ position: "absolute", top: height / 2 - 45, flexDirection: "row", alignItems: "flex-end", alignSelf: "center" }}>
          <Text style={[variant.headlineLarge, { color: getColor(isDark, 8) }]}>{`3,210,299`}</Text>
          <Text style={[variant.headlineSmall, { color: getColor(isDark, 8), marginBottom: 10 }]}>{`원`}</Text>
        </View>
      </GestureHandlerRootView> */}
    </LinearGradient>
  );
};
export default Banner;
