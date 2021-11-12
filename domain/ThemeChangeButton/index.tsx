import { useRecoilState } from "recoil";

import styled from "styled-components";

import { themeState } from "../../states/app";

const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.brandColor.main};
  color: ${({ theme }) => theme.fontColor.main};
  float: right;

  height: 30px;
  width: 60px;
  border-radius: ${({ theme }) => theme.common.borderRadius.default}px;
`;

export default function ThemeChangeButton(): JSX.Element {
  const [theme, setTheme] = useRecoilState(themeState);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return <ButtonStyle onClick={themeToggler}>{theme === "dark" ? "Light" : "Dark"}</ButtonStyle>;
}
