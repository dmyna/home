#!/bin/sh
# Arquivos de Desenvolvimento
npx babel dev/client/main.tsx --watch -d dev/client/js/ --extensions ".ts,.tsx" &
npx babel dev/client/modules/ --watch -d dev/client/js/modules/ --extensions ".ts,.tsx" &
# Arquivos de Produção
npx babel dev/client/main.tsx --watch --minified --source-maps true -d src/client/ --extensions ".ts,.tsx" &
npx babel dev/client/modules/ --watch --minified --source-maps true -d src/client/modules/ --extensions ".ts,.tsx" && fg