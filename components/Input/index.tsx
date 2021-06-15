import { default as S } from "./style";

type props = {
  placeholder?: string;
  isMultiLine?: boolean;
  type?: string;
  onChange?: React.ChangeEventHandler<any>;
};

function Input({ placeholder, isMultiLine, type, onChange }: props): JSX.Element {
  if (isMultiLine) {
    return <S.Textarea placeholder={placeholder} onChange={onChange} />;
  } else {
    return <S.Input type={type} placeholder={placeholder} onChange={onChange} />;
  }
}

export default Input;
