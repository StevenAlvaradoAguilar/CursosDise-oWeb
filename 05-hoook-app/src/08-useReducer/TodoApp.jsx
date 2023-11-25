import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
//     {
//         id: new Date().getTime(),
//         description: 'Recolectar la piedra del alma',
//         done: false
//     },
//     {
//         id: new Date().getTime() * 3,
//         description: 'Recolectar la piedra del tiempo',
//         done: false
//     },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo, 
        }
        dispatch( action ); 
    }

    const handleRemoveTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

  return (
    <>
        <div>TodoApp: 10, <small>pendientes: 2</small></div>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } onDeleteTodo={ handleRemoveTodo } />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd on NewTodo( todo ) */}
                {/* { id: newDate()..., description: "", done: false } */}
                <TodoAdd onNewTodo={ handleNewTodo }/>
            </div>
            
        </div>

    </>
  )
}
