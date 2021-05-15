import { default as S } from "../../../styles/TodayLayout";
import PlantingGlass from "../../PlantingGlass";

function TodayLayout(): JSX.Element {
  return (
    <>
      <S.PlantingGlassSection>
        <PlantingGlass />
      </S.PlantingGlassSection>
      <S.TodoListSection></S.TodoListSection>
    </>
  );
}

export default TodayLayout;
