import {createSlice} from '@reduxjs/toolkit'

{/*recibe  como parametro un objeto que guarda la info del estado */}
 export const nameTrainerSlice = createSlice({
    name:'nameTrainer',
    initialState:'',
    reducers:{
        setNameTrainer: (state, action) => action.payload
    }

})

export const {setNameTrainer} = nameTrainerSlice.actions

export default nameTrainerSlice.reducer

{/*payload guarda lo que escribe el usuario */}