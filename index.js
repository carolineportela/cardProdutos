'use stric'

import { produtos } from "./produtos.js"

class card extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.foto = null
        this.nome = 'Titulo do card'
        this.description = 'descrição do produto'
        this.preco = 'Preço do produto'
    }

    static get observedAttributes(){
        return[ 'foto' ,'nome','description','preco']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const css = document.createElement('style')
        css.textContent = 
        `
        .container{
            display: grid;
            grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
            gap: 16px;
            padding: 16px;
        }
        .card{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1-x solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 16px;
            cursor: pointer;
        
        }
        .card:hover{
            box-shadow: 0px 0px 8px #00f6;
        }
        .card__image{
            width: 200px;
            height: 200px;
            object-fit: contain;
        
        }
        .card__title{
            font-size: 1.5rem;
        }
        .card__description{
            font-size: 1rem;
        }
        .card__price{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
        }
        .footer__text{
            text-align: center;
        }
         
        `
        return css
    }


    component() {
    
        const card = document.createElement('div')
        card.classList.add('card')
    
        const foto = document.createElement('img')
        foto.classList.add('card__image')
        foto.src = `${this.foto}`
    
        const titulo = document.createElement('h5')
        titulo.classList.add('card__title')
        titulo.textContent = this.nome
    
        const descricao = document.createElement('p')
        descricao.classList.add('card__description')
        descricao.textContent = this.description
    
        const preco = document.createElement('spam')
        preco.classList.add('card__price')
        preco.textContent = `R$ ${this.preco}`
    
        card.append(foto, titulo, descricao, preco)
    
        return card
    } 
}

customElements.define('card-produto', card)

 




















// 'use strict'

// import { produtos } from "./produtos.js"


// const criaCard = (produto) => {
//     const card = document.createElement('div')
//     card.classList.add('card')

//     const foto = document.createElement('img')
//     foto.classList.add('card_image')
//     foto.src = `./img/${produto.image}`

//     const titulo = document.createElement('h5')
//     titulo.classList.add('card__title')
//     titulo.textContent = produto.name
    
//     const descricao = document.createElement('p')
//     descricao.classList.add('card__description')
//     descricao.textContent = produto.description

//     const preco = document.createElement('span')
//     preco.classList.add('card__price')
//     preco.textContent = `R$ ${produto.price}`


//    card.append(foto,titulo,descricao,preco)
    

//     return card
    
// }

// const carregarProdutos = () => {
//     const container = document.getElementById('container')
//     const cards = produtos.map(criaCard)

//     container.replaceChildren(...cards)
// }
// carregarProdutos()

























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




