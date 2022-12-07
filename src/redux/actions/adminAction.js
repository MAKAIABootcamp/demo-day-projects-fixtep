import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { adminTypes } from "../types/adminTypes";

const collectionName = 'contratistas';

export const actionAddWorkerAsync = (contratista) => {
    return async (dispatch) => {
      try {
        const workerCollection = collection(database, collectionName);
        const docs = await addDoc(workerCollection, contratista);
        dispatch(actionAddWorkerSync({ id: docs.id, ...contratista }));
      } catch (error) {
        console.log(error);
        dispatch(actionAddWorkerSync({}));
      }
    };
  };
  
  const actionAddWorkerSync = (contratista) => {
    return {
      type: adminTypes.ADD_WORKER,
      payload: contratista,
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
        type: adminTypes.DELETE_WORKER,
        payload: {id: contratista.id}
    }
}