import { useLocation } from 'react-router-dom';
import Header from '../components/header/header';

export default function Sacola(props){
    const location = useLocation()
    const {state}= location
console.log(state)


let lista = state.produtos.map((item,index)=>{
    return(
        <article key={index}>
             <img src="" alt="imagem do produto"/>
            <h3>{item.nome}</h3>
             <p>{item.valor.toFixed(2)}</p>
            
             
        </article>

    ) 
    
})

const Main =()=>{
    return(
        <main>
            <section>
                <h1>Seus pedidos</h1>
                <hr></hr>
                    {lista}
                    <p>Valor total dos pedidos: {state.total}</p>
            </section>
        </main>

    )
}


return(
    <div>
    <Header/>
    <Main/>
    </div>
)
}