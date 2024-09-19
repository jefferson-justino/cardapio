import styles from './header.module.css'
import instagramLogo  from '../../images/instagram.svg'


export default function Header(){

    return(
        <header className= {styles.header}>
            <h1 className= {styles.titulo}> Cardápio</h1>

          <a href='#instagram'><img src={instagramLogo} alt="Instagram logo" className= {styles.image}/></a>

        </header>
    )
}