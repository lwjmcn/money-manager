import { Keyboard, View } from "react-native";
import { Text, TextInput, TextInputProps } from "react-native-paper";
import getColor from "../../../../themes/get_color";
import variant from "../../../../themes/text_style";
import { useTheme } from "../../../../themes/theme";

interface TextFieldProps extends TextInputProps {
  type: "numeric" | "text";
  title: string;
  value: string;
  setValue: (v: string) => void;
  setNextDisabled: (v: boolean) => void;
  autoFocus: boolean;
}
const TextField = ({ title, type, value, setValue, setNextDisabled, autoFocus }: TextFieldProps) => {
  const { isDark } = useTheme();

  const checkNextEnabled = (v: string) => {
    if (v === "0" || v.length === 0) setNextDisabled(true);
    else setNextDisabled(false);
  };
  const handleBlur = () => {
    checkNextEnabled(value);
    Keyboard.dismiss();
  };
  const handleChangeText = (v: string) => {
    setValue(v);
    checkNextEnabled(v);
  };

  return (
    <View>
      <Text style={[variant.titleMedium, { paddingTop: 30, color: getColor(isDark, 10) }]}>{title}</Text>
      {type === "numeric" ? (
        <TextInput
          autoFocus={autoFocus}
          keyboardType="number-pad"
          value={value}
          onChangeText={v => handleChangeText(Number(v.replaceAll(",", "")).toLocaleString())}
          cursorColor={getColor(isDark, 5)}
          underlineColor={getColor(isDark, 5)}
          activeUnderlineColor={getColor(isDark, 5)}
          style={{ width: "100%", backgroundColor: "transparent", textAlign: "right" }}
          contentStyle={{ height: "auto", ...variant.headlineLarge, color: getColor(isDark, 10) }}
          editable={true}
          onBlur={handleBlur}
          right={
            <TextInput.Affix
              text="원"
              textStyle={{
                ...variant.headlineMedium,
                color: getColor(isDark, 10),
                height: 70,
                marginLeft: 5,
                textAlignVertical: "bottom",
              }}
            />
          }
        />
      ) : type === "text" ? (
        <TextInput
          autoFocus={autoFocus}
          value={value}
          placeholder={`${title}을 입력해주세요.`}
          onChangeText={handleChangeText}
          cursorColor={getColor(isDark, 5)}
          underlineColor={getColor(isDark, 5)}
          activeUnderlineColor={getColor(isDark, 5)}
          style={{ width: "100%", backgroundColor: "transparent" }}
          placeholderTextColor={getColor(isDark, 5)}
          contentStyle={{ ...variant.normalLarge, color: getColor(isDark, 10), paddingLeft: 2 }}
          editable={true}
          maxLength={20}
          dense={true}
          onBlur={handleBlur}
          right={<TextInput.Affix text={`(${value.length}/20)`} textStyle={{ ...variant.normalMedium, color: getColor(isDark, 5) }} />}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default TextField;
