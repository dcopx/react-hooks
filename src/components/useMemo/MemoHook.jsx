import React, { useMemo, useState } from 'react'
import { useCustomCounterHook } from '../../hooks/useCustomCounterHook'


const procesoPesado = (maxCount) => {
    for (let index = 0; index < maxCount; index++) {
        console.log(maxCount)

    }
    return maxCount
}

export const MemoHook = () => {
    const { value, increment } = useCustomCounterHook(10)
    const [show, setShow] = useState(false)

    const memorized = useMemo(() => procesoPesado(value), [value])

    return (
        <>
            <h1>Memo Hook {value}</h1>
            <hr />
            <h4>{memorized}</h4>
            <button onClick={() => increment(1)}>+1</button>
            <button onClick={() => setShow(!show)}> show {JSON.stringify(show)}</button>
        </>
    )
}
