const initialState = [{
    id: 1,
    todo: 'aprender',
    done: false
}]

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === 'add') {
        return [...state, action.payload]
    }

    return state
}


const newTodo = {
    id: 2,
    todo: 'enseñar',
    done: false
}


const todoAction = {
    type: 'add',
    payload: newTodo
}

let todos = todoReducer()
todos = todoReducer(todos, todoAction)

console.log({ todos })