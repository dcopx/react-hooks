import React, { useEffect, useState } from 'react'
import { Message } from '../UseEffect/Message'
import { useCustomForm } from '../../hooks/useCustomForm'

export const CustomForm = () => {
    const { form, onInputChange, onReset } = useCustomForm({
        user: '',
        email: '',
        password: ''
    })

    const { user, email, password } = form


    return (
        <>
            <h1>Simple form</h1>
            <hr />
            <input
                type="text"
                placeholder='dcopx'
                name='user'
                value={user}
                onChange={(event) => onInputChange(event)} />
            <br />
            <input
                type="text"
                placeholder='dcopx@gmail.com'
                name='email'
                value={email}
                onChange={(event) => onInputChange(event)} />
            <br />
            <input
                type="password"
                placeholder='password'
                name='password'
                value={password}
                onChange={(event) => onInputChange(event)} />
            <br />
            <button onClick={onReset}>Reset</button>
        </>
    )
}
