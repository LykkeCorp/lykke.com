FROM nginx
ARG build=./out
WORKDIR /usr/share/nginx/html
COPY $build .