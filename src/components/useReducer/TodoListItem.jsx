import React from 'react'

export const TodoListItem = ({ todo, onToggleTodo, onDeleteTodo }) => {

    return (
        <li >
            <span onClick={() => onToggleTodo(todo.id)}>{todo.description}  </span>
            <button onClick={() => onDeleteTodo(todo.id)}>borrar</button>
        </li>
    )
}
