import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SelectType = ({optionType, setOptionType, setPokeSerach}) => {

  const [listTypes, setListTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
    .then(res => setListTypes(res.data.results))
    .catch(err => console.log(err))
  
  }, [])
  
  const  handleChange = e => {
    setOptionType(e.target.value)
    setPokeSerach('')
  }

  return (
    <select value={optionType} onChange={handleChange} >
      <option value='All' >All Pokemons</option>
      {
        listTypes?.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectType