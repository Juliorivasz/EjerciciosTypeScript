"use strict";
console.log("Hola mundo, mi primer programa en ts");
console.log("La verdad que aprendi mucho en esta seccion");
// TIPOS DE DATOS
// Primitios
const nombre = "Julio";
const edad = 24;
const esMayorEdad = true;
const billetera = undefined;
const saldo = null;
// Compuestos y Estructurados
// Objetos
const programador = {
    nombre: "Julio Rivas",
    casado: false,
};
// Arreglos
const notas = [9, 9, 9, 9, 9];
const materias = [
    "mate",
    "fisica",
    "ingles",
    "quimica",
    "laboratorio",
];
const aprob = [true, true, true, true, true];
// Enum
var DiasClases;
(function (DiasClases) {
    DiasClases[DiasClases["Lunes"] = 0] = "Lunes";
    DiasClases[DiasClases["Martes"] = 1] = "Martes";
    DiasClases[DiasClases["Miercoles"] = 2] = "Miercoles";
    DiasClases[DiasClases["Jueves"] = 3] = "Jueves";
    DiasClases[DiasClases["Viernes"] = 4] = "Viernes";
})(DiasClases || (DiasClases = {}));
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "azul";
})(Colores || (Colores = {}));
// Funciones
// con retorno
function sumar(a, b) {
    return a + b;
}
// funcion flecha con retorno implicito
const restar = (a, b) => a - b;
// Funciones con parametros opcionales
const saludar = (nombre, edad) => {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
};
// funciones con parametros por defecto
const saludar2 = (nombre, edad = 30) => {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
};
// Definidos por el usuario
// class, interface, type
// Clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}
// Ejercicios
let interMiami = 11;
let fcDallas = 10;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2)
        console.log("EMPATE");
    if (equipo1 < equipo2)
        console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);
let programador1 = {
    nombre: "Federico",
    tecnologias: ["react"],
};
let programador2 = {
    nombre: "Julio",
    tecnologias: ["vue"],
    tomaMate: false,
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(programador1);
enviarCurriculum(programador2);
//Clases
class Pelicula {
    constructor(nombre, protagonista, anio) {
        this.nombre = "";
        this.nombre = nombre;
        this.protagonista = protagonista;
        this.anio = anio;
    }
    imprimirInformacion() {
        console.log(`La pelicula ${this.nombre} del año ${this.anio} fue protagonizada por ${this.protagonista}`);
    }
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
    }
}
const pelicula = new Pelicula("Troya", "Julio Rivas", 2000);
pelicula.imprimirInformacion();
pelicula.proyectarEnCine();
//Encapsulamiento y genericos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(boleto) {
        this.boleto = boleto;
    }
    getNumero() {
        return this.boleto;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.boleto}`;
    }
}
let sorteo = new Sorteo("Julio Rivas");
sorteo.setNumero(14);
console.log(sorteo.sortear());
