import { DefaultTitle } from "src/styles/components/Common/Title/Title.style";

interface ITitle {
  text: string;
}

function Title({ text }: ITitle) {
  return (
    <>
      <DefaultTitle>{text}</DefaultTitle>
    </>
  );
}

export default Title;
