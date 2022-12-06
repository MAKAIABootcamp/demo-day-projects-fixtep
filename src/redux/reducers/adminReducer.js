import { adminTypes } from "../types/adminTypes";

const workerState = {
    contratista: []
}

export const adminReducer = (state = workerState, action) => {
    switch (action.type) {
        case adminTypes.ADD_WORKER:
            return {
                ...state,
                contratista: [...state.contratista, action.payload],
            };
        case adminTypes.DELETE_WORKER:
            return{
                ...state,
                contratista: state.contratista.filter((cont) => 
                    cont.id !== action.payload.id
                ) 
            }
        default:
            return state;
    };
};