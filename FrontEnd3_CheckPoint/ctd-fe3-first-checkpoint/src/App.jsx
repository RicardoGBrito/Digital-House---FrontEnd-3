
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

/* import '' */
import { Card } from "./Card"
import {useState} from "react"


function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [cardCor, setCardCor] = useState([])
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('')
  const [contador, setContador] = useState(1)
  const [verificar, setVerificar] = useState(false)

  /* const toggleVerificar = (verificar) =>{
    setVerificar(verificar => !verificar)
  } */

  console.log(verificar)
  function adicionarCard(event){
    event.preventDefault()
    console.log(verificar)

    /* (verificar)? setVerificar(!verificar) : verificarRegras() */
    if(verificar===true)
      /* setVerificar(verificar => !verificar) */
      /* toggleVerificar(verificar) */
      setVerificar(false)
    else
      verificarRegras()

    console.log(verificar)

    if(verificar===false){

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
    }
  }

  function verificarRegras(){


    if(nome.length<3){
      /* setVerificar(verificar => !verificar) */
      setVerificar(true)
      console.log(4)
      console.log(verificar)
    } 
    else
      console.log(cor.length)
      if(cor.length<6){
        setVerificar(true)
        console.log(5)
      }
      else{
        let count = 0;
        cor.split("").forEach(caractere => {
          if(isNaN(caractere)){
            count++
            console.log(count)
          }})
          console.log(count)
          console.log(cor.length)
          if(count === cor.length)
            setVerificar(true)
            /* toggleVerificar(verificar) */
            console.log(18)
          
        
            
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
              <input className={`${verificar? 'background-red': ''}`} type="text" value={nome} id="nome" onChange={event => 
                {
                  setNome(event.target.value.trim())
                  /* let nome = event.target.value.trim()
                  if(nome.length<3)
                    verificarRegras()
                  else
                    setNome(event.target.value) */
                }
              }/>

            </div>
            <div className="label-input">

              <label htmlFor="cor">Cor</label>
              <input className={`${verificar? 'background-red': ''}`} type="text" value={cor} id="cor" placeholder="Insira sua cor no formato Hexadecimal" onChange={event => 
                {
                  setCor(event.target.value.trim())
                  /* let cor = event.target.value.trim()
                  if(cor.length()<6){
                    verificarRegras()
                  }
                  else{
                    cor.split("").forEach(caractere => {
                      let count = 0;
                      if(isNaN(caractere)){
                        count++
                      }
                      if(count === cor.length())
                        verificarRegras()
                      else
                        setCor(event.target.value)
                    })
                        
                  } */
                }
              }/>
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