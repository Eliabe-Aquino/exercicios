// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.

const currentHour = 11
let message = ""

if (currentHour >=22) {
   message = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour <22 ) {
    message = "Rango da noite, vamos jantar :D"
} else if ( currentHour >= 14 && currentHour <18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >=11 && currentHour <14) {
    message = "Hora do almoço!!!"
} else if (currentHour >=4 && currentHour <11) {
    message = "Hmmm, cheiro de café recém passado"
} return console.log(message)

// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
// Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
// Agora imprima a variável message fora das suas condições.

// Operador OR

const weekyday =  'pc';

if (weekyday === "segunda-feira" || weekyday === "terça-feira" || weekyday === "quarta-feira" || weekyday === "quinta-feira" || weekyday === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else if ( weekyday === "sabado" || weekyday === "domingo") {
  console.log("FINALMENTE, descanso merecido UwU");
} else {
    console.log("Nao e um dia da semana")
}


// Operador NOT


console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false


// Switch e Case

// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;


//  Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .
let candidata = 'lista'

switch (candidata) {
    case 'aprovada':
        console.log("Voce foi Aprovado");
        break;
    case 'lista':
        console.log("Voce esta na lista de espera");
        break;
    case 'aprovada':
        console.log("Voce foi Reprovado");
        break;
    
    default:
        console.log("nao se aplica")
}