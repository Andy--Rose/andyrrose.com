#!bin/bash

git pull
aws s3 sync ./ s3://andyrrose.com --acl public-read --delete --exclude ".git*" --profile arose