import * as S from "./style";

type Props = {
  width: string;
  height: string;
};

/**
 * 로딩을 표시하는 아톰 컴포넌트 입니다. 로딩 화면 표시를 위해서는 해당 컴포넌트가 아닌 <LoadingSpinner />를 사용해주세요.
 */
export default function Loading({ width, height }: Props): JSX.Element {
  return (
    <S.Loader title="0" width={width} height={height}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 40 40">
        <path
          opacity="0.2"
          fill="#000"
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
        />
        <path
          fill="#000"
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
        >
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite" />
        </path>
      </svg>
    </S.Loader>
  );
}
