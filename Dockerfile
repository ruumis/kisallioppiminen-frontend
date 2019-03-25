FROM node:10.8-alpine

ENV YARN_CACHE_FOLDER=/dev/shm/yarn-cache

WORKDIR /app

COPY package-lock.json package.json /app/

COPY . /app/

RUN npm install
RUN npm install -g typescript tslint
