import { createSlice } from "@reduxjs/toolkit";

interface initialState{
 stateMenu:boolean;
}

const initialState:initialState={
    stateMenu:false,
}

const reducerTech=createSlice({
    name:'techcloud',
    initialState,
    reducers:{
        setState:(state,action)=>{state.stateMenu=action.payload},
    }
})

export default reducerTech.reducer;
export const {setState}=reducerTech.actions;