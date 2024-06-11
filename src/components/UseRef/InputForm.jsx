import React, { useRef } from 'react'

export const InputForm = () => {
    const ref = useRef()
    const onClickRef = () => {
        ref.current.select()
    }
    return (
        <>
            <input type="text" ref={ref} />
            <button onClick={onClickRef}>focus</button>
        </>
    )
}
