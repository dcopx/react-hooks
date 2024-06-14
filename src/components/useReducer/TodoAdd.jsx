import React, { useState, useCallback } from 'react'
import { useCustomForm } from '../../hooks/useCustomForm'

export const TodoAdd = ({ handleNewTodo }) => {
    const { form: { description }, onInputChange, onReset } = useCustomForm({
        description: ''
    })
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (description <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewTodo(newTodo)
        onReset()

    }
    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input type="text" name='description' value={description} onChange={onInputChange} />
            <button type="submit" >Agregar</button>
        </form>
    )
}
