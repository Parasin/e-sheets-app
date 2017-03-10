FROM nginx
WORKDIR /usr/share/nginx/html

EXPOSE 80

COPY build/unbundled /usr/share/nginx/html