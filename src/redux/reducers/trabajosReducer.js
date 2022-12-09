import { trabajosTypes } from "../types/trabajosType";


const trabajosState = {
    trabajo:[]
}

export const trabajosReducer = (state= trabajosState, action) => {
    switch (action.type) {
                case trabajosTypes.GET_TRABAJOS:
                return{
                    ...state,
                    trabajo: action.payload.trabajo
                }

        default:
            return state ;
    }
}