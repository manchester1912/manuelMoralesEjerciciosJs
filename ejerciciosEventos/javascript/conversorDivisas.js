let convertirPeso = document.getElementById("ars")
let convertirDolar = document.getElementById("usd")

convertirPeso.addEventListener("input", function pesoAdolar() {
    let conversionPeso = convertirPeso.value * 0.001128
    convertirDolar.value = conversionPeso.toFixed(4)    
} )

convertirDolar.addEventListener("input", function dolarApeso() {
    let conversionDolar = convertirDolar.value * 886.52
    convertirPeso.value = conversionDolar.toFixed(2)    
} )


