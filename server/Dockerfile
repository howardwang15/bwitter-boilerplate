FROM node:8.16.1-alpine
RUN mkdir -p /www/app/bwitter/server
WORKDIR /www/app/bwitter/server

COPY package.json /www/app/bwitter/server/
COPY package-lock.json /www/app/bwitter/server/

RUN npm i

COPY . /www/app/bwitter/server/

CMD ["npm", "start"]