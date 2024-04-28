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

let nombre = prompt("Ingrese su Nombre")
let edad = parseInt(prompt("Ingrese su Edad"))
let altura = parseInt(prompt("Ingrese su Estatura en centimetros (solo numeros"))
let vision = parseInt(prompt("Ingrese grado de vison numero del 1 al 10"))

if ((edad > 18) && (altura > 150) && ((vision >= 8) && (vision <=10))) {
    console.log("Esta usted capacitado para conducir")}
    else{console.log("Usted no cumple los requisitos minimos para obtener su licencia");}


console.log("-------Ejercicio 7-------")

let miNombre = "manuel"
let nombreCliente = prompt("Ingrese su Nombre (solo minusculas)")
let poseePase = prompt("Posee Pase Ingrese vip o normal (solo minusculas)")
let poseeEntrada = prompt("Posee usted entrada Ingrese si o no (solo minusculas)")


if ((miNombre == nombreCliente) || (poseePase == "vip")) {
    console.log("Sea usted Bienvenido ADELANTE")
}
else if (poseeEntrada === "si") {
    let deseaUtilizarla = prompt("Desea Utilizar su Entrada")
    if (deseaUtilizarla === "si") { console.log("Sea usted Bienvenido ADELANTE") }
    else {console.log("De Acuerdo, Que tenga un lindo día. HASTA LUEGO");}
}

else {
    let deseaComprarEntrada = prompt("Desea comprar una entrada si o no (solo minusculas)")
    if (deseaComprarEntrada === "si") {
        let dineroDisponible = parseInt(prompt("Ingrese dinero disponible para comprar"))
        if (dineroDisponible >= 1000) { console.log("Sea usted Bienvenido ADELANTE") }
        else { console.log("Compra Rechazada. Intente otro medio de pago"); }
    } else{console.log("De Acuerdo, Que tenga un lindo día. HASTA LUEGO");}
    }


console.log("-------Ejercicio 8-------")


let numeroIncognita = 6

let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"))

if (numeroIngresado === numeroIncognita) {console.log("Ganaste haz adivinado el Numero")}
else if (numeroIngresado > numeroIncognita) {console.log("El numero ingresado es mayor, Vuelve a Intentarlo")}
else {console.log("El numero ingresado es menor, Vuelve a Intentarlo")   
}

numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"))

if (numeroIngresado === numeroIncognita) {console.log("Ganaste haz adivinado el Numero")}
else if (numeroIngresado > numeroIncognita) {console.log("El numero ingresado es mayor, Vuelve a Intentarlo")}
else {console.log("El numero ingresado es menor, Vuelve a Intentarlo")   
}    

numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10"))

if (numeroIngresado === numeroIncognita) {console.log("Ganaste haz adivinado el Numero")}
else if (numeroIngresado > numeroIncognita) {console.log("El numero ingresado es mayor, Vuelve a Intentarlo")}
else {console.log("El numero ingresado es menor, Vuelve a Intentarlo")     
}    


console.log("-------Ejercicio 9-------")

let edadUsuario = parseInt(prompt("Ingrese su Edad"))

if ((edadUsuario >= 0) && (edadUsuario < 13)) {console.log("Eres un Infante")}
else if ((edadUsuario >= 13) && (edadUsuario < 19)) {console.log("Eres un Adolescente")
    }
    else if ((edadUsuario >= 19) && (edadUsuario < 46)) {console.log("Eres un Mayor Joven")}
    else if ((edadUsuario >= 45) && (edadUsuario <= 100)) {console.log("Eres un Anciano")}
    else{console.log("Realmente tiene usted la edad ingresada");}
    



console.log("-------Ejercicio 10-------")

let primerJugador = prompt("Ingrese en minuscula una de las siguientes opciones (piedra papel o tijera")
let segundoJugador = prompt("Ingrese en minuscula una de las siguientes opciones (piedra papel o tijera")

if (primerJugador === segundoJugador) {console.log("Han Empatado")}
else if ((primerJugador === "papel" && segundoJugador === "piedra") || (primerJugador === "piedra" && segundoJugador === "tijera") || (primerJugador === "tijera" && segundoJugador === "papel")) {console.log("Ha ganado Primer Jugador")}

else if ((segundoJugador === "papel" && primerJugador === "piedra") || (segundoJugador === "piedra" && primerJugador === "tijera") || (segundoJugador === "tijera" && primerJugador === "papel")) {console.log("Ha ganado Segundo Jugador")}

else{console.log("Uno de los jugadores hizo trampa")}


console.log("-------Ejercicio 11-------")

let color = prompt("Ingrese un Color (texto en minuscula")

switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de Color")
        break

    case "verde":
        console.log("El Color de la Naturaleza")
        break

    case "azul":
        console.log("El Color del Agua")
        break

    case "amarillo":
        console.log("El Color del Sol")
        break

    case "rojo":
        console.log("El Color del Fuego")
        break

    case "marron":
        console.log("El Color de la Tierra")
        break
    default:
        console.log("Excelente elección, no lo teniamos pensado");
        break
}


console.log("-------Ejercicio 12-------")

let numero1 = parseInt(prompt("Ingrese un Numero"))
let numero2 = parseInt(prompt("Ingrese un Numero"))
let tipoOperacion = prompt("Ingrese Tipo de Operacion en minuscula (suma resta multiplicacion o division")

switch (tipoOperacion) {
    case "suma":
        let suma = numero1 + numero2
        console.log("El resultado de la suma es " + suma)
        break

    case "resta":
        let resta = numero1 - numero2
        console.log("El resultado de la resta es " + resta)
        break

    case "multiplicacion":
        let mult = numero1 + numero2
        console.log("El resultado de la multiplicacion es " + mult);
        break

    case "division":
        let div = numero1 / numero2
        if (numero2 === 0) { console.log("No es posible efectuar la operacion. Divisor no puede ser cero") }
        else { console.log("El resultado de la division es " + div) }
        break

    default:
        break;
}


console.log("-------Ejercicio 13-------")

