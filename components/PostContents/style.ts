import styled, { css } from "styled-components";

const InputAndTextarea = css`
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

const Textarea = styled.textarea`
  ${InputAndTextarea}
  min-height: 50px;
  resize: none;
`;

const style = {
  Textarea,
};

export default style;
