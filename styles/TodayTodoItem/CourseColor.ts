import styled from "styled-components";

const CourseColor = styled.div<{bgColor?: string}>`
  border-radius: 50%;
  width:18px;
  height:18px;
  background-color: ${props => props.bgColor};
  display:inline-block;
`;

export default CourseColor;