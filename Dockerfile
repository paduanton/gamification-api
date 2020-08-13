FROM node:12.16.3

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install
