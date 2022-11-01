import { Login } from './pages/Login'
import {SegundaAula} from './classes/SegundaAula'
import {TerceiraAula} from './classes/TerceiraAula'
import {QuartaAula} from './classes/QuartaAula'
import {Projeto} from './classes/Projeto'
import { QuintaAula } from './classes/QuintaAula'

//No import as palavras estão entre chaves pq não tem default na exportação

function App() {

  return (
    <>
      {/* <Login/> */}
      {/* <SegundaAula/> */}
      {/* <TerceiraAula/> */}
      <Projeto/>
      {/* <QuartaAula/> */}
      {/* <QuintaAula/> */}
    </>
  )
}

export default App
