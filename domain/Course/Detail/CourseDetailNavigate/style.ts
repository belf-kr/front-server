import styled from "styled-components";

const TabItemBox = styled.button<{ isSelect: boolean }>`
  display: inline-block;
  height: 30px;
  padding: 6px 16px 4px 16px;
  margin: 0px 5px;

  background-color: ${(props) => (props.isSelect ? props.theme.brandColor.main : props.theme.lineColor.main)};

  border-radius: 20px;
`;

const Text = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s300}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.medium};
  color: ${({ theme }) => theme.fontColor.main};
`;

const TabItemsBox = styled.div`
  white-space: nowrap;
  > button :first-child {
    margin-left: 25px;
  }
  > button :last-child {
    margin-right: 25px;
  }
`;

const ScrollBox = styled.div`
  height: 50px;
  padding-bottom: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: normal;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};

  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  z-index: 99;

  width: calc(100% + 40px);
  left: -20px;
`;

const BlurBox = styled.div`
  z-index: 1;
  position: absolute;
  backdrop-filter: blur(10px);
  width: calc(100% + 40px);
  height: 70px;
  top: -20px;
  left: -20px;
`;

const TabBox = styled.div`
  position: sticky;
  top: 82px;
  z-index: 99;
  margin-top: 40px;
`;
export { TabItemBox, TabItemsBox, ScrollBox, Text, BlurBox, TabBox };
