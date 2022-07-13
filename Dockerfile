FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY next.config.js ./next.config.js

COPY jsconfig.json ./jsconfig.json

COPY server.js ./server.js

COPY .babelrc ./.babel.rc

COPY .prettierrc ./.prettierrc

COPY public ./public


COPY src ./src

CMD [ "yarn", "dev" ]
