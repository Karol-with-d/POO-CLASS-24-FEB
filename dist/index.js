"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class appNotas {
    constructor() {
        this.notas = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirNota();
    }
    pedirNota() {
        this.notas.question("Ingrese su nota: ", (respuesta) => {
            const nota = Number(respuesta);
            this.determinarEstado(nota);
            this.cerrar();
        });
    }
    determinarEstado(nota) {
        if (nota >= 9 && nota <= 10) {
            console.log("Excelente");
        }
        else if (nota >= 7 && nota <= 8.9) {
            console.log("Bueno");
        }
        else if (nota >= 6 && nota <= 6.9) {
            console.log("Regular");
        }
        else {
            console.log("Reprobado");
        }
    }
    cerrar() {
        this.notas.close();
    }
}
const app = new appNotas();
app.iniciar();
//# sourceMappingURL=index.js.map