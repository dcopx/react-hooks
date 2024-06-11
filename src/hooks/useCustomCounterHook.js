import { useState } from "react"

export const useCustomCounterHook = (initialValue = 10) => {
    const [value, setValue] = useState(initialValue)

    const increment = (added) => {
        setValue(value + added)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    const reset = () => {
        setValue(initialValue)
    }

    return { value, increment, decrement, reset }
}