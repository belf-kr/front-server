# front-server

[한국어(KR)](./README.md) | [`English`](./README.en-US.md)

> Todo Service Web App to share your course!

1. A web application considered reactive.
1. Enable the use of the required service, such as [api-gateway](https://github.com/belf-kr/api-gateway).
1. The wire frame is designed by Adobe XD and can be found at [prototyping](https://xd.adobe.com/view/ffec9bcc-87d9-4bc6-b873-721709411173-aabf).

# Stack

1. node:v14.16.1
1. vscode
1. next.js
1. docker
1. axios
1. recoil
1. styled-components

# A quick start

## Development environment

1. Install the required dependencies with `npm i`.
1. If necessary, Change the calling address of the service in `env.development`.
   1. When calling an API in a local environment, the API service should be run.
   1. The APIs can be found at [belf-kr/repository](https://github.com/orgs/belf-kr/repositories) and how to run the server is written at `README.md`.
1. Start nextjs with `npm run dev`.

## Launch Product

> Build the docker image manually and run `docker-compose` to avoid unclear error ` Error: Parsing error: Cannot destruction property 'isTypeVariable' of 'undefined'`

```shell
docker build -t belf-front-server . --file=Dockerfile.dev
docker-compose up -d
```

Enter the command above to create a docker image and then create a container.

# Deployment

The deployment environment is separated by `qa` and `prod` and must be called to the endpoint of the API for each environment.

To this end, we can build the image by injecting variables suitable for the deployment environment separated by `env.*` and `Dockerfile*`.

# Directory structure

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

- assets : icon, and many other assets
- components : components
- data : temporary json data
- hooks : all custom hooks
- layouts : all layout components
- libs : functional methods (including axios)
- pages : External exposure page
- public : static esset
- states : Recoil global status
- styles : style
- theme : Theme Style
