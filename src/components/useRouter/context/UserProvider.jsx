import React, { useState } from 'react'
import { UserContext } from './userContext'

// const user = {
//     id: 123,
//     nombre: "dsfgsdfgsdfg",
//     email: "asdf@mail.com"
// }
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
