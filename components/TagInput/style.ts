import styled from "styled-components";

import Icon from "../../styles/Icon";

const Input = styled.input`
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;

  :focus {
    outline: none;
  }
`;

const TagsSection = styled.div`
  width: 100%;
  margin: 10px 0px;
  padding: 5px;
`;

const Tag = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 5px 8px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  color: #ffab74;
`;

const TagTextSection = styled.div`
  display: inline-block;
`;
const TagIconSection = styled.button`
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  display: inline-block;
  position: relative;
  margin-left: 5px;
  transform: translateY(-50%);
`;

const style = {
  Input,
  TagsSection,
  Tag,
  Icon,
  TagTextSection,
  TagIconSection,
};

export default style;
