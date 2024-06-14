import React from 'react'

export const TodoListItem = ({ todo }) => {
    return (
        <li >
            <span>{todo.description}  </span>
            <button>borrar</button>
        </li>
    )
}
