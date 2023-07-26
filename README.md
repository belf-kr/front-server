# front-server

[한국어(KR)](./README.md) | [English](./README.en-US.md)

> 사용자의 코스를 공유하는 Todo 서비스 Web App!

1. 반응형으로 고려된 Web Application 입니다.
1. [api-gateway](https://github.com/belf-kr/api-gateway) 등 필요한 service를 사용하여 belf service 사용할 수 있도록 합니다.
1. 와이어프레임은 Adobe XD를 통하여 디자인되었으며 [프로토타이핑](https://xd.adobe.com/view/ffec9bcc-87d9-4bc6-b873-721709411173-aabf) 에서 확인할 수 있습니다.

# Stack

1. node:v14.16.1
1. vscode
1. next.js
1. docker
1. axios
1. recoil
1. styled-components

# 빠른 시작

## 개발 환경

1. `npm i` 으로 필요한 의존성을 설치합니다.
1. 필요에 따라 `.env.development` 에서 service의 호출 주소를 변경합니다.
   1. local 환경에서 API를 호출하는 경우 사용하려는 API의 Server가 Up 되어있어야합니다.
   1. API들은 [belf-kr/repositories](https://github.com/orgs/belf-kr/repositories) 에서 찾아보실 수 있으며 Server 실행 방법은 `README.md` 에 작성되어있습니다.
1. `npm run dev` 로 nextjs를 시작합니다.

## 제품 시작

> docker-compose으로 image build시 발생 이유를 모르는 `Error: Parsing error: Cannot destructure property 'isTypeVariable' of 'undefined' as it is undefined.` 에러가 발생하여 image build를 먼저하고 docker-compose으로 실행하도록 합니다.

```shell
docker build -t belf-front-server . --file=Dockerfile.dev
docker-compose up -d
```

위의 명령어를 입력해 docker image 생성 후 컨테이너를 생성합니다.

# 배포

`qa`, `prod` 으로 배포 환경이 구분되어 있으며 각 환경에 맞는 API의 Endpoint으로 호출해야 합니다.

이를 위해 배포 환경에 맞는 변수를 주입받아 image를 build 할 수 있도록 `.env.*` 및 `Dockerfile.*` 으로 분리되어 있습니다.

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
