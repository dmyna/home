#!/bin/bash

### Arquivos de Desenvolvimento
# Client-side
npx babel dev/client/main.tsx --watch -d dev/client/js/ --extensions ".ts,.tsx" &
npx babel dev/client/modules/ --watch -d dev/client/js/modules/ --extensions ".ts,.tsx" &
# Server-side
npx babel dev/server/index.ts --watch -d ./ --extensions ".ts" &
npx babel dev/server/modules/ --watch -d modules/ --extensions ".ts" &

### Arquivos de Produção
npx babel dev/client/main.tsx --watch --minified --source-maps true -d dist/client/ --extensions ".ts,.tsx" &
npx babel dev/client/modules/ --watch --minified --source-maps true -d dist/client/modules/ --extensions ".ts,.tsx" && fg