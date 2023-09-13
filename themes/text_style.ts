import { Color } from "./colors";
import { StyleSheet } from "react-native";

const variant = StyleSheet.create({
  headlineLarge: { fontSize: 66, fontWeight: "600", lineHeight: 76, fontFamily: "Pretendard", color: Color.gray[9] },
  headlineMedium: { fontSize: 30, fontWeight: "600", lineHeight: 36, fontFamily: "Pretendard", color: Color.gray[9] },
  headlineSmall: { fontSize: 22, fontWeight: "600", lineHeight: 32, fontFamily: "Pretendard", color: Color.gray[9] },
  titleLarge: { fontSize: 30, fontWeight: "600", lineHeight: 36, fontFamily: "Pretendard", color: Color.gray[9] },
  titleMedium: { fontSize: 22, fontWeight: "600", lineHeight: 26, fontFamily: "Pretendard", color: Color.gray[9] },
  boldLarge: { fontSize: 18, fontWeight: "600", lineHeight: 24, fontFamily: "Pretendard", color: Color.gray[9] },
  // boldMedium: { fontSize: 15, fontWeight: "600", lineHeight: 20, fontFamily: "Pretendard", color: Color.gray[9] },
  // boldSmall: { fontSize: 13, fontWeight: "600", lineHeight: 16, fontFamily: "Pretendard", color: Color.gray[9] },
  // boldExtraSmall: { fontSize: 11, fontWeight: "600", lineHeight: 14, fontFamily: "Pretendard", color: Color.gray[9] },
  normalLarge: { fontSize: 18, fontWeight: "500", lineHeight: 24, fontFamily: "Pretendard", color: Color.gray[9] },
  // normalMedium: { fontSize: 15, fontWeight: "500", lineHeight: 20, fontFamily: "Pretendard", color: Color.gray[9] },
  normalSmall: { fontSize: 13, fontWeight: "500", lineHeight: 16, fontFamily: "Pretendard", color: Color.gray[9] },
  // normalExtraSmall: { fontSize: 11, fontWeight: "500", lineHeight: 14, fontFamily: "Pretendard", color: Color.gray[9] },
  // lightLarge: { fontSize: 18, fontWeight: "400", lineHeight: 24, fontFamily: "Pretendard", color: Color.gray[9] },
  // lightMedium: { fontSize: 15, fontWeight: "500", lineHeight: 20, fontFamily: "Pretendard", color: Color.gray[9] },
  // lightSmall: { fontSize: 13, fontWeight: "400", lineHeight: 16, fontFamily: "Pretendard", color: Color.gray[9] },
  // lightExtraSmall: { fontSize: 11, fontWeight: "400", lineHeight: 14, fontFamily: "Pretendard", color: Color.gray[9] },
});

export default variant;
