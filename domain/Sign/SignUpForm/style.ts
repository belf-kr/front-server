import styled from "styled-components";

const TitleText = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  margin-left: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 30px;
  height: 30px;
  margin: auto;
`;

const SignBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  margin: 20px 0px 10px 0px;
`;

const DefaultInput = styled.input`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.bg};
  color: ${({ theme }) => theme.fontColor.main};

  padding: 16px 20px;
  width: 100%;
  border: none;

  :focus {
    outline: none;
  }
`;

const SubTitle = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
  color: ${({ theme }) => theme.fontColor.main};
`;

const SubTitleBox = styled.div`
  margin: 10px 0px;
`;

const ButtonBox = styled.div`
  margin: 10px 0px;
`;

const IconBox = styled.div`
  margin-right: 6px;
`;

const SingUpLabel = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
  color: ${({ theme }) => theme.fontColor.sub};
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;

export { ButtonBox, DefaultInput, IconBox, SignBox, SingUpLabel, SubTitle, SubTitleBox, TitleBox, TitleText };
