import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from './Pokedex/PokemonCard'
import { useSelector } from 'react-redux'
import SearchInput from './Pokedex/SearchInput'
import './styles/pokedex.css'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState()
    const [pokeSearch, setPokeSearch] = useState()


    useEffect(() => {
        let URL
        if(pokeSearch){
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch} `

            const obj = {
                results:[
                    {
                        url
                    }
                ]
            }
            setPokemons(obj)
            
        }else{
            URL = 'https://pokeapi.co/api/v2/pokemon'
            axios.get(URL)
            .then(res => setPokemons(res.data))
            .catch(err => console.log(err))
        }
        

    }, [pokeSearch])

    const nameTrainer = useSelector(state => state.nameTrainer)


    return (
        <div>
            
            
            <h2>Welcome: {nameTrainer}, Catch them all.</h2>
            <SearchInput setPokeSearch={setPokeSearch}/>
            <div className='cards-container'>
                {
                    pokemons?.results.map(pokemon => (
                        <PokemonCard
                            key={pokemon.url}
                            url={pokemon.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Pokedex