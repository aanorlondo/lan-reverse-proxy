#!/bin/bash

# clean first
docker rm -f LAN-PROXY-LOCAL
docker rmi negan/lan-proxy:local


# dynamically configure the nginx proxy to be in the same network than the host
host_ip=$(ipconfig getifaddr en0)


# build the proxy
docker build -t negan/lan-proxy:local .

# push the image to remote
docker push negan/lan-proxy:local


# run the proxy
docker run \
    -d \
    -p 80:80 \
    --name LAN-PROXY-LOCAL \
    --add-host="host:${host_ip}" \
    negan/lan-proxy:local