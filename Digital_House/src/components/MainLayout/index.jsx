import { Link, Outlet } from 'react-router-dom'
import { SegundaAula } from '../../classes/SegundaAula'

import './style.scss'

export function MainLayout() {

    const dados = [
        {aula:'decima-quinta-aula', nome:'Décima Quinta Aula'},
        {aula:'decima-terceira-aula', nome:'Décima Terceira Aula'},
        {aula:'setima-aula', nome:'Sétima Aula'},
        {aula:'quinta-aula', nome:'Quinta Aula'},
        {aula:'quarta-aula', nome:'Quarta Aula'},
        {aula:'terceira-aula', nome:'Terceira Aula'},
        {aula:'segunda-aula', nome:'Segunda Aula'},
        {aula:'atv-pokemon', nome:'Atividade Pokemon'},
        {aula:'atv-posts', nome:'Atividade Posts'},
  ]

    return (
        <div className="main-layout-component">

            <header className='main-layout-component-header'>

                <h1>Layout Principal</h1>

                <ul>

                    {
                        dados.map((items, index)=> (
                            <li key={index}>
                                <Link to={items.aula}>{items.nome}</Link>

                            </li>
                        ))
                    }

                   {/* <li>

                        <Link to="decima-quarta-aula">Decima Quarta Aula</Link>
                        <Link to="decima-quarta-aula">Decima Quarta Aula</Link>
 
                    </li>

                    <li>

                        <Link to="decima-quinta-aula">Decima Quinta Aula</Link>

                    </li> */}

                </ul>

            </header>

            <main className='main-layout-component-main'>

                <p>O conteúdo será carregado aqui dentro:</p>

                <Outlet />

            </main>

        </div>
    )

}