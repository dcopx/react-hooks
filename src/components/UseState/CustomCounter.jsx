import React, { useState } from 'react'
import { CustomCounterHook } from '../../hooks/CustomCounterHook'

export const CustomCounter = () => {
    const { value, increment, decrement, reset } = CustomCounterHook()

    return (
        <>
            <h1>Counter: {value}</h1>
            <hr />
            <button onClick={() => increment(5)} >+1</button >
            <button onClick={decrement} >-1</button >
            <button onClick={reset} >reset</button >
        </>
    )
}
