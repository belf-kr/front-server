import styled from "styled-components";

type ContentsSectionType = {
  isNavNone: boolean;
};

const ContentsSection = styled.div<ContentsSectionType>`
  margin-bottom: ${(props) => (props.isNavNone ? "0px" : "100px")};
  overflow: visible;
`;

const style = {
  ContentsSection,
};

export default style;
