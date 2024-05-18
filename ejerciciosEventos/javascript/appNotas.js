let notas = [
    {
        id: 1,
        titulo: "Hacer Service a la Moto",
        texto: "Corresponde a los 45 mil kilometros",
       
    },
    {
        id: 2,
        titulo: "Pagar Edenor",
        texto: "Hacerlo antes del vencimiento el miercoles",
       
    }
]



let idGlobal = 2

let divTarjetas = document.getElementById("tarjetas")


let crearNota = (divContenedor, nota) => {
let nuevaNota = document.createElement("div")
nuevaNota.classList.add("card", "m-2")
nuevaNota.style.width = "18rem"

nuevaNota.innerHTML =  `<input type="checkbox">
<div class="card-body">
    <h5 class="card-title">${nota.titulo}</h5>
    <p class="card-text">${nota.texto} </p>
    <a href="#" class="btn btn-danger">Borrar Nota</a>
</div>`

divContenedor.appendChild(nuevaNota)
}

let pintarNota = (arregloNotas, divNotas) => {
    
    for (let index = 0; index < notas.length; index++) {
        
     crearNota(divNotas, arregloNotas[index])
     
    }
 }
 
//  let agregarNota = (titulo, texto) => {

//     let click = document.getElementById("guardarNota")

// let nuevaNota = {
//     id: idGlobal = idGlobal+ 1,
//     titulo: titulo = prompt("titulo"),
//     texto: texto = prompt("texto")}

// click.addEventListener("click", (e) => {

//     notas.push(nuevaNota) 
// })
    
//     notas.push(nuevaNota)
// }

// agregarNota()
// pintarNota(notas, divTarjetas)
// console.log(notas);


let crearNota2 = (titulo, texto, arregloNota) => {
    
    let nuevaNota = {
        id: idGlobal = idGlobal+ 1,
        titulo: titulo.value,
        texto: texto.value}
     notas.push(arregloNota)   
    }

let tituloNota = document.getElementById("inputNota")
let textoNota = document.getElementById("inputNota")
let click = document.getElementById("guardarNota")

click.addEventListener("click", () => {
    crearNota2(tituloNota, textoNota, notas)
  
})

pintarNota(notas, divTarjetas)