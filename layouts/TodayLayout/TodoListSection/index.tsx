import { ReactNode } from "react";

import { default as S } from "./style";

type Props = {
  children?: ReactNode;
};

function TodoListSection({ children }: Props): JSX.Element {
  return <S.TodoListSection>{children}</S.TodoListSection>;
}

export default TodoListSection;
