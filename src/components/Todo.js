import './Todo.css'
function Todo(props){
    const src = props.concepts
    const atl = props.concepts
    return(
        <div>
            <ul id="concepts">
                <li className="concept">
                    <img src={src[0].image} alt={ atl[0].title } />
                    <h2>TODO: { props.concepts[0].title }</h2>
                    <p>TODO: { props.concepts[0].description }</p>
                </li>
                <li className="concept">
                    <img src={src[1].image} alt={ atl[1].title } />
                    <h2>TODO: { props.concepts[1].title }</h2>
                    <p>TODO: { props.concepts[1].description }</p>
                </li>
                <li className="concept">
                    <img src={src[2].image} alt={ atl[2].title } />
                    <h2>TODO: { props.concepts[2].title }</h2>
                    <p>TODO: { props.concepts[2].description }</p>
                </li>
            </ul>
        </div>
    )
}

export default Todo;