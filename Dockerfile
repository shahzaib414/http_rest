FROM node:12-alpine3.14
WORKDIR /http_server
COPY package.json package-lock.json /http_server
RUN npm ci && npm cache clean --force
COPY . /http_server
