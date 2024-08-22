import { useState } from "react"
import Itens from "./contents/itens"



export default function Main (){
    const [index, setIndex]= useState('')
    const [titulo, setTitulo] = useState('Nossos produtos')
    return(
        <main>
            <nav>
                <ul>
                    <li><input type="button" value='Todos os produtos' onClick={()=>{setIndex(''); setTitulo('Nossos produtos')}} /></li>
                    <li><input type="button" value='Doces' onClick={()=>{setIndex(0) ; setTitulo('Nossos Doces')}} /></li>
                    <li><input type="button" value='Salgados' onClick={()=>{setIndex(1); setTitulo('Nossos Salgados')}}/></li>
                    <li><input type="button" value='Bebidas' onClick={()=>{setIndex(2); setTitulo('Nossas Bebidas')}}/></li>
                </ul>
            </nav>

            <section>
            <h2>{titulo}</h2>
            <Itens index={index} />

            </section>


        </main>
    )
}