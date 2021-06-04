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

const Explaination = styled.a`
  font-family: "NanumBarunGothic", "serif";
  font-size: 12px;
  color: #afafaf;
  display: block;
  margin-top: 6px;
`;

const Tags = styled.a`
  font-family: "NanumBarunGothic", "serif";
  font-size: 10px;
  color: #d6d6d6;
  display: block;
  margin-top: 6px;
`;

const ContentSection = styled.div`
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

const Card = styled.div<{ left?: number }>`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  transform: translateX(${(props) => props.left}px);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  height: 100%;
  width: 100%;
  position: relative;
`;

const CourseItemSection = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  position: relative;
  z-index: 0;
`;

const CourseTitle = styled.a`
  font-family: "NanumBarunGothic", "serif";
  font-size: 18px;
  color: #747474;
  font-weight: bold;
  margin-left: 10px;
  position: absolute;
  transform: translateY(-50%);
  top: 56%;
`;

const CourseTitleSection = styled.div`
  height: 20px;
  position: relative;
`;

const DragArea = styled.div`
  height: 100%;
  width: 72px;
  float: right;
  position: absolute;
  top: 0px;
  right: 0px;
`;

const style = {
  CourseTitleSection: CourseTitleSection,
  CourseColor: CourseColor,
  Card: Card,
  Tags: Tags,
  ContentSection: ContentSection,
  CourseTitle: CourseTitle,
  Explaination: Explaination,
  CourseItemSection: CourseItemSection,
  ButtonSection: ButtonSection,
  EventButton: EventButton,
  Icon: Icon,
  DragArea: DragArea,
};

export default style;
