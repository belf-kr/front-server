import styled from "styled-components";

import Icon from "../../styles/Icon";

const Frame = styled.div`
  height: 90px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
`;

const Card = styled.div`
  max-width: 390px;
  height: 80px;
  background-color: white;
  margin: auto;
  margin-top: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 30px 30px 0px 0px;
`;

const MenuSection = styled.div`
  height: 100%;
  width: 75%;
  display: inline-block;
  padding: 20px 40px 36px 40px;
`;

const ButtonSection = styled.div`
  height: 100%;
  width: 25%;
  top: 0px;
  position: absolute;
  display: inline-block;
`;

const AddButton = styled.button`
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 74px;
  height: 74px;
  background-color: white;
  border: none;
  position: relative;
`;

const MenuIconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24px);
  column-gap: 20%;
`;

const MenuIconArea = styled.button`
  display: flex;
  height: 24px;
  background-color: white;
  border: none;
  position: relative;
`;

const style = {
  Icon: Icon,
  Frame: Frame,
  Card: Card,
  MenuSection: MenuSection,
  ButtonSection: ButtonSection,
  AddButton: AddButton,
  MenuIconSection: MenuIconSection,
  MenuIconArea: MenuIconArea,
};

export default style;
