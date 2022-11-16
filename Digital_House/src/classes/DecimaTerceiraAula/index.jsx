import { useState, useEffect } from "react"

export function DecimaTerceiraAula(){

    //hook
    const [contador, setContador] = useState()

    useEffect(() => {console.log("carregou")},[])

    function adicionar(){
        setContador(contador+1)
    }


    return(
        <>
            <p>O valor do contador é {contador}</p>
            <button onClick={() => adicionar()}>Atualizar conta</button>
        </>
    )

}