import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <>
            <h1>Login</h1>
            <hr />
            <pre>{JSON.stringify(user, null, 3)}</pre>
            <button onClick={() => setUser({ id: 234, user: "ergger" })}> Establecer User</button>
        </>
    )
}
