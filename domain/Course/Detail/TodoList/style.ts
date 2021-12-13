import styled from "styled-components";

const TodoBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
`;

const TitleBox = styled.div`
  height: 48px;
  margin-top: 20px;
  display: flex;
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
  margin-top: 7px;
`;

const AddButtonBox = styled.div`
  margin: 2px 0px;
  margin-left: auto;
  button {
    padding: 6px 12px 4px 12px;
  }
`;

export { Title, TitleBox, TodoBox, AddButtonBox };
