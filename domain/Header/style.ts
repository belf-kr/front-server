import styled from "styled-components";

const Box = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.bg};
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.main};
  padding: 16px 20px;
  height: 63px;
  width: 100%;
`;

const BelfLogoBox = styled.div`
  display: inline;
  float: left;
  min-width: 75px;
`;

const SearchBox = styled.div`
  display: inline;
  float: left;
  margin: 0px 0px 0px 40px;
  @media only screen and (max-width: 850px) {
    display: inline-block;
    float: right;
    margin: 0px 0px 0px 10px;
  }
`;

const ButtonBox = styled.div`
  margin-left: 10px;
  float: right;
  > button {
    height: 30px;
    width: 60px;
    padding: 0;
  }
`;

export { Box, SearchBox, BelfLogoBox, ButtonBox };
