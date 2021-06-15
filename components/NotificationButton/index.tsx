import { default as S } from "./style";

import bell from "../../assets/icons/bell";

function NotificationButton(): JSX.Element {
  return (
    <S.Frame>
      <S.Display />
      <S.Icon {...bell}>
        <path d={bell.d} />
      </S.Icon>
    </S.Frame>
  );
}

export default NotificationButton;
