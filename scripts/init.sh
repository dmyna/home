#!/bin/sh
rm logs/server.out
touch logs/server.out
gnome-terminal -- tail -f logs/server.out
nodemon server/server.js > logs/server.out