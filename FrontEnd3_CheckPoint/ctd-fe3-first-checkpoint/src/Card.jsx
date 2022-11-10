//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {

  const style = {
    backgroundColor:props.dados.cor
  }

  return (
    <div className="card" style={style}>
      <p className="card-nome">{props.dados.nome}</p>
      <h1 className="card-cor">{props.dados.cor}</h1>
    </div>
  )
}