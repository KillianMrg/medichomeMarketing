# Builder
FROM node:latest As builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Final
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
