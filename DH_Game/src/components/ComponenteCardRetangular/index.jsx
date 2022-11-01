import './styleRetangulo.scss'

export function ComponenteCardRetangular(props){
    let preco1 = ''
    let preco2 = ''
    let categories = ''

    for (let i = 0; i < props.gamesItens.price.length;i++){
        if(i<=2){
            preco1 += props.gamesItens.price[i]
        }else{
            preco2 += props.gamesItens.price[i]
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
        <li className="card_retangulo">

            <img className='card_imagem' src={props.gamesItens.picture}/>\
            <div className='card_interno'>
                <div className='card_interno_conteudo'>
                    <p>{props.gamesItens.name}</p>
                    <p>{props.gamesItens.plataforms}</p>
                    <p>{categories}</p>

                </div>
                <h2 className='card_interno_preco'>{preco1}<small>{preco2}</small></h2>
            </div>
        </li>
    )
}