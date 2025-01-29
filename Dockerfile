FROM node:22.13-alpine

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json /app/
RUN npm install

COPY . /app