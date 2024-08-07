FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5500

CMD [ "node", "index.js" ]