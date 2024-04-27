console.log("-------Ejercicio 1-------")

let edadHija = 18

let edadSobrina = 3

if (edadHija > edadSobrina) {
    console.log("Mi Hija es Mayor")
}

console.log("-------Ejercicio 2-------")

let diaNacimientoHija = 19
let numeroFavorito = 19

if (numeroFavorito == diaNacimientoHija) {
    console.log("Son Iguales")
} else { console.log("Son Diferentes") }


console.log("-------Ejercicio 3-------")

let edadPrimo = 44
let miEdad = 45

if (miEdad > edadPrimo) {
    console.log("soy mayor a mi primo")
}
else if (edadPrimo > miEdad) {
    console.log("Mi Primo es Mayor que yo")
} else {
    console.log("Tenemos la misma Edad")
}

console.log("-------Ejercicio 4-------")

let Luis = 44
let David = 44
let Santiago = 44

if (Luis < David && Luis < Santiago) { console.log("Luis es el menor") }
else if (David < Luis && David < Santiago) { console.log("David es el menor") }
else if (David == Santiago && David == Luis) { console.log("Los tres amigos son de la misma edad") }
else { console.log("Santiago es el menor") }


console.log("-------Ejercicio 5-------")

let persona1 = {
    nombre: "Carlos",
    edad: 49,
    altura: 180
}

let persona2 = {
    nombre: "Freddy",
    edad: 52,
    altura: 172
}

if (persona1.altura > persona2.altura) {
    console.log("Carlos es mas alto que Freddy")
} else {
    console.log("Freddy es mas alto que Carlos")
}

if (persona1.edad > persona2.edad) {
    console.log("Carlos es mayor que Freddy")
} else {
    console.log("Freddy es mayor que Carlos")
}


console.log("-------Ejercicio 6-------")

// let nombre = prompt("Ingrese su Nombre")
// let edad = parseInt(prompt("Ingrese su Edad"))
// let altura = parseInt(prompt("Ingrese su Estatura en centimetros (solo numeros"))
// let vision = parseInt(prompt("Ingrese grado de vison numero del 1 al 10"))

// if ((edad > 18) && (altura > 150) && ((vision >= 8) && (vision <=10))) {
//     console.log("Esta usted capacitado para conducir")}
//     else{console.log("Usted no cumple los requisitos minimos para obtener su licencia");}


console.log("-------Ejercicio 7-------")

let miNombre = "manuel"
let nombreCliente = prompt("Ingrese su Nombre (solo minusculas)")
let poseePase = prompt("Posee Pase Ingrese vip o normal (solo minusculas)")
// let poseeEntrada = prompt("Posee Entrada Ingrese si o no (solo minusculas)")
// let utilizaEntrada = prompt("Desea usar su Entrada Ingrese si o no (solo minusculas)")

if ((miNombre == nombreCliente) || (poseePase == "vip")) {
    console.log("Sea usted Bienvenido ADELANTE")
}
else if (let poseeEntrada == "si"){let utilizaEntrada = prompt("Desea usar su Entrada Ingrese si o no (solo minusculas)")}
if (utilizaEntrada == "si") {console.log("Sea usted Bienvenido ADELANTE")}
    
else{console.log("ADIOS")}
    




