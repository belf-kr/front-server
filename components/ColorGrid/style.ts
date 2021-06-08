import styled, { css } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  margin: 0px 38px;
  height: 100%;
`;

type itemType = {
  color: string;
};

const Item = styled.button<itemType>`
  background-color: ${(props) => props.color};
  border-radius: 100%;
  aspect-ratio: 1;
  position: relative;
  border: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;

type itemBorderType = {
  isChecked: boolean;
};

const ItemBorder = styled.div<itemBorderType>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  ${(props) =>
    props.isChecked
      ? css`
          border: 4px solid black;
          opacity: 0.2;
        `
      : null}
`;

const style = {
  Grid,
  Item,
  ItemBorder,
};

export default style;
