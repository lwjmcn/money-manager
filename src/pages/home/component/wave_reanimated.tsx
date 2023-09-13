import React, { useEffect } from "react";
import { useSharedValue, withTiming, withRepeat, withDelay } from "react-native-reanimated";
import Animated, { useDerivedValue, useAnimatedProps } from "react-native-reanimated";
import Svg, { LinearGradient, Path, Stop } from "react-native-svg";
import { SafeAreaView } from "react-native";
import { Dimensions } from "react-native";

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface SineWaveProps {
  topColor: string;
  bottomColor: string;
  delay: number;
  amplitude: number;
}
const SineWave = ({ topColor, bottomColor, delay, amplitude }: SineWaveProps) => {
  const width = Dimensions.get("window").width;
  const height = 300;

  const c1y = useSharedValue(0.5 - amplitude);
  const c2y = useSharedValue(0.5 + amplitude);

  useEffect(() => {
    c1y.value = withDelay(delay, withRepeat(withTiming(0.5 + amplitude, { duration: 2000 }), 0, true));
    c2y.value = withDelay(700 + delay, withRepeat(withTiming(0.5 - amplitude, { duration: 2000 }), 0, true));
  }, []);

  const point = useDerivedValue(() => ({
    left: { x: 0, y: 0.5 * height }, // left end point
    c1: { x: (1 / 3) * width, y: c1y.value * height }, // left control point
    c2: { x: (2 / 3) * width, y: c2y.value * height }, // rigth control point
    right: { x: width, y: 0.5 * height }, // right end point
  }));

  const path = useAnimatedProps(() => {
    const { left, c1, c2, right } = point.value;

    return {
      d: `M ${left.x} ${left.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${right.x} ${right.y} V ${height} H 0`,
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg style={{ width: width, height: 300 }}>
        <LinearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={topColor} stopOpacity={0.7} />
          <Stop offset="100%" stopColor={bottomColor} stopOpacity={0.3} />
        </LinearGradient>
        <AnimatedPath animatedProps={path} fill="url(#waveGradient)" stroke={topColor} strokeWidth={1} />
      </Svg>
    </SafeAreaView>
  );
};

export default SineWave;
