#!/bin/bash

pid=`ps -A | grep mongod | awk '!/awk/ && !/grep/ {print $1}'`;

if [ "${pid}" != "" ];

then
    kill -2 ${pid};
    echo "mongodb closed"
fi

