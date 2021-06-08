import { default as S } from "./style";

type props = {
  placeholder?: string;
  isMultiLine?: boolean;
  type?: string;
};

function Input({ placeholder, isMultiLine, type }: props): JSX.Element {
  if (isMultiLine) {
    return <S.Textarea placeholder={placeholder} />;
  } else {
    return <S.Input type={type} placeholder={placeholder} />;
  }
}

export default Input;
