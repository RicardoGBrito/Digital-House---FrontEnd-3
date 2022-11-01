import './style.scss'
import batataGif from "../../assets/images/batata.gif"

export function QuartaAula(){

    const components = [
        {id: 1, title:'Video Component', image: 'batataGif', text:'Lorem iipsum'},
        {id: 2, title:'Video Component', image: 'batataGif', text:'Lorem iipsum'}
    ]

    return (

        <div className='quarta-aula-component'>
            <h1>Componentes identificados</h1>

            <ul>

                {

                    components.map(
                        component => {
                            return(

                                <li key={component.id}>
                                    <img src={batataGif} />
                                    <h1>Vídeo</h1>
                                    <p>Lorem ipsum dolor sit amet</p>
                                </li>
                            )
                        }
                    )

                }

            </ul>
            
        </div>
    )
}