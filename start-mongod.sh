#!/bin/bash
mongod="/Users/majia/hailong/webDevelop/mongodb-osx-x86_64-3.4.9/bin/mongod"
config="/Users/majia/hailong/webDevelop/mongodb-osx-x86_64-3.4.9/bin/data/config/mongod.conf"

${mongod} --config ${config}

echo "mongod provider working"