import { default as S } from '../../styles/NotificationButton';

function NotificationButton(): JSX.Element {
  return (
    <S.Frame>
      <S.Display/>
      <S.Icon>
        <path
          d="M15.45,9.32a4.61,4.61,0,0,0-.22-.51L11.78,2.12a3.59,3.59,0,0,0-6.55,0L1.78,8.81a4.67,4.67,0,0,0-.23.51A2.49,2.49,0,0,0,0,11.7v1.39a2.37,2.37,0,0,0,2.23,2.49h3.7C5.93,16.36,7.08,17,8.5,17a3.8,3.8,0,0,0,2.08-.58,1,1,0,0,0,.49-.84h3.7A2.37,2.37,0,0,0,17,13.09V11.7A2.49,2.49,0,0,0,15.45,9.32Z"
          />
      </S.Icon>
    </S.Frame>
  );
}

export default NotificationButton;