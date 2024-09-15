import { useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import fotoLanche from '../images/produto.png'
import styles from './estilos/sacola.module.css'
import { Link } from 'react-router-dom'
export default function Sacola(){
    const location = useLocation()
    const {state}= location



let lista = state.produtos.map((item,index)=>{
    return(
        <article key={index} className={styles.card}>
             <img src={fotoLanche} alt="imagem do produto" className={styles.cardImage}/>
            <h3 className={styles.cardNome}>{item.nome}</h3>
             <p className={styles.cardValor}>R${item.valor.toFixed(2)}</p>
            
             
        </article>

    ) 
    
})

const Main =()=>{
    return(
        <main>
            <section>
                <h1 className={styles.pedido}>Seus pedidos</h1>
                <hr></hr>
                <div className={styles.conteiner}>
                    {lista}
                </div>
                <div className={styles.ConteinerTotal}>
                    <p className={styles.total}>Valor total dos pedidos: R${state.total.toFixed(2)}</p>
                   <Link to={'/'}> <button className={styles.BotFinal} >FINALIZAR PEDIDO</button></Link>
                </div>
            </section>
        </main>

    )
}


return(
    <div>
    <Header/>
    <Main/>
    <Footer/>
    </div>
)
}