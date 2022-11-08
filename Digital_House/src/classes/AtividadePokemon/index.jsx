import {useState} from 'react'
import './style.scss'

export function AtividadePokemon(){

    const [dados, setDados] = useState([
        {
            nomeCompleto: "Ricardo Brito",
            idade: '33',
            pokemonFavorito: "yvisaur"
        }
    ])

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [idade, setIdade] = useState('')
    const [pokemonFavorito, setPokemonFavorito] = useState('')


    function acrescentarDados(event){

        event.preventDefault()
        const novoObjeto = {
            
            nomeCompleto: nomeCompleto,
            idade: idade,
            pokemonFavorito: pokemonFavorito
        }

        setDados([...dados, novoObjeto])
    }

    return(

        <main>

            <form onSubmit={(event)=>acrescentarDados(event)}>
                <label htmlFor="nomeCompleto">Nome completo: </label>
                <input type="text" id="nomeCompleto" onChange={(event)=> {

                    console.log(event)
                    while (event.target.value.length<5){
                        
                    }
                    setNomeCompleto(event.target.value)
                }}/>
                <label htmlFor="idade">Idade: </label>
                <input type="text" id="idade" onChange={(event)=> setIdade(event.target.value)}/>
                <label htmlFor="pokemon">Pokemon favorito: </label>
                <input type="text" id="pokemon" onChange={(event)=> setPokemonFavorito(event.target.value)}/>

                <button type="submit">Exibir</button>
            </form>
            <div>
                <ul>
                    {
                        dados.map(item =>{
                                return (
                                    <li>
                                        {/* <h1>{item.id}</h1> */}
                                        <h1>{item.nomeCompleto}</h1>
                                        <h1>{item.idade}</h1>
                                        <h1>{item.pokemonFavorito}</h1>
                                    </li>
                                )
                            }
                        )
                    }

                </ul>
            </div>

        </main>




    )

}