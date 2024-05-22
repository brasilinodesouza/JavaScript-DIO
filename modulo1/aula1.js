let valorGasolina = 5.89
let consumoMedio = 12
let distancia = 100

let litrosConsumidos = distancia / consumoMedio
let valorGasto = litrosConsumidos * valorGasolina

console.log(valorGasto.toFixed(2));