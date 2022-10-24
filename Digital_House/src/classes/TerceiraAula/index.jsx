import './style.scss'
import batataGif from './../../assets/images/batata.gif'


//As chaves servem para colocar um javascript dentro do html. É uma interpolação.

//Se trocar a chave por parênteses na arrow function, ele já entende que é pra retornar um html

export function TerceiraAula(){

    
    const components = [
        {name: 'Card 1', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'},
        {name: 'Card 2', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'},
        {name: 'Card 3', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'},
        {name: 'Card 4', description: 'Teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'}
    ]


    return(
        <div>
            {/* <img src={batataGif} /> */}
            <h1>Lista de componentes encontrados em um sistema</h1>
            <ul>

                {
                    components.map((component) => (
                        <li>
                            
                            <img src={component.image} />
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                        
                    ))
                }

            </ul>

        </div>


    )


}