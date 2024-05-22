
class Carro {
    cor;
    marca;
    gastoMedioKM;

    constructor(cor, marca, gastoMedioKM){
        this.cor = cor
        this.marca = marca
        this.gastoMedioKM = gastoMedioKM
    }

    calcularViagem(distanciaEmKM, vlrCombustivel){
        return (distanciaEmKM * this.gastoMedioKM ) * vlrCombustivel
    }

}

const carro = new Carro("Vermelha", "Mitsubishi", 1/8)
const carro1 = new Carro("Azul", "VW", 1 / 12)
console.log("Carro: "+carro.calcularViagem(300,7));
console.log("Carro1: "+carro1.calcularViagem(300,7));


class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        return (this.peso / (this.altura * this.altura));
    }
    classificarIMC(){
        const imc = this.calcularIMC();
        if(imc < 18.5){
            return 'Abaixo do peso';
        }else if(imc > 18.5 && imc < 25){
            return 'Peso normal';
        }else if(imc > 25 && imc < 30){
            return 'Acima do peso';
        }else if(imc > 30 && imc < 40){
            return'Obeso';
        }else{
            return 'Obesidade grave';
        }
    }

}

const neto = new Pessoa("Neto", 80, 1.70);
const mi = new Pessoa("Mi", 55, 1.70);
console.log("IMC "+neto.calcularIMC().toFixed(2), neto.classificarIMC());
console.log("IMC "+mi.calcularIMC().toFixed(2), mi.classificarIMC());