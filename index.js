'use strict'

import { produtos } from "./produtos.js"


const criaCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const foto = document.createElement('img')
    foto.classList.add('card_image')
    foto.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name
    
    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card__price')
    preco.textContent = `R$ ${produto.price}`


   card.append(foto,titulo,descricao,preco)
    

    return card
    
}

const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criaCard)

    container.replaceChildren(...cards)
}
carregarProdutos()

























//-----------Comentários sobre os códigos passados como exemplos na aula------------

 /*uma arrayList com tipos de variaveis diferentes
 const nome = [2,'SENAI',true,78] */
 
//const aluno = {nome:'leonid',nota:10,aprovado:true}

/* mostrar o nome e a nota do aluno
console.log(nome[1]); */


/*
JSON abaixo = estrutura de dados. Uma arrayList com duas posições.
const ds2t = [

    {nome:'leonid',nota:10,aprovado:true},
    {nome:'leonid',nota:10,aprovado:true}

]
*/

//--------------------------------------------

 /*
 //precisa somar os valores com mais 2 reais do frete.
 //Primeira forma com while
 const valores = [34,54,32,90]

 const limite = valores.length
 let contador = 0
 const valoresFrete = []
 const valorFrete = 2

 while(contador < limite){
     valoresFrete[contador] =valores[contador] + 2
     contador++

 }
 //console.log(valoresFrete)


 */
//--------------------------------------------

 /*

 //precisa somar os valores com mais 2 reais do frete.
 //Segunda forma com for

 const limite = valores.length
 const valoresFrete = []

 for (let contador = 0;contador < limite: contador ++){
     valoresFrete[contador] =valores[contador] + 2
 }


*/

//--------------------------------------------

/*
//precisa somar os valores com mais 2 reais do frete.
//Terceira forma com a setinha que o leonid gosta

//.map percorre na array e modifica ou nao na nova array

const adicionarFrete = (valor) => valor + 2
const valoresFrete = valores.map ( adicionarFrete )

console.log(valoresFrete)


*/




