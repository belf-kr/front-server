import { default as S } from "./style";

type props = {
  titleText: string;
};

function PageTitle({ titleText }: props): JSX.Element {
  return <S.Title>{titleText}</S.Title>;
}

export default PageTitle;
