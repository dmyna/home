#!/bin/bash

export DEV_MODE=true;
export NO_LOGS=true;
export NODE_OPTIONS=--experimental-vm-modules;

npx jest --config=jest.config.ts "$@";