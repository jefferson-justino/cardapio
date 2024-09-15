import styles from './itens.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import fotoLanche from '../../../images/produto.png'


let valorTotal 

function Pedidos({lista}){
   
    valorTotal= 0
if(lista.length>0){
  
  
   for(let i =0; i<lista.length;i++){
      valorTotal=valorTotal+lista[i].valor
      
   }
}   

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
    const produtos =[[{nome:'Bolo de chocolate', valor:10.00},{nome:'Brigadeiro', valor:1.00},{nome:'pudim',valor:9.5}],
                     [{nome:'Coxinha', valor:5.00},{nome:'Pastel de carne',valor:3.5},{nome:'Empada',valor:2.5}],
                     [{nome:'Coca cola', valor:8.00},{nome:'Pepsi',valor:6},{nome:'Fanta maracujá',valor:14}]]
    
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
            <article key={index} className={styles.card}>
                 <img src={fotoLanche} alt="imagem do produto" className={styles.cardImage}/>
                <h3 className={styles.cardNome}>{item.nome}</h3>
                 <p className={styles.cardValor}>R${item.valor.toFixed(2)}</p>
                 <input type="button" value='Adicionar à sacola' onClick={()=>adicionar(item.nome,item.valor)} className={styles.cardBot}/>
                 <Pedidos lista={sacola}/>                 
            </article>

        ) 
        
    })

}

indiceDosProdutos()
    return(
        <div className={styles.local}>
            <button onClick={passarDados} className={styles.botSacola}>Sacola</button>
            <div className={styles.conteiner}>
            {lista}
            </div>
        </div>
    )
}