import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { LoadingMessage } from './LoadingMessage'
import { useCustomCounterHook } from '../../hooks/useCustomCounterHook'
import { PokeCard } from './PokeCard'

export const MultipleHooks = () => {

    const { value, increment, decrement } = useCustomCounterHook(1)
    const { data, isLoading, hasError, error } =
        useFetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    return <>
        <h1>PokéApi</h1>
        <hr />
        {isLoading
            ? <LoadingMessage />
            : (<PokeCard
                id={data.id}
                name={data.name}
                sprites={[data.sprites.front_default, data.sprites.front_shiny]} />)
        }
        <button onClick={value > 1 ? () => decrement() : null}>anterior</button>
        <button onClick={() => increment(1)}>siguente</button>
    </>
}
