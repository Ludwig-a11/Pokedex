import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './componentes/HomeScreen'
import ProtectedRoutes from './componentes/ProtectedRoutes'
import Pokedex from './componentes/Pokedex'
import PokemonDetails from './componentes/PokemonDetails'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />

        <Route element={<ProtectedRoutes />} >
          <Route path='pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokemonDetails />} />
        </Route> 
      </Routes>
      
    </div>
  )
}

export default App
