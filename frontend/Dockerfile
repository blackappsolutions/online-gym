FROM nginx:alpine

VOLUME /tmp

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/movement-fitness/ .
