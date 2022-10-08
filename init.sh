#!/bin/sh
rm output.out
touch output.output

gnome-terminal -- tail -f output.out
pwd > output.out
nohup nodemon server/server.js > output.out