import bell from "../../assets/icons/bell";

import { default as S } from "./style";

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
