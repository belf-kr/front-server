import styled from "styled-components";

const DefaultInput = styled.input.attrs({ type: "text" })`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  color: ${({ theme }) => theme.fontColor.main};

  padding: 10px 20px;
  width: 100%;
  border: none;

  :focus {
    outline: none;
  }
`;

const TagsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  column-gap: 6px;
  row-gap: 4px;
`;

const TagBox = styled.div`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  display: flex;
  flex-direction: row;
  padding: 4px 10px;
  padding: 4px 6px 4px 10px;
  line-height: 20px;
  height: 30px;
`;

const TagTitleBox = styled.a`
  color: ${({ theme }) => theme.fontColor.main};
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
`;

const TagIconBox = styled.div`
  cursor: pointer;
`;

const TagCheckBox = styled.input.attrs({ type: "checkbox" })`
  visibility: collapse;
  width: 0;
`;

export { DefaultInput, TagBox, TagIconBox, TagTitleBox, TagsBox, TagCheckBox };
