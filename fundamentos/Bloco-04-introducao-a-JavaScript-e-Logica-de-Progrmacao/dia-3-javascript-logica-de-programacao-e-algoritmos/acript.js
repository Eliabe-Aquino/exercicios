// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// let n = 8;
// let asteriscos = "*"
// for (let i = 0; i < n; i+=1){
//       console.log(asteriscos.repeat(n))
      
  
    
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:



// let size = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
//   console.log(inputLine);
//   inputLine+=symbol;
// }

// 3- Agora inverta o lado do triângulo. Por exemplo:
let size = 5;
let symbol = '*';
let inputLine = '';
let space = '' 

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  
  console.log(space);
  inputLine+=symbol;

}








// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

let person  = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
};
// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
console.log('A jogadora ' + person.name + ' ' + person.lastName + ' ' + 'tem ' + person.age + ' ' + 'anos de idade.')

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
person.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + person.name + ' ' + person.lastName + 'foi eleita a melhor do mundo por ' + person.bestInTheWorld.length + ' vezes, nos anos')

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + person.medals.golden + ' medalhas de ouro e ' + person.medals.silver + ' medalhas de prata.'  )
