import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import Pokedex from '../assets/images/pokedex.png'
import './styles/homeScreen.css'


const HomeScreen = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ''
  }


  return (
    <div className='full-screen-container'>
      <div className='home-container'>
        <div >
          <img className='home-title' src={Pokedex} alt="Pokedex" />
        </div>
        <h2 className='home-hi'>Hi Trainer!</h2>

        <form className='home-form' onSubmit={handleSubmit}>
          <div className='input-group success'>
            <label className='input-group-label' htmlFor='name'>What's your name:</label>
            <input className='input-group-input' id='name' type='text' />
          </div>

          <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."> Log in</button>
        </form>
      </div>
    </div>

  )
}

export default HomeScreen