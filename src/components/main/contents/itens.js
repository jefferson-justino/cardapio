
import { useNavigate } from 'react-router-dom';
import { useState } from "react"

let valorTotal 

function Pedidos({lista}){
   
    valorTotal= 0
if(lista.length>0){
  
  
   for(let i =0; i<lista.length;i++){
      valorTotal=valorTotal+lista[i].valor
      
   }
}   
console.log('valor total: ', valorTotal, 'tam', lista.length)
   return(
       <>
       </>
   )
}




export default function Itens({index}){

    const navigate = useNavigate()

    const passarDados=()=>{
        const dataToPass = { total: valorTotal, produtos: sacola };
       navigate('/sacola', {state : dataToPass})
    }

    const [sacola, setSacola] = useState([])


let lista
    const produtos =[[{nome:'bolo de chocolate', valor:10.00, imagem:''},{nome:'brigadeiro', valor:2.00, imagem:''}],
                     [{nome:'coxinha', valor:1.00, imagem:''}],
                     [{nome:'coca cola', valor:8.00, imagem:''}]]
    
    const adicionar=(nome,valor)=>{
    const novosItens ={
        nome:nome,
        valor:valor
    }
    setSacola([...sacola,novosItens])
    
}


    const indiceDosProdutos =()=>{
        let listaDeProdutos
        if(index!==''){
             listaDeProdutos = produtos[index]
            // console.log(index)
        }else{
            const todosItens = produtos.flat()
            listaDeProdutos= todosItens
        }

     lista = listaDeProdutos.map((item,index)=>{
        return(
            <article key={index}>
                 <img src="" alt="imagem do produto"/>
                <h3>{item.nome}</h3>
                 <p>{item.valor.toFixed(2)}</p>
                 <input type="button" value='Adicionar à sacola' onClick={()=>adicionar(item.nome,item.valor)}/>
                 <Pedidos lista={sacola}/>                 
            </article>

        ) 
        
    })
}
indiceDosProdutos()
    return(
        <div>
            <button onClick={passarDados}>Sacola</button>
            {lista}
        </div>
    )
}