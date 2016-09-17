#!bin/bash

workdir = "/home/arose/github/andyrrose.com"
cd $workdir
git pull
aws s3 sync $workdir s3://andyrrose.com --acl public-read --delete --exclude ".git*" --profile andyrrose.com