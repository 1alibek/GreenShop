import { createSlice } from "@reduxjs/toolkit";
interface InitialStateType{
    modalAuthVisibility:boolean
}
const initialState:InitialStateType={
    modalAuthVisibility:false
}
const modalSlice =createSlice({
    name:"modal",
    initialState,
    reducers:{
        setModalAuthVisibility(state){
            state.modalAuthVisibility=!state.modalAuthVisibility
        }

    }
})
export const {setModalAuthVisibility}= modalSlice.actions
export default modalSlice.reducer