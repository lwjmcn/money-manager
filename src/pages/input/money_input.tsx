import { InputTabs } from "../enum";
import InputLayout from "./component/input_layout";
import { useState } from "react";
import TextField from "./component/textfield";

const MoneyInput = ({ navigation }) => {
  const [nextDisabled, setNextDisabled] = useState<boolean>(true);
  const [money, setMoney] = useState<string>("0");

  const handleNext = () => {
    navigation.navigate(InputTabs.SECOND);
  };
  return (
    <InputLayout navigation={navigation} title="새로운 내역 입력하기" step={2} onNextPress={handleNext} nextDisabled={nextDisabled}>
      {/* 지출 금액 입력 */}
      <TextField title="지출 금액" type="numeric" value={money} setValue={setMoney} setNextDisabled={setNextDisabled} autoFocus={true} />
    </InputLayout>
  );
};
export default MoneyInput;
