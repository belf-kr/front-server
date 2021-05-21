import styled from "styled-components";

const PlantingGlassSection = styled.div`
  max-width: 350px;
  height: 120px;
  margin: auto;
  margin-top: 10px;
  overflow: visible;
  position: sticky;
  top: 75px;
  z-index: 2;
`;

const TodoListSection = styled.div`
  max-width: 350px;
  margin: auto;
  margin-top: 10px;
  overflow-x: visible;
  z-index: -1;
`;

const RepresentativeLayout = {
  TodoListSection: TodoListSection,
  PlantingGlassSection: PlantingGlassSection,
};

export default RepresentativeLayout;
