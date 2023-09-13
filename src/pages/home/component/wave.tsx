import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { LinearGradient, Path, Stop, Svg } from "react-native-svg";

interface WaveProps {
  height: number;
  amplitude: number;
  frequency: number;
  topColor: string;
  bottomColor: string;
  speed: number;
  style?: React.CSSProperties;
}
const Wave = ({ height, frequency, amplitude, topColor, bottomColor, speed }: WaveProps) => {
  const width = Dimensions.get("window").width;

  const [pathData, setPathData] = useState<string>("");

  useEffect(() => {
    let animationFrameId: number | null = null;
    let phase = 0;

    const animateWave = () => {
      phase += speed;
      const newPathData = createSineWavePath(width, height, amplitude, frequency, phase);
      setPathData(newPathData);
      animationFrameId = requestAnimationFrame(animateWave);
    };

    animateWave();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const createSineWavePath = (width: number, height: number, amplitude: number, frequency: number, phase: number): string => {
    const path = [];
    for (let x = 0; x <= width; x += 5) {
      const y = amplitude * Math.sin(frequency * x + phase) + height / 2;
      path.push(`${x},${y}`);
    }
    return `M0 ${height} L${path.join(" ")} L${width} ${height} Z`;
  };

  return (
    <View>
      <Svg width={width} height={height}>
        <LinearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={topColor} stopOpacity={0.8} />
          <Stop offset="100%" stopColor={bottomColor} stopOpacity={0.4} />
        </LinearGradient>
        <Path d={pathData} fill="url(#waveGradient)" stroke={topColor} strokeWidth={1} />
      </Svg>
    </View>
  );
};

export default Wave;
