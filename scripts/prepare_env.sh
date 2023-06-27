#!/bin/bash

export HOSTNAME=$(hostname)
export AUTH_SERVER="https://${HOSTNAME}/go-auth"
export APPDETAILS_SERVER="https://${HOSTNAME}/appdetails-swagger/"

echo "REACT_APP_AUTH_SERVER=${AUTH_SERVER}" > "../homepage/.env"
echo "REACT_APP_APPDETAILS_SERVER=${APPDETAILS_SERVER}" >> "../homepage/.env"