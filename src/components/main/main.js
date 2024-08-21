import { useState } from "react"
import Itens from "./contents/itens"

export default function Main (){
    const [index, setIndex]= useState(0)
    return(
        <main>
            <nav>
                <ul>
                    <li><input type="button" value='Doces' onClick={()=>setIndex(0)} /></li>
                    <li><input type="button" value='Salgados' onClick={()=>setIndex(1)}/></li>
                    <li><input type="button" value='Bebidas' onClick={()=>setIndex(2)}/></li>
                </ul>
            </nav>

            <section>
            
            <Itens index={index} />

            </section>


        </main>
    )
}