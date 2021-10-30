import styled from "styled-components";

const TagBox = styled.div`
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  display: block;
  margin-right: 6px;
`;

const Hash = styled.a`
  color: ${({ theme }) => theme.brandColor.main};
`;

const Text = styled.a`
  color: ${({ theme }) => theme.fontColor.sub2};
`;

export { Hash, TagBox, Text };
