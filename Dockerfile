FROM node:12-alpine3.14
WORKDIR /http_rest
COPY package.json /http_rest
RUN npm install && npm cache clean --force
COPY . /http_rest
