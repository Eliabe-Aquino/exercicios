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
        console.log(true);
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

    
    
