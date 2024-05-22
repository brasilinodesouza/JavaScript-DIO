function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function classificarICM (IMC){
    if(IMC < 18.5){
        return 'Abaixo do peso';
    }else if(IMC > 18.5 && IMC < 25){
        return 'Peso normal';
    }else if(IMC > 25 && IMC < 30){
        return 'Acima do peso';
    }else if(IMC > 30 && IMC < 40){
        return'Obeso';
    }else{
        return'Obesidade grave';
    }
}

function main(){
    let peso = 80;
    let altura = 1.7
    let IMC = calcularIMC(peso, altura)
    console.log(classificarICM(IMC));
}

main();

//#####################################
//######################################

function escrevaNome(nome){
    return nome
}
escrevaNome("Brasilino de Souza Neto")

function verificaIdade(idade){
    if(idade >= 18){
        console.log("Meu nome " + escrevaNome("Neto") + ' com idade ' +idade);
    }else{
        console.log("Meu nome " + escrevaNome("Neto") + ' com idade ' +idade);
    }
}
verificaIdade(15)

//######################################
//######################################

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)))
};

function aplicarJuro(valor, juros){
    return (valor +  (valor * (juros / 100)))
};

let vlrProduto = 100;
let meioPagamento = 'PIlX';

if(meioPagamento === 'DEBITO'){
    console.log("Total com desconto "+aplicarDesconto(vlrProduto, 10))
}else if (meioPagamento === 'PIX') {
    console.log("Total com desconto "+aplicarDesconto(vlrProduto, 15))
}else if (meioPagamento === '2x') {
    console.log("Total "+vlrProduto);
}else{
    console.log("Total com juros "+ aplicarJuro(vlrProduto, 10))
}

