FROM node:alpine3.10

ADD ./src/package*.json /src/
WORKDIR /src

RUN npm install
RUN npm install -g serve
