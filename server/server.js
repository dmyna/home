import fs from 'fs';
import http from 'http';
import exec from 'child_process';
import express from 'express';
import readline from 'readline';

const app = express();
const server = http.createServer(app);

var PORT = 10000;

app.use(express.static('./'));
server.listen(PORT);
console.log(`> Servidor iniciado na porta: ${PORT}`);