FROM node:18

WORKDIR /lia

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3334

CMD ["yarn", "start"]
