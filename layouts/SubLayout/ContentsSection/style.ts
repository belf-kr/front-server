import styled from "styled-components";

type ContentsSectionType = {
  isBottomContents: boolean;
};

const ContentsSection = styled.div<ContentsSectionType>`
  margin-top: 20px;
  margin: 20px 5px 0px 5px;
  margin-bottom: ${(props) => (props.isBottomContents ? "0px" : "100px")};
  overflow: visible;
`;

const style = {
  ContentsSection,
};

export default style;
