import styled from "styled-components";

type InputSectionType = {
  marginTop?: string;
};

const InputSection = styled.div<InputSectionType>`
  width: 100%;
  margin: 20px 0px 0px 0px;
  margin-top: ${(props) => props.marginTop};
`;

const style = {
  InputSection,
};

export default style;
