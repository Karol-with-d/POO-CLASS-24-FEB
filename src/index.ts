import * as readline from "readline";

class appNotas {
    private notas: readline.Interface;

    constructor(){
        this.notas =readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
iniciar(): void{
    this.pedirNota();
}}

pedirNota(): void{
    this.notas.question("Ingrese su nota: ", (respuesta: string) => {
        const nota = Number(respuesta);
        this.determinarEstado(nota);
        this.cerrar();
})

determinarEstado(nota: Number): void{
    if (nota >= 9 && nota <= 10){
        console.log("Excelente");
    } else if (nota >= 7 && nota <= 8.9){
        console.log("Bueno");
    } else if (nota >= 6 && nota <= 6.9){
        console.log("Regular");
    } else {
        console.log("Reprobado");
    }
} cerrar(): void{
    this.this.notas.close();
}
}

const app = new appNotas();
app.iniciar();