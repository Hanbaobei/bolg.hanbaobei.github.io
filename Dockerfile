FROM nginx
LABEL authors="寒寒"
COPY ./ /usr/share/nginx/html

EXPOSE 80