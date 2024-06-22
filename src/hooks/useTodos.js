import { useEffect, useReducer } from 'react'
import { todoReducer } from '../components/useReducer/todoReducer'


const initState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initState, init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: "Add",
            payload: todo
        }
        dispatch(action)

    }
    const handleDeleteTodo = (id) => {
        const action = {
            type: "Delete",
            payload: id
        }
        dispatch(action)

    }
    const handleToggleTodo = (id) => {
        const action = {
            type: "Done",
            payload: id
        }
        dispatch(action)

    }
    return {
        todos,
        pendingTodos: todos.filter(todo => !todo.done),
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}
