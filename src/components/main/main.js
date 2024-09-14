import { useState } from "react"
import Itens from "./contents/itens"
import style from './main.module.css'


export default function Main (){
    const [index, setIndex]= useState('')
    const [titulo, setTitulo] = useState('Nossos Produtos')
    return(
        <main>
            <nav className={style.nav}>
                <ul>
                    <li><input type="button" value='Todos os Produtos' onClick={()=>{setIndex(''); setTitulo('Nossos Produtos')}} 
                    className={style.botaoFiltro} /></li>
                    <li><input type="button" value='Doces' onClick={()=>{setIndex(0) ; setTitulo('Nossos Doces')}} className={style.botaoFiltro}/></li>
                    <li><input type="button" value='Salgados' onClick={()=>{setIndex(1); setTitulo('Nossos Salgados')}}className={style.botaoFiltro}/></li>
                    <li><input type="button" value='Bebidas' onClick={()=>{setIndex(2); setTitulo('Nossas Bebidas')}}className={style.botaoFiltro}/></li>
                </ul>
            </nav>

            <section>
            <h2 className={style.titulo}>{titulo}</h2>
            <Itens index={index} />

            </section>


        </main>
    )
}