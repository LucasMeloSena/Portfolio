import { DefaultText } from "src/styles/components/Common/Text/Text.style";

interface IText {
  text: string | number;
  fontSize: string;
  fontWeight: string;
  color: string;
  marginBottom: string;
  textAlign: string;
}

function Title({ text, fontSize, fontWeight, color, marginBottom, textAlign }: IText) {
  return (
    <>
      <DefaultText
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        marginBottom={marginBottom}
        textAlign={textAlign}
      >
        {text}
      </DefaultText>
    </>
  );
}

export default Title;
