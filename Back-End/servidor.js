import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { Produto } from './produto.js';

const BANCODADOS = path.join(import.meta.dirname, 'baseado.txt');

function lerDados(arquivo) {
const dados = fs.readFileSync(arquivo, "utf-8")
.trim()
.split()
}