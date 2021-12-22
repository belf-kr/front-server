# front-server

> 사용자의 코스를 공유하는 Todo 서비스 Web App!

1. 반응형으로 고려된 Web Application 입니다.
1. `api-gateway` 등 필요한 service를 사용하여 belf service 사용할 수 있도록 합니다.
1. [프로토타이핑](https://xd.adobe.com/view/ffec9bcc-87d9-4bc6-b873-721709411173-aabf) 를 참고하여 개발되었습니다.

# Stack

1. node:v14.16.1
1. vscode
1. next.js
1. docker
1. axios
1. recoil
1. styled-components

# 빠른 시작

1. `npm i && npm run dev` 를 이용해 nextjs를 시작합니다.

# 디렉터리 구조

```text
./
├── assets
├── components
├── data
├── hooks
├── layouts
├── libs
├── pages
├── public
├── states
├── styles
└── theme
```

- assets : icon 등 여러 에셋
- components : 컴포넌트
- data : 임시 json 데이터
- hooks : 모든 커스텀 훅
- layouts : 모든 레이아웃 컴포넌트
- libs : 기능 메소드들 (axios 포함)
- pages : 외부 노출 페이지
- public : static 에셋
- states : recoil 전역 상태
- styles : 스타일
- theme : 테마 스타일
