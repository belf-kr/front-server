# front-server

front-end를 위한 repo입니다.

# Stack

1. node:v14.16.1
1. vscode

# History

## 프로젝트 생성 방법

아래의 템플릿을 사용했습니다.

```shell
npx create-next-app --example with-typescript-eslint-jest front-server
```

1. `.git`을 제외하고 숨김파일까지 모두 찾아서 마이그레이션 헀습니다.
1. jest는 사용하지 않음으로 의존성을 제거하였습니다.
## 폴더 구조

```text
./
├── hooks
├── pages
├── public
├── states
├── styles
└── utils
```
- hooks : 모든 커스텀 훅
- pages : 외부 노출 페이지
- public : static 에셋
- states : recoil 전역 상태
- styles : 스타일
- utils : 기능 메소드들 (axios 포함)