import { default as S } from "../../../styles/TodayLayout";
import PlantingGlass from "../../PlantingGlass";
import TodayTodoList from "../../TodayTodoList";

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
