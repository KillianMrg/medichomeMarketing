# Builder
FROM node:alpine As builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm build

# Final
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
