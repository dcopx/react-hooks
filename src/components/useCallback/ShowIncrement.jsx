import React from 'react'

export const ShowIncrement = React.memo(({ increment, incre }) => {
    return (
        <button onClick={() => increment(incre)}>Incrementar</button>
    )
})