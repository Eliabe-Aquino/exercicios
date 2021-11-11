//  const escopo = (escopo)  => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ' ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     // console.log(` ${ifScope}' o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
//   }

//   escopo(true);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// // Seu código aqui.

// oddsAndEvens.sort((a, b) => a - b)

// console.log(oddsAndEvens); // será necessário alterar essa linha 😉

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const fatorial = (n) => {
//   let fator = [];
//   for (let i = 1; i <= n; i += 1) {
//     fator.push(i);
//   }
//   console.log(fator.reduce((a, b) => a * b));
// };
// fatorial(4);

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .


// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// Copiar

// const longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

// const result = longestWord
//   .match(/\w+/g)
//   .sort((a, b) => b.length - a.length)[0];
  
// console.log(result);

// const longestWord = text => text.split(' ').sort((a, b) => b.length - a.length)[0];
// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'


// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

  
// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

// const objeto = {};

// const addNewKey = (obj,key,value) => {

//       obj[key] = value
//       return obj
// };
// console.log(addNewKey(objeto,'name','eliabe'))

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     author: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   for (const property in coolestTvShow) {
//     console.log(property);
//   }

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   // for (const property in coolestTvShow) {
//   //   console.log(property);
//   // }
  
//   console.log(Object.keys(coolestTvShow));
  
//   // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

    //   const student1 = {
    //     Html: 'Muito Bom',
    //     Css: 'Bom',
    //     JavaScript: 'Ótimo',
    //     SoftSkills: 'Ótimo',
    //   };
    
    //   const student2 = {
    //     Html: 'Bom',
    //     Css: 'Ótimo',
    //     JavaScript: 'Ruim',
    //     SoftSkills: 'Ótimo',
    //     Git: 'Bom', // chave adicionada
    //   };

    //   const listSkills = (student) => {
    //     const arrayOfSkills = Object.keys(student);
    //     for(index in arrayOfSkills){
    //       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    //     }
    //   };
    
    //   console.log('Estudante 1');
    //   listSkills(student1);
    
    //   console.log('Estudante 2');
    //   listSkills(student2);

    // const student = {
    //     Html: 'Muito Bom',
    //     Css: 'Bom',
    //     JavaScript: 'Ótimo',
    //     SoftSkill: 'Ótimo',
    //   };
        
    //   const listSkillsValuesWithValues = (student) => Object.values(student);
        
    //   // Com Object.values
    //   console.log(listSkillsValuesWithValues(student));

    // const coolestTvShow = {
    //     name: "BoJack Horseman",
    //     genre: "adult animation",
    //     createdBy: "Raphael Bob-Waksberg",
    //     favoriteCharacter: "Princess Carolyn",
    //     quote: "Princess Carolyn always lands on her feet.",
    //     seasons: 6,
    //   };
    
//   console.log(Object.entries(coolestTvShow));
  
//   // [
//   //   [ 'name', 'BoJack Horseman' ],
//   //   [ 'genre', 'adult animation' ],
//   //   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   //   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   //   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   //   [ 'seasons', 6 ]
//   // ]

// let obj = { foo: 'bar', baz: 42 };
// let map = new Map(Object.entries(obj));s
// console.log(map);

// const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const clone = Object.assign(person, lastName);
  
//   console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
//   console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

const person = {
    name:'Roberto',
    adress: {
        rua: 'joaima'
    }
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  newPerson.adress.rua = 'comercio'
  console.log(newPerson);
  console.log(person);

  console.log(newPerson.name)

  const top3Albums = {
    1: 'Nightfall in Middle-Earth',
    2: 'Imaginations from the Other Side',
    3: 'Somewhere Far Beyond',
    };
    
    console.log(Object.entries(top3Albums));