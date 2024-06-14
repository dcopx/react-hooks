import React, { useReducer, useCallback } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initState = [{
    id: new Date().getTime(),
    description: 'trabajar',
    done: false
}]


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initState)

    const handleNewTodo = (todo) => {
        console.log(todo)
    }
    return (
        <>
            <h1>Todo 10, pendientes 2</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>
                <div className="col5">
                    <h4>agregar</h4>
                    <hr />
                    <TodoAdd handleNewTodo={(todo) => handleNewTodo(todo)} />
                </div>
            </div>
        </>
    )
}
