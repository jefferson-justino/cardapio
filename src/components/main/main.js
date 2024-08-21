import Itens from "./contents/itens"

export default function Main (){
    const index= 0
    return(
        <main>
            <nav>
                <ul>
                    <li><input type="button" value='Doces'/></li>
                    <li><input type="button" value='Salgados'/></li>
                    <li><input type="button" value='Bebidas'/></li>
                </ul>
            </nav>

            <section>
            
            <Itens index={index} />

            </section>


        </main>
    )
}