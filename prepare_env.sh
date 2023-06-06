#!/bin/bash

export HOSTNAME=$(hostname)
export AUTH_SERVER="https://${HOSTNAME}/go-auth"

echo "REACT_APP_AUTH_SERVER=${AUTH_SERVER}" > "./homepage/.env"