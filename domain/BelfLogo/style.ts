import styled from "styled-components";

import BelfIcon from "../../icons/BelfIcon";

const Box = styled.div`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  width: 70px;
`;

const Icon = styled(BelfIcon)`
  float: left;
`;

const Text = styled.a`
  font-size: ${({ theme }) => theme.common.fontSize.s600}px;
  font-weight: ${({ theme }) => theme.common.fontWeight.bold};
  float: right;
`;

export { Box, Icon, Text };
