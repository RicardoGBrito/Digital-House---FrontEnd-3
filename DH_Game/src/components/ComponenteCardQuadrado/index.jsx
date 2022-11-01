import './styleQuadrado.scss'

export function ComponenteCardQuadrado(props){

    let preco1 = ''
    let preco2 = ''
    let categories = ''

    for (let i = 0; i < props.gamesItens.newPrice.length;i++){
        if(i<=2){
            preco1 += props.gamesItens.newPrice[i]
        }else{
            preco2 += props.gamesItens.newPrice[i]
        }
    }

    for (let i = 0; i < props.gamesItens.categories.length;i++){
        if(i==props.gamesItens.categories.length-1){
            categories += props.gamesItens.categories[i]
            
        }else{

            categories += props.gamesItens.categories[i]+', '
        }
    }

    return(
        <li className="card_quadrado">
            <img className="card_imagem" src={props.gamesItens.picture}/>
            <div className="card_name">
                <p>{props.gamesItens.name}</p>
                <p>{props.gamesItens.oldPrice}</p>

            </div>
            <div className="card_categories">
                <p>{categories}</p>
                <h2>{preco1}<small>{preco2}</small></h2>

            </div>
        </li>
    )

}