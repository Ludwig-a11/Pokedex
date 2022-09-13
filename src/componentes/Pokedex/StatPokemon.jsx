import React from 'react'

const StatPokemon = ({infoStat, color}) => {
  return (
    <li className='card-stat' >
        <h4 className='card-stat-title'>{infoStat.stat.name}</h4>
        <p className={`card-stat-value color-text-${color}`}>{infoStat.base_stat}</p>
    </li>
  )
}

export default StatPokemon