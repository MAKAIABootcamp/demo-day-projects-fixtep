import { workerTypes } from "../types/workerTypes";

const workerState = {
    contratista: []
}

export const workerReducer = (state= workerState, action) => {
    switch (action.type) {
        case workerTypes.GET_WORKER:
            return{
                ...state,
                contratista: action.payload.contratista
            };
        case workerTypes.FILTERED_WORKER:
            return{
                ...state,
                contratista: action.payload.contratista
            };
            case workerTypes.DELETE_WORKER:
                return{
                    ...state,
                    contratista: state.contratista.filter((cont) => 
                        cont.id !== action.payload.id
                    ) 
                }
        default:
            return state ;
    }
}