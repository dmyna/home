#!/bin/sh
# Arquivos de Desenvolvimento
npx babel client/jsx/ --watch -d client/dev_js/ &
npx babel modules/jsx/ --watch -d modules/dev_js/ &
# Arquivos Minificados
npx babel client/jsx/ --watch --minified --source-maps true -d client/js/ &
npx babel modules/jsx/ --watch --minified --source-maps true -d modules/js/ && fg