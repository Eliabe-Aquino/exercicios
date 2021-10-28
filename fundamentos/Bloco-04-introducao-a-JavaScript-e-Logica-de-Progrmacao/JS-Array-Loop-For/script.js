// Exercício 1
// Obtenha o valor "Serviços" do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// Exercício 2
// Procure o índice do valor "Portfólio" do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio') ;

// console.log(indexOfPortfolio);

// Exercício 3
// Adicione o valor "Contato" no final do array menu :

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push("Contato");
// console.log(menu);

// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (let index = 0 ; index < groceryList.length; index +=1) {
//     console.log(groceryList[index]);
// }

// Exercício 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let elem of names) {
//     console.log(elem);
// }

// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:



// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index])
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let total = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     total += numbers[index];
// }
// console.log(total)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let total = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     total += numbers[index];
   
// }
// media = total/numbers.length
// if (media > 20) {
//     console.log("valor maior que 20")
// } else console.log("valor menor ou igual a 20")


// console.log(media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// maior = 0;
// for (let index = 0; index < numbers.length; index += 1){
//    if (numbers[index] > maior){
//        maior = numbers[index]
//    }
// }
//     console.log(maior)
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;
// for (let index = 0; index < numbers.length; index += 1)
//     if (numbers[index] %2){
//         impar++
        
//     }
//         if (impar > 0) {
//             console.log(impar)    
//         } else console.log("nenhum valor ímpar encontrado")

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// maior = numbers[0];
// for (let index = 0; index < numbers.length; index += 1){
//    if (numbers[index] < maior){
//        maior = numbers[index]
//    }
// }
//     console.log(maior)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
for (let i = 0; i < numeros.length; i+= 1){
    console.log(numeros[i]/2)
}


// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

