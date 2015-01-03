#!/bin/sh

docker run -d \
    -p 3000:3000
    -e JSBIN_ENV="" \
    -e JSBIN_HOST="" \
    -e JSBIN_PORT="" \
    -e JSBIN_DB_ADAPTER="" \
    -e JSBIN_MYSQL_HOST="" \
    -e JSBIN_MYSQL_USER="" \
    -e JSBIN_MYSQL_PASSWORD="" \
    -e JSBIN_MYSQL_DATABASS="" \
    -e JSBIN_SECRET="" \
    -e JSBIN_GITHUB_KEY="" \
    -e JSBIN_GITHUB_SECRET="" \
    remotty/jsbin
  
