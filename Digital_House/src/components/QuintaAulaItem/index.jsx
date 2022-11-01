export function QuintaAulaItem(props) {

    console.log(props)
    return(
        /* <h1>{props.title}</h1> */

        

        <li>
            <img src={props.item.image} />
            <h1>{props.item.title}</h1>
            <p>{props.item.text}</p>
        </li>
    )

}