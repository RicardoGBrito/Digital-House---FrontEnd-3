import { useEffect, useState } from 'react'
import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'
import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')
    const [borderColor, setBorderColor] = useState()

    function searchCep(cepRecieved) {

        setCep(cepRecieved)
        if(cepRecieved.length == 8){
            setBorderColor(false)
        }else{
            if(cepRecieved != ''){

                setBorderColor(true)
            }else{
                setBorderColor(false)
            }
        }
        
        
        
    }
    
    function cadastrarCard(event){

        event.preventDefault()

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response =>{return response.json()})
        .then(dados => {
            if(dados.error !== undefined){
                alert('CEP inválido')
            }else{
    
                setLocations([...locations, dados])
            }
        })
    }
    

    function deleteLocation(currentLocation){
        const newLocations = []
        locations.map(item => {
            if(item != currentLocation){
                newLocations.push(item)

            }

        })

        setLocations(newLocations)
    }


    return(

        <div className="decima-quarta-aula-component">

            <form>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input className={`${borderColor? 'form-input-border-error' : ''}`}
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                        
                    />
                </div>

                <button type="submit" onClick={event => cadastrarCard(event)}>Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => {
                            return (
                                <DecimaQuintaAulaItem
                                    key={index}
                                    data={location}
                                    onDeleteLocation={currentLocation => deleteLocation(currentLocation,) }
                                />
                            )
                        }
                    )
                }

            </section>

        </div>

    )

}