console.log("--- Ejercicio 1 ---")

// let numero = parseInt(prompt("Ingrese un Numero"))

// for (let index = 1; index <= 10; index++) {
//   resultado = numero * index
//   if (numero === 0) {
//     console.log("Todo numero multiplicado por cero da cero")
//     break
//   } else if (numero >= 1) { console.log(numero + " por " + index + " es igual a " + resultado) }
// }

console.log("--- Ejercicio 2 ---")

// let acumulado = 0

// do {
// numero2 = parseInt(prompt("Ingrese un Numero del 0 al 9"))
// acumulado = acumulado + numero2

// }while (numero2 !== 0);

// console.log("Total Acumulado " + acumulado)
// console.log("Usted ingreso cero, el programa se detiene")



console.log("--- Ejercicio 3 ---")

// let numeroIncognita = 19
// let numeroIngresado = 0
// let contador = 0

// do {
//     numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 100"))
//     if (numeroIngresado > numeroIncognita) {console.log("Usted ha ingresado un numero mayor, Intentelo de Nuevo")}
//     else{console.log("Usted ha ingresado un numero menor, Intentelo de Nuevo")}

//     contador++
                
// } while (numeroIngresado != numeroIncognita)

//    console.log("FELICITACIONES!! Haz Adivinado el Número Incognita en " + contador + " Intentos")


console.log("--- Ejercicio 4 ---")

// let numero4 = parseInt(prompt("Ingrese un numero del 1 al 100"))
// let contador = 0
// for (let index = 1; index <= numero4; index++) {

//   let resto = numero4 % index
//   if (resto === 0) { contador++ }
// }

// if (contador === 2) {
//   console.log(numero4 + " es un número Primo")
// }
// else { console.log(numero4 + " no es un número Primo")}


console.log("--- Ejercicio 5 ---")


// let numero5 = parseInt(prompt("Ingrese un numero del 1 al 100"))

// for (let index = 1; index <= numero5; index++) {

//   let resto = numero5 % index
//   if (resto === 0) { console.log(index + " es uno de los divisores de " + numero5)}
// }


console.log("--- Ejercicio 6 ---")

// let equiposFutbol = ["Manchester United", "CA Boca Juniors", "Estudiantes de Mérida FC", "Atletico Nacional de Medellin", "Barcelona FC", "Inter Milan", "Bayern Munich", "Ajax", "AFA", "FVF"]

// for (let index = 0; index < equiposFutbol.length; index++) {
//     console.log(equiposFutbol[index])    
// }


console.log("--- Ejercicio 7 ---")

// let numero7 = []
// numero7[0] = parseInt(prompt("Ingrese un Numero"))
// numero7[1] = parseInt(prompt("Ingrese un Numero"))
// numero7[2] = parseInt(prompt("Ingrese un Numero"))
// numero7[3] = parseInt(prompt("Ingrese un Numero"))
// numero7[4] = parseInt(prompt("Ingrese un Numero"))
// numero7[5] = parseInt(prompt("Ingrese un Numero"))
// numero7[6] = parseInt(prompt("Ingrese un Numero"))
// numero7[7] = parseInt(prompt("Ingrese un Numero"))
// numero7[8] = parseInt(prompt("Ingrese un Numero"))
// numero7[9] = parseInt(prompt("Ingrese un Numero"))

// for (let index = 0; index < numero7.length; index++) {
//     numeroDuplicado = numero7[index] * 2
//     console.log(numeroDuplicado)    
// }


console.log("--- Ejercicio 8 ---")

let grupoFamiliar = [
    {nombre : "Manuel", edad : 45, parentesco : "El Padre", trabaja : true, generoMusica : "Rock"},
    {nombre : "Sharon", edad : 52, parentesco : "La Madre", trabaja : true, generoMusica : "Salsa"},
    {nombre : "Shantal", edad : 18, parentesco : "La Hija Mayor", trabaja : true, generoMusica : "Pop - Rock"},
    {nombre : "Luis Manuel", edad : 13, parentesco : "El Hijo Menor", trabaja : false, generoMusica : "Hip Hop"},
    {nombre : "Rocky", edad : 2, parentesco : "La Mascota", trabaja : false, generoMusica : "lo que escuchan los demas"}
]

