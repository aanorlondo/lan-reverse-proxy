#!/bin/bash

# clean first
docker rm -f LAN-PROXY-LOCAL
docker rmi negan/lan-proxy:local

# build the proxy
docker build -t negan/lan-proxy:local .
docker push negan/lan-proxy:local


# run the proxy
docker run \
    -d \
    -p 80:80 \
    --name LAN-PROXY-LOCAL\
    negan/lan-proxy:local