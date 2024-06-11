import React from 'react'

export const PokeCard = ({ id, name, sprites = [] }) => {
    return (
        <section>
            <h2>#{id} - {name}</h2>
            {
                sprites.map(sprite => (
                    <img key={sprite} src={sprite} alt={name} />
                ))
            }
        </section>

    )
}
