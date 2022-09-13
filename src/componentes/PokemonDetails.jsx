import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonDetails = () => {
    const [pokeInfo, setPokeInfo] = useState()

    const { name } = useParams()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
      axios.get(URL)
      .then(res => setPokeInfo (res.data))
      .catch(err => console.log(err))
    
      
    }, [])
    
console.log(pokeInfo);

    return (
        <article>
            <img src={pokeInfo?.sprites.other['official-artwork'].front_default}></img>
            <h1>{pokeInfo?.name}</h1>
            
        </article>

    )
}

export default PokemonDetails