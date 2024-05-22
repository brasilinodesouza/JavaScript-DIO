const vlrEtanol = 5.49;
const vlrGasolina = 6.16;
const tipoCombustivel = 'Gasolina'
const gastoMedioKM = 7;
let distancia = 100

let litrosConsumidos = distancia / gastoMedioKM

if (tipoCombustivel === 'Etanol'){
    let valorGasto = litrosConsumidos * vlrEtanol
    console.log(valorGasto.toFixed(2));
}else{
    let valorGasto = litrosConsumidos * vlrGasolina
    console.log(valorGasto.toFixed(2));
}