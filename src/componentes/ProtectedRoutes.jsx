import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'

{/*useSelector nos ayuda a acceder al valor de un estado */}
const ProtectedRoutes = () => {

    const nameTrainer = useSelector(state => state.nameTrainer)

    if(nameTrainer){
        return <Outlet />
    } else{
        return <Navigate to='/' />
    }
}

export default ProtectedRoutes