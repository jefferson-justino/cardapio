import styles from './footer.module.css'

export default function Footer(){
return(
    <footer>
        <p >Desenvolvido por <a href="https://portifolio-jeff.netlify.app/" target="_blank" rel='noreferrer' 
        className={styles.linkNome}>Jefferson</a></p>
    </footer>
    )
}