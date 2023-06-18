import Todo from "./Todo";

function Todos(props){
    return(
        <div>
            <Todo concepts={props.concepts}/>
        </div>
    )
}

export default Todos;