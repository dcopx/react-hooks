import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)
    return (
        <>
            <h1>Home</h1>
            <hr />

            <pre>{JSON.stringify(user, null, 3)}</pre>
        </>
    )
}
