FROM node:14.16.1

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치: package.json과 package-lock.json을 모두 복사하기 위해 와일드카드를 사용
COPY package*.json ./

RUN npm i

# 앱 소스 추가
COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]