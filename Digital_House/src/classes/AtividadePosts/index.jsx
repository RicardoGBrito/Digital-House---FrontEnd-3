import { useState } from "react"
import { useEffect } from "react"

export function AtividadePosts(){

    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(dados => setPosts(dados))

    },[])

    return(

        <div>
            {
                posts.map((item, index) =>(
                    <li key={index}>
                        <p>{item.title}</p>
                    </li>
                ))
            }
        </div>

    )
}