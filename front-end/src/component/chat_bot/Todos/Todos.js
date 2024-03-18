import React, {useEffect} from "react";

import './Todos.css';

const Todos = (props) =>{
    const {setState} = props

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then((data) => {
            const fiveFirstTodos = data.slice(0,6);
            setState(state => ({ ...state, todos: fiveFirstTodos }))
        })
        // .then(data => console.log(data))
    },[])

    const renderTodos = () => {
        return props.todos.map(todo=>{
            return(
                <li className="todo-widget-list-item" key={todo.id}>
                    {todo.title}
                </li>
            )
        })
    }

    // console.log(props.state.todos)
    return <div className="todos-widget">
        <ul className="todo-widget-list">
            {renderTodos()}
        </ul>

    </div>
 
}



export default Todos;