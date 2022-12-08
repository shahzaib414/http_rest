FROM node:12-alpine3.14
WORKDIR /http_rest
COPY package.json package-lock.json /http_rest
RUN npm ci && npm cache clean --force
COPY . /http_rest
