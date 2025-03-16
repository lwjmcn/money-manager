import { Text } from "react-native";
import { InputTabs, Transfers } from "../enum";
import { useTheme } from "../../../themes/theme";
import InputLayout from "./component/input_layout";
import { useState } from "react";
import { SegmentedButtons } from "react-native-paper";
import variant from "../../../themes/text_style";
import getColor from "../../../themes/get_color";
import TextField from "./component/textfield";
import { Color } from "../../../themes/colors";

const TypeInput = ({ navigation }) => {
  const { isDark, color } = useTheme();

  const [nextDisabled, setNextDisabled] = useState<boolean>(true);
  const [transferType, setTransferType] = useState<Transfers>(Transfers.EXPENSE);
  const [title, setTitle] = useState<string>("");

  const handleNext = () => {
    navigation.navigate(InputTabs.MONEY);
  };

  return (
    <InputLayout navigation={navigation} title="새로운 내역 입력하기" step={1} onNextPress={handleNext} nextDisabled={nextDisabled}>
      {/* 타입 입력 :: 수입/지출/이체/환전 */}
      <Text style={[variant.titleMedium, { paddingTop: 30, color: getColor(isDark, 10) }]}>입출금 구분</Text>
      <SegmentedButtons
        value={transferType}
        onValueChange={v => setTransferType(v)}
        style={{ width: "100%", marginVertical: 20 }}
        theme={{ colors: { secondaryContainer: Color[color][5] } }}
        buttons={[
          {
            value: Transfers.EXPENSE,
            label: Transfers.EXPENSE,
            icon: "account-arrow-right",
            checkedColor: Color.gray[0],
            uncheckedColor: getColor(isDark, 6),
            labelStyle: { fontSize: 16, fontWeight: "600", lineHeight: 20, fontFamily: "Pretendard" },
            style: { borderRadius: 8, borderColor: Color[color][5] },
          },
          {
            value: Transfers.INCOME,
            label: Transfers.INCOME,
            icon: "account-arrow-left",
            checkedColor: Color.gray[0],
            uncheckedColor: getColor(isDark, 6),
            labelStyle: { fontSize: 16, fontWeight: "600", lineHeight: 20, fontFamily: "Pretendard" },

            style: { borderColor: Color[color][5] },
          },
          {
            value: Transfers.TRANSFER,
            label: Transfers.TRANSFER,
            icon: "account-switch",
            checkedColor: Color.gray[0],
            uncheckedColor: getColor(isDark, 6),
            labelStyle: { fontSize: 16, fontWeight: "600", lineHeight: 20, fontFamily: "Pretendard" },
            style: { borderRadius: 8, borderColor: Color[color][5] },
          },
          // {
          //   value: Transfers.CURRENCY,
          //   label: Transfers.CURRENCY,
          //   icon: "currency-usd",
          //   checkedColor: Color.gray[0],
          //   uncheckedColor: getColor(isDark, 6),
          //             labelStyle: { fontSize: 16, fontWeight: "600", lineHeight: 20, fontFamily: "Pretendard" },

          //   style: { borderRadius: 8, borderColor: Color[color][5] },
          //   // onPress
          // },
        ]}
      />
      {/* 제목 입력 */}
      <TextField title="제목" type="text" value={title} setValue={setTitle} setNextDisabled={setNextDisabled} autoFocus={true} />
    </InputLayout>
  );
};
export default TypeInput;
