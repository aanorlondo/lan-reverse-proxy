# Stage 1: Build ReactJS app
FROM node:14-alpine AS build-stage
WORKDIR /app
COPY ./homepage/package*.json ./
RUN npm install
COPY ./homepage .
RUN npm run build
RUN rm -rf /app/homepage/node_modules

# Stage 2: Setup Nginx server
FROM nginx:alpine AS production-stage

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]