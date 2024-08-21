


export default function Itens(props){

    const produtos =[[{nome:'bolo de chocolate', valor:10.00, imagem:''},{nome:'brigadeiro', valor:2.00, imagem:''}],
                     [{nome:'coxinha', valor:1.00, imagem:''}],
                     [{nome:'coca cola', valor:8.00, imagem:''}]]
    


    let lista = produtos[props.index].map((item,index)=>{
        return(
            <article key={index}>
                 <img src="" alt="imagem do produto"/>
                <h3>{item.nome}</h3>
                 <p>{item.valor.toFixed(2)}</p>
            </article>

        ) 
        
    })
    

    return(
        <div>
            {lista}
        </div>
    )
}