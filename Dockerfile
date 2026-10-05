# Stage 1: Build the React/Vite website
FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# Stage 2: Serve the finished website with Apache
FROM httpd:2.4

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

EXPOSE 80
