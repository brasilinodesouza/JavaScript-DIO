//Exercicio 1

let nota1 = 7
let nota2 = 8
let nota3 = 7
let media

media = (nota1 + nota2 + nota3) / 3;
if(media > 7 ){
    console.log('Passou');
}else if (media < 5 ){
    console.log('Reprovado');
}else{
    console.log('Recuperação');
}

//######################################
//Exercicio 2

let peso = 120;
let altura = 1.7

let IMC = peso / (altura * altura)
if(IMC < 18.5){
    console.log('Abaixo do peso');
}else if(IMC > 18.5 && IMC < 25){
    console.log('Peso normal');
}else if(IMC > 25 && IMC < 30){
    console.log('Acima do peso');
}else if(IMC > 30 && IMC < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade grave');
}

//######################################
//Exercicio 3

let vlrProduto = 1000;
let meioPagamento = 'asdas';

if(meioPagamento === 'DEBITO'){
    let vlrComDesconto = vlrProduto - ( 0.10 * vlrProduto); 
    console.log(vlrComDesconto);
}else if (meioPagamento === 'PIX') {
    let vlrComDesconto = vlrProduto - ( 0.15 * vlrProduto); 
    console.log(vlrComDesconto);
}else if (meioPagamento === '2x') {
    console.log(vlrProduto);
}else{
    let vlrComDesconto = vlrProduto + ( 0.10 * vlrProduto); 
    console.log(vlrComDesconto);
}