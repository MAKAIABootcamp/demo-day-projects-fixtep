import { citasTypes } from "../types/citasTypes";

const citaState = {
    cita: []
}

export const citaReducer = (state = citaState, action) => {
    switch (action.type) {
        case citasTypes.GET_CITAS:
            return{
                ...state,
                cita: action.payload.cita
            };
        case citasTypes.ADD_CITAS:
            return {
                ...state,
                cita: [...state.cita, action.payload],
            };
        default:
            return state;
    };
}