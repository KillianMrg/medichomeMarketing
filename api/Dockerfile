FROM node:latest

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["./node_modules/.bin/pm2", "start", "startup.json", "--name", "API", "--no-daemon"]

