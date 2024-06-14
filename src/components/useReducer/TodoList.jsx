import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}
