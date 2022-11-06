import './style.scss'
import abobora from './../../assets/image/abobora.png'
import morcego from './../../assets/image/morcego.png'
import fundo from './../../assets/image/Sem título.png'

import { ComponenteCardQuadrado } from "../../components/ComponenteCardQuadrado"
import { ComponenteCardRetangular } from "../../components/ComponenteCardRetangular"

export function PaginaPrincipal(){

    const newGames = [
        {
            id:1,
            name: 'Hollow Knight',
            plataforms: ['windows'],
            categories: ['Metroidvania', 'Souls-like', 'Platformer2D'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg'
        },
        {
            id:2,
            name: "Don't Starve",
            plataforms: ['windows'],
            categories: ['SurvivalOpen', 'World Survival', 'CraftCrafting'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg'
        },
        {
            id:3,
            name: 'Cult of the Lamb',
            plataforms: ['windows'],
            categories: ['Horror', 'Cute', 'Roguelike'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg'
        }
    ]
    
    const halloweenGames = [
        {
            id:1,
            name: 'Inscryption',
            categories: ['Card', 'BattlerCard', 'GameStory Rich'],
            oldPrice: '100,00',
            newPrice: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg'
        },
        {
            id:2,
            name: 'Hades',
            categories: ['Action', 'Roguelike', 'Indie', 'Action'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg'
        },
        {
            id:3,
            name: 'Darkest Dungeon',
            categories: ['Turn-BasedCombat', 'DarkFantasy', 'Roguelike'],
            oldPrice: '30,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg'
        },
        {
            id:4,
            name: 'Outlast',
            categories: ['Horror', 'First-Person', 'Survival Horror'],
            oldPrice: '100,00',
            newPrice: '40,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg'
        }
    ]
    
    const earlyAccessGames = [
        {
            id:1,
            name: 'Stardew Valleyt',
            plataforms: ['windows'],
            categories: ['Farming Sim', 'Life Sim', 'Pixel Graphics'],
            price: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg'
        },
        {
            id:2,
            name: "Little Nightmares",
            plataforms: ['windows'],
            categories: ['Horror', 'Atmospheric', 'Adventure'],
            price: '30,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/424840/header.jpg'
        },
        {
            id:3,
            name: 'Bendy and the Ink Machine',
            plataforms: ['windows'],
            categories: ['Horror', 'First-Person', 'Singleplayer', 'PuzzleDark'],
            price: '45,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/622650/header.jpg'
        }
    ]
    
    const cheapGames = [
        {
            id:1,
            name: 'Little Misfortune',
            categories: ['Adventure', 'Point & Click', 'Indie'],
            oldPrice: '100,00',
            newPrice: '19,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/714120/header.jpg'
        },
        {
            id:2,
            name: 'Limbo',
            categories: ['Puzzle', 'Platformer', 'Indie'],
            oldPrice: '80,00',
            newPrice: '15,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/48000/header.jpg'
        },
        {
            id:3,
            name: 'Darkwood',
            categories: ['Horror', 'Survival'],
            oldPrice: '30,00',
            newPrice: '10,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/274520/header.jpg'
        },
        {
            id:4,
            name: 'Slender: The Arrival',
            categories: ['Horror', 'Survival Horror', 'First-Person'],
            oldPrice: '100,00',
            newPrice: '20,00',
            picture: 'https://cdn.akamai.steamstatic.com/steam/apps/252330/header.jpg'
        }
    ]
    

    return(
        <main>
            
            <section className="header">
                <nav className="header_nav">
                    
                    <h1 className="header_nav_logo">[ NOME OU LOGO AQUI ]</h1>
                    <a className="header_nav_store">STORE</a>
                    <a>LIBRARY</a>
                    <a>COMMUNITY</a>
                    <a>ABOUT</a>
                    <a>PROFILE</a>
                    
                </nav>
                <div>
                    <img className="header_fundo" src={fundo}/>
                    {/* <img className="header_abobora" src={abobora}/>
                    <img className="header_morcego" src={morcego}/> */}
                    <div className="header_propaganda">
                        <h3>[ LOGO AQUI ]</h3>
                        <h1>PROMOS OU</h1>
                        <h1>DESCONTOZURAS?</h1>
                        <p>O trocadilho é ruim mas as promoções não!</p>
                        <p>Aproveite as assombrosas ofertas de Halloween.</p>
                    </div>

                </div>
            </section>

            <section>
                <h1 className="title_section">New Games</h1>
                <ul>
                    {
                        newGames.map(game => (
                            <ComponenteCardRetangular
                            key={game.id} 
                            gamesItens = {game}/>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h1 className="title_section">Halloween Offers</h1>
                <ul className="grid_list">
                    {
                        halloweenGames.map(hallGame => (
                            <ComponenteCardQuadrado
                            key = {hallGame.id} 
                            gamesItens = {hallGame}/>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h1 className="title_section">Early Access Games</h1>
                <ul>
                    {
                        earlyAccessGames.map(accessGame => (
                            <ComponenteCardRetangular 
                            key={accessGame.id}
                            gamesItens = {accessGame}/>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h1 className="title_section">Cheap Games</h1>
                <ul className="grid_list">
                    {
                        cheapGames.map(cheapGame => (
                            <ComponenteCardQuadrado 
                            key = {cheapGame.id}
                            gamesItens = {cheapGame}/>
                        ))
                    }
                </ul>
            </section>


        </main>
    )
}