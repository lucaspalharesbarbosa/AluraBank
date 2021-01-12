import { Imprimivel } from "../models/index.js";

export function EscreverNoConsole(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => objeto.logConsole());
}