import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { workerTypes } from "../types/workerTypes";

const collectionName = 'contratistas';

export const actionGetWorkerAsync = () => {
    return async (dispatch) => {
        const workerCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(workerCollection);
        const contratista = [];
        try {
            querySnapshot.forEach((doc) => {
                contratista.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            console.log(contratista);
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetWorkerSync(contratista));
        }
    }
}

const actionGetWorkerSync = (contratista) => {
    return {
        type: workerTypes.GET_WORKER,
        payload: {
            contratista: contratista
        }
    }
}

export const actionFilterWorkerAsync = (searchParam, searchValue) => {
    return async (dispatch) =>{
        const workerCollection = collection(database, collectionName);
        const q = query(workerCollection, where(searchParam, "==", searchValue));
        const contratista = [];
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
                contratista.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionFilterWorkerSync(contratista))
        }
    };
};

const actionFilterWorkerSync = (contratista) => {
    return{
        type: workerTypes.FILTERED_WORKER,
        payload: {
            contratista: contratista,
        },
    };
};

export const actionDeleteWorkerAsync =(contratista) => {
    return  async (dispatch) => {
        const workerRef = doc(database, collectionName, contratista.id)
        try {
            await deleteDoc(workerRef);
            dispatch(actionDeleteWorkerSync(contratista))
        } catch (error) {
            console.log(error);
            dispatch(actionDeleteWorkerSync({
                error: true,
                errorMessage: error.message
            }))
        }        
    }
}

const actionDeleteWorkerSync = (contratista) => {
    return {
        type: workerTypes.DELETE_WORKER,
        payload: {id: contratista.id}
    }
}





