console.log("--- Ejercicio 1 ---")

let numero = parseInt(prompt("Ingrese un Numero"))

for (let index = 1; index <= 10; index++) {
  resultado = numero * index
  if (numero === 0) {
    console.log("Todo numero multiplicado por cero da cero")
    break
  } else if (numero >= 1) { console.log(numero + " por " + index + " es igual a " + resultado) }
}

console.log("--- Ejercicio 2 ---")


let contador = 0
let acumulado = 0

while (contador < 10) {
  numero2 = parseInt(prompt("Ingrese un Numero del 0 al 9. Tiene diez chances"))
  acumulado = acumulado + numero2
  console.log("El Acumulado es " + acumulado)
  contador++
  console.log("Usted ha usado el chance " + contador + " de 10 disponibles" )

  if (numero2 === 0) {
    console.log("Usted ha ingresado cero, el programa se detiene")
    break
  }
}




