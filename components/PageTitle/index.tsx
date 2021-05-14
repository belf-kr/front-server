import { default as S } from "../../styles/PageTitle";

type props = {
  titleText: string;
};

function PageTitle({ titleText }: props): JSX.Element {
  return <S.Title>{titleText}</S.Title>;
}

export default PageTitle;
