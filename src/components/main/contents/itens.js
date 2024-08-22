


import Pedidos from "./Pedidos"
export default function Itens({index}){

let lista
    const produtos =[[{nome:'bolo de chocolate', valor:10.00, imagem:''},{nome:'brigadeiro', valor:2.00, imagem:''}],
                     [{nome:'coxinha', valor:1.00, imagem:''}],
                     [{nome:'coca cola', valor:8.00, imagem:''}]]
    


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
                 <Pedidos nome={item.nome} valor={item.valor}/>                 
            </article>

        ) 
        
    })
}
indiceDosProdutos()
    return(
        <div>
            {lista}
        </div>
    )
}