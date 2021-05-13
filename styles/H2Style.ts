import styled from "styled-components";

type highlightType = {
  highlight?: boolean;
};

const H2Style = styled.h2<highlightType>`
  color: ${(props) => {
    if (props.highlight) {
      return "red";
    }
    return "blue";
  }};
`;

export default H2Style;
