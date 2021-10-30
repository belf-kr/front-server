import styled from "styled-components";

const RadioColorsBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 16px;
  @media only screen and (max-width: 505px) {
    justify-content: center;
    display: grid;
    row-gap: 8px;
    grid-template-columns: repeat(5, 32px);
    grid-template-rows: repeat(2, 32px);
  }
`;

const ColorInput = styled.input.attrs({ type: "radio" })<{ color: string }>`
  background-color: ${(props) => props.color};
  appearance: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  cursor: pointer;
  :checked {
    border: 4px solid ${({ theme }) => theme.fontColor.sub2};
  }
`;

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

const DefaultTextArea = styled.textarea`
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
  background-color: ${({ theme }) => theme.backgroundColor.card};
  color: ${({ theme }) => theme.fontColor.main};

  padding: 10px 20px;
  width: 100%;
  border: none;

  resize: none;

  :focus {
    outline: none;
  }
`;

const TitleBox = styled.div`
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.main};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitleBox = styled.div`
  margin-top: 20px;
  height: 24px;
`;

const SubTitle = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s400}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
  color: ${({ theme }) => theme.fontColor.main};
`;

const SubmitButtonBox = styled.div`
  margin: 20px 0px;
`;

export { Title, TitleBox, Contents, SubTitle, SubTitleBox, ColorInput, DefaultInput, DefaultTextArea, RadioColorsBox, SubmitButtonBox };
