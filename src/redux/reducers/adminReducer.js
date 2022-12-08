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
        case adminTypes.EDIT_WORKER:
            return {
                ...state,
                contratista: state.contratista.map((cont) => {
                    const originalWorker = cont;
                    if (cont.id === action.payload.id) {
                        originalWorker.name = action.payload.name;
                        originalWorker.expertise = action.payload.expertise;
                        originalWorker.phone = action.payload.phone;
                        originalWorker.profession = action.payload.profession;
                        originalWorker.image = action.payload.image
                    }
                    return originalWorker
                })
            }
        case adminTypes.DELETE_WORKER:
            return {
                ...state,
                contratista: state.contratista.filter((cont) =>
                    cont.id !== action.payload.id
                )
            }
        default:
            return state;
    };
};