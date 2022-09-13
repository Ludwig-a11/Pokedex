import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StatPokemon from './StatPokemon'
import './style/pokemonCard.css'

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
    
    }, [])

    const handleClick = () => navigate(`/Pokedex/${pokemon.name}`)
    

  return (
    <article onClick={handleClick} className={`poke-card color-${pokemon?.types[0].type.name}`}>
        <header className={`card-header bg-${pokemon?.types[0].type.name}`}>
            <img className='card-img' src={pokemon?.sprites.other['official-artwork']['front_default']} alt="" />
        </header>
        <section className='card-body'>
            <h3 className={`card-name color-text-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className='card-list'>
            {
                pokemon?.types.map(slot => (
                    <li className='card-item' key={slot.type.url}>{slot.type.name}</li>
                ))
            }
            </ul>
        </section>
        <hr className='card-hr' />
        <footer className='card-footer'>
            <ul className='card-list-stats'>
                {
                     pokemon?.stats.map(stat => (
                        <StatPokemon 
                        key={stat.stat.url}
                        infoStat={stat}
                        />
                     ))   
                }
            </ul>
         </footer>
    </article>
  )
}

export default PokemonCard