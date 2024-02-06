import { DefaultText } from "src/styles/components/Common/Text/Text.style";

interface IText {
  text: string | number;
  fontSize: string;
  fontWeight: string;
  color: string;
  marginBottom: string;
}

function Title({ text, fontSize, fontWeight, color, marginBottom }: IText) {
  return (
    <>
      <DefaultText
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        marginBottom={marginBottom}
      >
        {text}
      </DefaultText>
    </>
  );
}

export default Title;
