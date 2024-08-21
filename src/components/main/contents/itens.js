


export default function Itens(props){

    const produtos =[[{nome:'aqui', valor:0, imagem:''},{nome:'lá', valor:0, imagem:''}],
                     [{nome:'', valor:0, imagem:''}],
                     [{nome:'', valor:0, imagem:''}]]

    let lista = produtos[props.index].map((item,index)=>{
        return(
            <article key={index}>
                 <img src="" alt="imagem do produto"/>
                <h3>{item.nome}</h3>
                 <p>{item.valor}</p>
            </article>

        ) 
        
    })
    

    return(
        <div>
            {lista}
        </div>
    )
}