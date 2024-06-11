import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [form, setForm] = useState({
        user: '',
        email: ''
    })

    const { user, email } = form

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('view')
    }, [])

    useEffect(() => {
        console.log('form')
    }, [form])

    useEffect(() => {
        console.log('email')
    }, [email])

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
            {
                (user === 'dcopx2') && <Message />
            }
        </>
    )
}
