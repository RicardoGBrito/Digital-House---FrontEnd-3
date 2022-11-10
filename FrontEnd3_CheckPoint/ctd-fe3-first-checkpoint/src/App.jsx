
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente


import { Card } from "./Card"
import {useState} from "react"


function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [cardCor, setCardCor] = useState([])
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('')
  const [contador, setContador] = useState(1)
  const [verificar, setVerificar] = useState(false)


  function adicionarCard(event){
    event.preventDefault()
    
    const result = verificarRegras()

    if(result===false){
      setVerificar(false)
      setContador(contador+1)
      console.log(contador)
      
      const newCardCor = {
        
        id: contador,
        nome: nome,
        cor: cor
        
      }
      
      console.log(cardCor.nome, cardCor.cor)
      
      setCardCor([...cardCor, newCardCor])
      
      setNome('')
      setCor('')
      
      console.log(cardCor.nome, cardCor.cor)
    }else{
      setVerificar(true)
      setNome('')
      setCor('')
      
    }
  }

  function verificarRegras(){


    if(nome.length<3){
      return true
      
    } 
    else{
      if(cor.length<6){
        return true
      }
      else{
        let count = 0
        let verificarHexa = 0
        cor.split("").forEach(caractere => {
          if(isNaN(caractere)){
            count++

            if(caractere === '#'){
              verificarHexa++
            }
          }
        })
        if(verificarHexa !== 1){
          return true
        }
        else if (count === cor.length){
          return true
        }
        else{
          return false
        }
      }
    }
  }

  return (
    <main>

      <div className={`${verificar? 'background-red': ''} App`}>
        <h1 className="titulo_principal">ADICIONAR NOVA COR</h1>
        <form>
          {/* Comece a desenvolver o seu Código por aqui :) */}
          <div className="labels-inputs">

            <div className="label-input">
              <label htmlFor="nome">Nome</label>
              <input className={`${verificar? 'background-red': ''}`} type="text" value={nome} id="nome" onChange={event => {setNome(event.target.value.trim())}}/>

            </div>
            <div className="label-input">

              <label htmlFor="cor">Cor</label>
              <input className={`${verificar? 'background-red': ''}`} type="text" value={cor} id="cor" placeholder="Insira sua cor no formato Hexadecimal" onChange={event => {setCor(event.target.value.trim())} }/>
            </div>
          </div>
          
          <button type="submit" onClick={event => adicionarCard(event)}>Adicionar</button>
          
        </form>
      </div>
      <span className={verificar? ' ': 'display'}>Por favor, verifique os dados inseridos no formulário</span>
      <section>
          <h1 className="titulo_secundario">CORES FAVORITAS</h1>
          {
            cardCor.map(card => (
              <Card key={card.id} dados={card}/>
            ))
          }
      </section>
    </main>

  )
}

export default App