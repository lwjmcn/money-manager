import { Button, Text } from "react-native-paper";
import { useTheme } from "../../../../themes/theme";
import variant from "../../../../themes/text_style";
import { Color } from "../../../../themes/colors";
import getColor from "../../../../themes/get_color";

interface NextButtonProps {
  onPress: () => void;
  disabled: boolean;
}
const NextButton = ({ onPress, disabled }: NextButtonProps) => {
  const { isDark, color } = useTheme();

  return (
    <Button
      mode="contained"
      disabled={disabled}
      onPress={() => {
        onPress();
      }}
      buttonColor={Color[color][5]}
      contentStyle={{ height: 56 }}
      style={{ borderRadius: 10 }}
      labelStyle={[variant.boldLarge, { color: getColor(isDark, 0) }]}>
      다음
    </Button>
  );
};

export default NextButton;
