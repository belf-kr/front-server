import * as S from "./style";

type props = {
  text: string;
  Icon?: JSX.Element;
  type?: "submit" | "reset" | "button" | undefined;
  bg?: string;
  fontColor?: string;
};

export default function Button({ text, Icon, type, bg, fontColor }: props): JSX.Element {
  return (
    <S.ButtonBox type={type} bg={bg}>
      <S.ContentsBox>
        {Icon}
        <S.TextBox fontColor={fontColor}>{text}</S.TextBox>
      </S.ContentsBox>
    </S.ButtonBox>
  );
}
