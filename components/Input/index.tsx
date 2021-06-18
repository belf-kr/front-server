import { default as S } from "./style";

type props = {
  placeholder?: string;
  isMultiLine?: boolean;
  type?: string;
  onChange?: React.ChangeEventHandler<any>;
  borderRadius?: string;
};

function Input({ placeholder, isMultiLine, type, onChange, borderRadius = "10px" }: props): JSX.Element {
  if (isMultiLine) {
    return <S.Textarea placeholder={placeholder} onChange={onChange} borderRadius={borderRadius} />;
  } else {
    return <S.Input type={type} placeholder={placeholder} onChange={onChange} borderRadius={borderRadius} />;
  }
}

export default Input;
