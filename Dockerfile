FROM node:11.10.1-slim
MAINTAINER Victor Morales <electrocucaracha@gmail.com>

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npx", "pm2", "start", "ecosystem.config.js", "--no-daemon"]
