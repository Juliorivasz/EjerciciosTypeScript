console.log("Hola mundo, mi primer programa en ts");
console.log("La verdad que aprendi mucho en esta seccion");

// TIPOS DE DATOS

// Primitios
const nombre: string = "Julio";
const edad: number = 24;
const esMayorEdad: boolean = true;
const billetera: undefined = undefined;
const saldo: null = null;

// Compuestos y Estructurados

// Objetos
const programador = {
  nombre: "Julio Rivas",
  casado: false,
};

// Arreglos
const notas: number[] = [9, 9, 9, 9, 9];
const materias: string[] = [
  "mate",
  "fisica",
  "ingles",
  "quimica",
  "laboratorio",
];
const aprob: boolean[] = [true, true, true, true, true];

// Enum
enum DiasClases {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
}

enum Colores {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul",
}

// Funciones

// con retorno
function sumar(a: number, b: number): number {
  return a + b;
}

// funcion flecha con retorno implicito
const restar = (a: number, b: number) => a - b;

// Funciones con parametros opcionales
const saludar = (nombre: string, edad?: number): string => {
  if (edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
  } else {
    return `Hola, mi nombre es ${nombre}`;
  }
};

// funciones con parametros por defecto
const saludar2 = (nombre: string, edad: number = 30): string => {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
};

// Definidos por el usuario
// class, interface, type

// Clases
class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
}

// Interfaces
// Basica
interface Persona {
  nombre: string;
  edad: number;
}

// interfaz con propiedades opcionales:
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// interfaz para funciones
interface Comparador {
  (a: number, b: number): boolean;
}

// interfaz para clases
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}

// Types

// Basico
type Numero = number;

// objeto literal
type Persona1 = {
  nombre: string;
  edad: number;
};

// type con union types
type Nombre = string | null;

// type con propiedades opcionales
type Producto1 = {
  nombre: string;
  precio: number;
  descripcion?: string;
};

// type para funciones
type Comparador1 = {
  (a: number, b: number): boolean;
};

// type para clases
type Persona2 = {
  nombre: string;
  edad: number;
  saludar(): void;
};

// Ejercicios
let interMiami = 11;
let fcDallas = 10;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
  let motivo: string = "";
  if (juegaMessi) {
    equipo1 += messi;
    motivo = " porque juega Messi";
  }
  if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
  if (equipo1 == equipo2) console.log("EMPATE");
  if (equipo1 < equipo2) console.log("Gana FC Dallas");
}
jugar(interMiami, fcDallas, juegaMessi);

// tipando objetos

type Programador = {
  nombre: String;
  tecnologias: string[];
  tomaMate?: boolean | null;
};

let programador1: Programador = {
  nombre: "Federico",
  tecnologias: ["react"],
};

let programador2: Programador = {
  nombre: "Julio",
  tecnologias: ["vue"],
  tomaMate: false,
};

function enviarCurriculum(programador: Programador) {
  console.log(`Este curriculum es de ${programador.nombre}`);
}

enviarCurriculum(programador1);
enviarCurriculum(programador2);

//Clases
class Pelicula {
  private nombre?: string = "";
  private protagonista?: string;
  private anio?: number;

  constructor(nombre: string, protagonista: string, anio: number) {
    this.nombre = nombre;
    this.protagonista = protagonista;
    this.anio = anio;
  }

  imprimirInformacion() {
    console.log(
      `La pelicula ${this.nombre} del año ${this.anio} fue protagonizada por ${this.protagonista}`
    );
  }

  proyectarEnCine() {
    console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
  }
}

const pelicula = new Pelicula("Troya", "Julio Rivas", 2000);

pelicula.imprimirInformacion();
pelicula.proyectarEnCine();

//Encapsulamiento y genericos
class Sorteo<T> {

  //Encapsulamiento
  private boleto?: T;

  constructor(private nombre: string) {}

  setNumero(boleto: T) {
    this.boleto = boleto;
  }

  getNumero() {
    return this.boleto;
  }

  getNombre() {
    return this.nombre;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.boleto}`;
  }

}

let sorteo = new Sorteo<number>("Julio Rivas");
sorteo.setNumero(14);
console.log(sorteo.sortear());
