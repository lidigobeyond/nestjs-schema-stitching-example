FROM node:12-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]