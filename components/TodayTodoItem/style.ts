import styled from "styled-components";

import Icon from "../../styles/Icon";

const ButtonSection = styled.div`
  width: 120px;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
  z-index: -10;
`;

const CourseColor = styled.div<{ bgColor?: string }>`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: ${(props) => props.bgColor};
  display: inline-block;
`;

const CourseTitle = styled.a`
  font-family: "NanumBarunGothic", "serif";
  font-size: 13px;
  color: #afafaf;
  margin-left: 28px;
`;

const EventButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  border: 0px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  background-color: white;
  position: relative;
`;

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

const TodoItemSection = styled.div`
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;
`;

const TodoTitle = styled.a`
  font-family: "NanumBarunGothic", "serif";
  font-size: 14px;
  color: #747474;
  font-weight: bold;
  margin-left: 10px;
  position: absolute;
  transform: translateY(-50%);
  top: 56%;
`;

const TodoTitleSection = styled.div`
  height: 18px;
  position: relative;
`;

const TodayTodoItem = {
  TodoTitleSection: TodoTitleSection,
  CourseColor: CourseColor,
  TodoItemCard: TodoItemCard,
  TodoTitle: TodoTitle,
  CourseTitle: CourseTitle,
  TodoItemSection: TodoItemSection,
  ButtonSection: ButtonSection,
  EventButton: EventButton,
  Icon: Icon,
};

export default TodayTodoItem;
