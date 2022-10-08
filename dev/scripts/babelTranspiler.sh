#!/bin/sh
# Arquivos de Desenvolvimento
npx babel dev/client/main.jsx --watch -d dev/client/js/ &
npx babel dev/client/modules/ --watch -d dev/client/js/modules/ &
# Arquivos de Produção
npx babel dev/client/main.jsx --watch --minified --source-maps true -d public/client/ &
npx babel dev/client/modules/ --watch --minified --source-maps true -d public/client/modules/ && fg