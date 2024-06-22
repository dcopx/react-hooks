import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
    return (
        <ul>
            {
                todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onToggleTodo={onToggleTodo}
                        onDeleteTodo={onDeleteTodo}

                    />
                ))
            }
        </ul>
    )
}
