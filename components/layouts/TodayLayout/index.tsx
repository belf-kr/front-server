import PlantingGlass from "../../PlantingGlass";
import TodayTodoList from "../../TodayTodoList";

import { default as S } from "./style";

function TodayLayout(): JSX.Element {
  return (
    <>
      <S.PlantingGlassSection>
        <PlantingGlass />
      </S.PlantingGlassSection>
      <S.TodoListSection>
        <TodayTodoList />
      </S.TodoListSection>
    </>
  );
}

export default TodayLayout;
