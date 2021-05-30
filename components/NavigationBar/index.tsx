import { default as S } from "./style";

import addCross from "../../assets/icons/addCross";
import home from "../../assets/icons/home";
import course from "../../assets/icons/course";
import board from "../../assets/icons/board";
import user from "../../assets/icons/user";

function NavigationBar(): JSX.Element {
  return (
    <S.Frame>
      <S.Card>
        <S.MenuSection>
          <S.MenuIconSection>
            <S.MenuIconArea>
              <S.Icon {...home}>
                <path d={home.d} />
              </S.Icon>
            </S.MenuIconArea>
            <S.MenuIconArea>
              <S.Icon {...course}>
                <path d={course.d} />
              </S.Icon>
            </S.MenuIconArea>
            <S.MenuIconArea>
              <S.Icon {...board}>
                <path d={board.d} />
              </S.Icon>
            </S.MenuIconArea>
            <S.MenuIconArea>
              <S.Icon {...user}>
                <path d={user.d} />
              </S.Icon>
            </S.MenuIconArea>
          </S.MenuIconSection>
        </S.MenuSection>
        <S.ButtonSection>
          <S.AddButton>
            <S.Icon {...addCross}>
              <path d={addCross.d} />
            </S.Icon>
          </S.AddButton>
        </S.ButtonSection>
      </S.Card>
    </S.Frame>
  );
}

export default NavigationBar;
