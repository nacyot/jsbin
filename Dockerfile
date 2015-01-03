FROM node:latest
MAINTAINER Daekwon Kim<propellerheaven@gmail.com>

ADD . /opt/jsbin
WORKDIR /opt/jsbin

ENV JSBIN_CONFIG /opt/jsbin/docker/config.json
ENV NODE_ENV production

RUN \
  npm install -g grunt-cli &&\
  npm install &&\
  grunt build

# ENV JSBIN_ENV
# ENV JSBIN_HOST
# ENV JSBIN_PORT
# ENV JSBIN_DB_ADAPTER
# ENV JSBIN_MYSQL_HOST
# ENV JSBIN_MYSQL_USER
# ENV JSBIN_MYSQL_PASSWORD
# ENV JSBIN_MYSQL_DATABASE
# ENV JSBIN_SECRET
# ENV JSBIN_GITHUB_KEY
# ENV JSBIN_GITHUB_SECRET

EXPOSE 3000
CMD \
  /opt/jsbin/docker/setup_configs.sh &&\
  /opt/jsbin/docker/run.sh

