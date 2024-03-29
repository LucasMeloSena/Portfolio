import { DefaultText } from "src/styles/components/Common/Text/Text.style";

interface IText {
  text: string | number;
  fontSize: string;
  fontWeight: string;
  color: string;
  marginbottom: string;
  textalign: string;
}

function Title({
  text,
  fontSize,
  fontWeight,
  color,
  marginbottom,
  textalign,
}: IText) {
  return (
    <>
      <DefaultText
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        marginbottom={marginbottom}
        textalign={textalign}
      >
        {text}
      </DefaultText>
    </>
  );
}

export default Title;
