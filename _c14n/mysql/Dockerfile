FROM mysql:5.7.23
# https://hub.docker.com/_/mysql#initializing-a-fresh-instance
COPY initdb.d/* /docker-entrypoint-initdb.d/
COPY conf.d/* /etc/mysql/conf.d/
ENV MYSQL_PASSWORD=secret
ENV MYSQL_ROOT_PASSWORD=secret
