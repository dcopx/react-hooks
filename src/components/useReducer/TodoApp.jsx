import React from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../../hooks/useTodos'

export const TodoApp = () => {
    const { todos, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos()

    return (
        <>
            <h1>Todo {todos.length}, pendientes {pendingTodos.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onToggleTodo={handleToggleTodo}
                        onDeleteTodo={handleDeleteTodo} />
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
