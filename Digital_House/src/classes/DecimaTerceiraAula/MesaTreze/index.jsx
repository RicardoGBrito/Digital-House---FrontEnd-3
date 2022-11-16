import { useEffect, useState } from "react"

export function MesaTreze(){

    const [pedido, setPedido] = useState('')

    function cancelarPedido(){
        alert('Pedido cancelado')
        setPedido('')
    }

    useEffect(() => {
        setTimeout(()=>setPedido('Pizza'), 5000)
        
    },[])

    return(
        <main>
            <h1>Seu pedido: {pedido}</h1>
            <button onClick={()=>cancelarPedido()}>Cancelar pedido</button>
        </main>
    )

}