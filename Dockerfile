FROM node:19-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn build

CMD ["yarn", "start"]