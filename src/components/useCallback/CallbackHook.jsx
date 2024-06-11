import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'
import { useCustomForm } from '../../hooks/useCustomForm'

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)
    const { form, onInputChange } = useCustomForm({ val: '' })
    const { val } = form

    const callbackCounter = useCallback(
        (incre) => {
            if (incre == '') return
            setCounter((value) => value + incre)
        },
        [],
    )

    return (
        <>
            <h1>CallbackHook {counter}</h1>
            <ShowIncrement increment={callbackCounter} incre={val} />
            <input
                type="text"
                name='val'
                value={val}
                onChange={(event) => onInputChange(event)} />
        </>
    )
}
