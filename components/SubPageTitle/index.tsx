import { default as S } from "./style";

type props = {
  titleText: string;
};

function SubPageTitle({ titleText }: props): JSX.Element {
  return <S.Title>{titleText}</S.Title>;
}

export default SubPageTitle;
