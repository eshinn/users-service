# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

CMD ["node", "./src/srv.js"]
