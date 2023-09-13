import { Color } from "./colors";

export default function getColor(isDark: boolean, intensity: number) {
  if (isDark) {
    return Color.gray[10 - intensity];
  } else {
    return Color.gray[intensity];
  }
}
