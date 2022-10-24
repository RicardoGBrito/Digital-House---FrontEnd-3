import './style.scss';

export function Projeto(){

    /* const titulos = [
        {titulo:'Assista ao vivo'},
        {titulo:'Todas as Flores - Trechos gratuitos'},
        {titulo:'Novidades'},
] */

    const conteudo = [
        {titulo:'Assista ao vivo', imagem:'https://globoplay.globo.com/tv-globo/ao-vivo/6120663/', tituloCard:'Card Canal', descricao1:'Hora Card', descricao2:'Conteúdo Card'},
        {titulo:'Todas as Flores - Trechos gratuitos', imagem:'https://globoplay.globo.com/v/11047435/editorial/a67b3ece-9f82-4020-9183-13c49ad7450f/', tituloCard:'Todas as Flores', descricao1:'Vanessa descobre que Maira e Raael estão juntos', descricao2:''},
        {titulo:'Novidades',imagem:'https://globoplay.globo.com/gonjiam-manicomio-assombrado/t/KgxfyQsJsb/', tituloCard:'', descricao1:'', descricao2:''},
]

    return (
        <main>
            <h1>Segunda Aula</h1>
            <h2>Globo Play</h2>
            <ul>

                <li>
                    <h2>GLOBOPLAY Agora na tv  Novelas  Séries  Filmes  Originais Explore </h2>

                </li>

                <li>
                    <h2>Carrossel de Divulgação</h2>
                </li>
                {
                    conteudo.map((objLista) => (

                        <li>
                            <h2>{objLista.titulo}</h2>
                            <li>
                                <img src={objLista.imagem}/>
                                <h3>{objLista.tituloCard}</h3>
                                <p>{objLista.descricao1}</p>
                                <p>{objLista.descricao2}</p>

                            </li>

                        </li>


                    ))
                    
                }
                
            </ul>
        </main>
    )
}