import React from 'react'
// import { SimpleForm } from './components/UseEffect/SimpleForm'
// import { CustomForm } from './components/UseForm/CustomForm'
// import { MultipleHooks } from './components/UseFetch/MultipleH/ooks'
// import { InputForm } from './components/UseRef/InputForm'
// import { MemoHook } from './components/useMemo/MemoHook'
// import { CallbackHook } from './components/useCallback/CallbackHook'
// import { Padre } from './components/07-tarea-memo/Padre'
// import { TodoApp } from './components/useReducer/TodoApp'
import { MainApp } from './components/useRouter/MainApp'
import { BrowserRouter } from 'react-router-dom'

export const HooksApp = () => {
    return (
        <BrowserRouter>
            <MainApp />
        </BrowserRouter>
    )
}