for (let index = 0; index < grupoFamiliar.length; index++) {
 
  console.log("Presentamos a " + grupoFamiliar[index].nombre + " tiene " + grupoFamiliar[index].edad + " años de edad es " + grupoFamiliar[index].parentesco + " y le gusta escuchar " + grupoFamiliar[index].generoMusica)


    }


console.log("--- Ejercicio 9 ---")
   
let buscarImpar = [10, 21, 32, 48, 51, 58, 67, 74, 88, 91]

for (let index = 0; index < buscarImpar.length; index++) {
  let numeroImpar = buscarImpar[index] % 2
if (numeroImpar !== 0) {console.log(buscarImpar[index] + " Es Impar")
  }
  }


console.log("--- Ejercicio 10 ---") 
let numero10 = 0
let acumuladoPar = 0
let acumuladoImpar = 0

do {

numero10 = parseInt(prompt("Ingrese un Numero"))
if (numero10 % 2 === 0) {acumuladoPar = acumuladoPar + numero10
}else if(numero10 % 2 !== 0) {acumuladoImpar = acumuladoImpar + numero10
}
  
} while (numero10 !== 0)

if (numero10 % 2 === 0) {acumuladoPar = acumuladoPar + numero10
}else if(numero10 % 2 !== 0) {acumuladoImpar = acumuladoImpar + numero10
}


console.log("La suma total de numeros Pares es : " + acumuladoPar)
console.log("La suma total de numeros Impares es : " + acumuladoImpar)


console.log("--- Ejercicio 11 ---") 

let numeros11 = [87, 36, 48, 25, 39, 63, 31, 52, 30, 23]                       

console.log("El numero mas grande del array es " + Math.max.apply(null, numeros11))


console.log("--- Ejercicio 12 ---") 

let numeros12 = [87, 36, 48, 25, 39, 63, 31, 52, 30, 23]                       

console.log("El numero mas chico del array es " + Math.min.apply(null, numeros11))


console.log("--- Ejercicio 13 ---")


// let jugador1 = prompt("Jugador 1 Ingresa tu Nombre")
// let jugador2 = prompt("Jugador 2 Ingresa tu Nombre")

// console.log("JUGADOR 1: " + jugador1)
// console.log("JUGADOR 2: " + jugador2)

// let jugadaJugador1
// let jugadaJugador2

// do {
// jugadaJugador1 = prompt(jugador1 + " Ingresa piedra papel o tijera")
// jugadaJugador2 = prompt(jugador2 + " Ingresa piedra papel o tijera")

// if (jugadaJugador1 === jugadaJugador2) {alert(jugador1 + " y " + jugador2 + " ustedes han empatado, ingresen de nuevo su jugada")}
   
// } while (jugadaJugador1 === jugadaJugador2)

//   if ((jugadaJugador1 === "piedra" && jugadaJugador2 === "tijera") || (jugadaJugador1 === "papel" && jugadaJugador2 === "piedra") || (jugadaJugador1 === "tijera" && jugadaJugador2 === "papel") ) {console.log("FELICIDADSES!! " + jugador1 + " Haz GANADO")}
//   else if ((jugadaJugador1 === "tijera" && jugadaJugador2 === "piedra") || (jugadaJugador1 === "piedra" && jugadaJugador2 === "papel") || (jugadaJugador1 === "papel" && jugadaJugador2 === "tijera")) {console.log("FELICIDADSES!! " + jugador2 + " Haz GANADO")
//   }


console.log("--- Ejercicio 14 ---") 

let asterisco = "   "

for (let index = 0; index <= 4; index++) {

asterisco+= "*   "

console.log(asterisco)
  }


console.log("--- Ejercicio 15 ---") 

// let asterisco1 = [
//   {asterisco : "   *   *   *   *   *   "},
//   {asterisco : "   *   *   *   *    "},
//   {asterisco : "   *   *   *    "},
//   {asterisco : "   *   *     "},
//   {asterisco : "   *   "}
// ]

// for (let index = 0; index < asterisco1.length; index++) {

// console.log(asterisco1[index].asterisco)
// }
