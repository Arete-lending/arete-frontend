# ./Dockerfile 
FROM node:16.13.1-alpine3.14 as build
USER root
WORKDIR /app
ENV TZ=Asia/Seoul

## Install packages
COPY *.json ./
COPY *.lock ./
COPY *.config.* ./
RUN npm install

COPY . .
RUN npm run build

# NGINX set up
FROM nginx:stable-alpine

# get build
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
