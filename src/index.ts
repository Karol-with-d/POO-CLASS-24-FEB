/*import * as readline from "readline";

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
}

pedirNota(): void{
    this.notas.question("Ingrese su nota: ", (respuesta: string) => {
        const nota = Number(respuesta);
        this.determinarEstado(nota);
        this.cerrar();
});
}
determinarEstado(nota: number): void{
    if (nota >= 9 && nota <= 10){
        console.log("Excelente");
    } else if (nota >= 7 && nota <= 8.9){
        console.log("Bueno");
    } else if (nota >= 6 && nota <= 6.9){
        console.log("Regular");
    } else {
        console.log("Reprobado");
    }
} 
cerrar(): void{
    this.notas.close();
}
}

const app = new appNotas();
app.iniciar(); */

import * as readline from "readline";

class Sistema{
    private rl: readline.Interface;
     
    constructor(){
        this.rl =readline.createInterface({
             input: process.stdin,
            output: process.stdout
        });

    }

    iniciar(): void {
    this.pedirusuario();

}

pedirusuario(): void{
this.rl.question("Ingrese su usuario: ", (usuario: string) => {
        this.pedircontraseña(usuario);
        
});

}

pedircontraseña(usuario: string): void {
        this.rl.question("Ingrese su contraseña: ", (contrasena: string) => {
            this.validar(usuario, contrasena);
            this.cerrar();
        });
    }

    validar(usuario: string, contraseña: string): void {

        
        if (usuario === "admin" && contraseña === "1234") {
            console.log("Rol: Administrador");
        } else if (usuario === "cliente" && contraseña === "1234") {
            console.log("Rol: Cliente");
        } else if (usuario === "invitado" && contraseña === "1234") {
            console.log("Rol: Invitado ");
        } else {
            console.log("Usuario o contraseña incorrectos");
        }
    }

cerrar(): void {
        this.rl.close();
    }
}

const app = new Sistema();
app.iniciar();