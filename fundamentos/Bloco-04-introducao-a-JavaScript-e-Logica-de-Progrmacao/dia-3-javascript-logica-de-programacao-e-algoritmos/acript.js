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