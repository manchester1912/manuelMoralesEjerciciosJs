let boton = document.getElementById("calcular")

boton.addEventListener("click", resultado)

function resultado() {
    let peso = parseInt(document.getElementById("peso").value)
    let estatura = parseInt(document.getElementById("estatura").value)
    let calculo = peso / ((estatura/100) * (estatura/100))

    let imc = document.getElementById("imc").value = calculo.toFixed(1)   
 
}