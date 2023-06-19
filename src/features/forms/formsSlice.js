import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
        name: "",
        email:"",
        marca:"",
        modelo:"",
        servicios: [],
        tiempoTotal: 0,
        fecha:null,
        hora:null
}]

export const formsSlice = createSlice({
    name:"forms",
    initialState: initialState,
    reducers: {
        addCustomer: (state,action) => {
            state.push(action.payload)
        }
    }
})

export const {addCustomer} = formsSlice.actions
export default formsSlice.reducer