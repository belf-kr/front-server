import styled from "styled-components";

const TodoItemCard = styled.div<{ left?: number }>`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  transform: translateX(${(props) => props.left}px);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export default TodoItemCard;
