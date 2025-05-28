# Etapa 1: construir la app
FROM node:22 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Asegura que las variables de entorno lleguen al build
COPY .env .env

RUN npm run build

# Etapa 2: servir con NGINX
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN printf 'server {\n\
    listen 80;\n\
    server_name localhost;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
