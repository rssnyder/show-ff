FROM node:18-alpine

WORKDIR /app

COPY src ./src
COPY public ./public
COPY package.json ./

RUN npm i

RUN npm run build

ENTRYPOINT npm run start
