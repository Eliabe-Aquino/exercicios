// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 10
const b = 23

console.log('Soma: ' + (a + b));
console.log('Subtracao: ' + (a - b));
console.log('Adicao: ' + (a * b));
console.log('Divisao: ' + (a / b));
console.log('Modulo: ' + (a % b));

// 2 .Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const a = 10
const b = 23

if (a > b) {
    console.log("'a' e maior que 'b'");
} else { 
    console.log("'b' e maior que 'a'");
 }

//  3 .Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 40
const b = 50
const c = 30

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)');
}else if (b > a && b > c) {
    console.log('O maior número é: ' + b + ' (b)');
}else {
    console.log('O maior número é: ' + c + ' (c)');
}

// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const numer= -20

if (numer > 0) {
    console.log('positive')
}else if (numer < 0) {
    console.log('negative')
}else {
    console.log('zero')
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

let soma = angulo1 + angulo2 + angulo3;
let todospositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0

if (todospositivos) {
    if (soma === 180) {
        console.log("true");
    } else {
    console.log('false')
    };
} else { 
    console.log('Erro: angulo invalido')
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const chessPiece = "KiNG";

switch (chessPiece.toLowerCase()) {
    case 'queen':
        console.log(chessPiece + " any direction");
        break;

    case "king":
        console.log(chessPiece + " any direction one space ");
        break;

    case "bishop":
        console.log(chessPiece + " move in diagonals");
        break;
    case "preon":
        console.log(chessPiece + " Only one square forward, on the first move it can be two squares");
        break;
    case "tower":
        console.log(chessPiece + " move in crux");
        break;
    case "horse":
        console.log(chessPiece + " move in L");
        break;
    default:
        console.log("Nao e uma peca de xadrez");
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// // O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 60

    if (nota <0 || nota > 100) {
        console.log("Erro, nota incorreta!");
    } else if (nota >= 90) {
        console.log("A");
    } else if (nota >= 80){
        console.log("B");
    } else if (nota >= 70){
        console.log("C");
    } else if (nota >= 60){
        console.log("D");
    } else if (nota >= 50){
        console.log("E");
    } else 
        console.log("F")

// 8 .Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
    
const n1 = 30
const n2 = 50
const n3 = 25

let isEven= true

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0){
    isEven = true;
};
console.log(isEven)

// 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const n1 = 30
const n2 = 50
const n3 = 25

let isEven= true

if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0){
    isOdd = true;
};
console.log(isOdd)

// 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const costProduct = 200;
const sellPrice = 500;

const totalCost = costProduct + (costProduct/100)*20;
const lucro = sellPrice - totalCost ;
let unidades = 1000;

     if (costProduct <= 0 && sellPrice <= 0 ) {
         console.log("valor digitado incorreto.")
         
     } else {
         console.log(lucro*unidades);

     }


