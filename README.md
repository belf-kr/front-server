# front-server

사용자의 코스를 공유하는 Todo 서비스 Web UI!

1. Mobile UI를 Target으로 한 Web Application 입니다.
1. api-gateway를 이용하여 각각의 service를 호출합니다.

# Stack

1. node:v14.16.1
1. vscode
1. next.js
1. docker

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
