import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



import { Login } from './pages/Login'
import {SegundaAula} from './classes/SegundaAula'
import {TerceiraAula} from './classes/TerceiraAula'
import {QuartaAula} from './classes/QuartaAula'
import {Projeto} from './classes/Projeto'
import { QuintaAula } from './classes/QuintaAula'
import {AtividadePokemon} from './classes/AtividadePokemon'
import { DecimaTerceiraAula } from './classes/DecimaTerceiraAula'
import { MesaTreze } from './classes/DecimaTerceiraAula/MesaTreze'
import { DecimaQuintaAula } from './classes/DecimaQuintaAula'
import { MainLayout } from "./components/MainLayout";
import { SetimaAula } from "./classes/SetimaAula";
import { AtividadePosts } from "./classes/AtividadePosts";



//No import as palavras estão entre chaves pq não tem default na exportação

function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout/>,
      children: [
        {
          path:"decima-quinta-aula",
          element:<DecimaQuintaAula/>
        },
        {
          path:"decima-terceira-aula",
          element: <DecimaTerceiraAula/>
        },
        {
          path:"setima-aula",
          element: <SetimaAula/>
        },
        {
          path:"quinta-aula",
          element: <QuintaAula/>
        },
        {
          path:"quarta-aula",
          element: <QuartaAula/>
        },
        {
          path:"terceira-aula",
          element: <TerceiraAula/>
        },
        {
          path:"segunda-aula",
          element: <SegundaAula/>
        },
        {
          path:"atv-pokemon",
          element: <AtividadePokemon/>
        },
        {
          path:"atv-posts",
          element: <AtividadePosts/>
        }
      ]

      
    },
    /* {
      path: 'to-do',
      element: <ToDo />
    } */
  ]);
  

  return (
    <>
      {/* <Login/> */}
      {/* <SegundaAula/> */}
      {/* <TerceiraAula/> */}
      {/* <Projeto/> */}
      {/* <QuartaAula/> */}
      {/* <QuintaAula/> */}
      {/* <AtividadePokemon/> */}
      {/* <DecimaTerceiraAula/> */}
      {/* <MesaTreze/> */}
      <RouterProvider router={router} />

    </>
  )
}

export default App
