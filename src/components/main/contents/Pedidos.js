export default function Pedidos({nome, valor}){


    return(
        <div>
            <input type="button" value='Adicionar'/>
            {console.log(nome, 'R$',valor)}
        </div>
    )
}