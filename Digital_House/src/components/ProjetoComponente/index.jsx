export function ProjetoComponente(props){

    console.log(props)
    return(
        <li>
            <h2>{props.item.titulo}</h2>
            <li>
                <img src={props.item.imagem}/>
                <h3>{props.item.tituloCard}</h3>
                <p>{props.item.descricao1}</p>
                <p>{props.item.descricao2}</p>

            </li>

        </li>

    )
}