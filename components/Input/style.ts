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

const Input = styled.input`
  ${InputAndTextarea}
`;

const Textarea = styled.textarea`
  ${InputAndTextarea}
  height: 120px;
  resize: none;
`;

const style = {
  Input,
  Textarea,
};

export default style;
