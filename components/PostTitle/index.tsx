import { default as S } from "./style";

type props = {
  titleText: string;
};

function PostTitle({ titleText }: props): JSX.Element {
  return <S.Title>{titleText}</S.Title>;
}

export default PostTitle;
