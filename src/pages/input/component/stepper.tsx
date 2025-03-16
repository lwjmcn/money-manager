import { Text, View } from "react-native";
import { Color } from "../../../../themes/colors";
import { useTheme } from "../../../../themes/theme";
import { Divider } from "react-native-paper";
import variant from "../../../../themes/text_style";
import { ColorThemes } from "../../enum";
import Icon from "../../../components/svg_icon";
import getColor from "../../../../themes/get_color";

interface SingleStepProps {
  color: ColorThemes;
  title: string;
  step: number;
  seq: number;
}
const SingleStep = ({ color, title, step, seq }: SingleStepProps) => {
  const isDone = step > seq;
  const isNow = step === seq;
  const stepColor = isDone ? Color[color][2] : isNow ? Color[color][5] : Color.gray[5];

  return (
    <View style={{ alignItems: "center", gap: 5 }}>
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: stepColor, alignItems: "center", justifyContent: "center" }}>
        {isDone ? <Icon name="CheckIcon" size={20} fill={"#fff"} /> : <Text style={[variant.normalSmall, { color: "#fff" }]}>{seq}</Text>}
      </View>
      <Text style={[variant.normalSmall, { color: stepColor, marginTop: 3, width: 50, textAlign: "center" }]}>{title}</Text>
    </View>
  );
};

interface StepperProps {
  step: number;
}
const Stepper = ({ step }: StepperProps) => {
  const { color } = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <SingleStep color={color} title="타입" step={step} seq={1} />
      <Divider style={{ marginBottom: 20, width: 30, height: 2 }} />
      <SingleStep color={color} title="금액" step={step} seq={2} />
      <Divider style={{ marginBottom: 20, width: 30, height: 2 }} />
      <SingleStep color={color} title="계좌" step={step} seq={3} />
      <Divider style={{ marginBottom: 20, width: 30, height: 2 }} />
      <SingleStep color={color} title="카테고리" step={step} seq={4} />
      <Divider style={{ marginBottom: 20, width: 30, height: 2 }} />
      <SingleStep color={color} title="세부 내용" step={step} seq={5} />
    </View>
  );
};
export default Stepper;
