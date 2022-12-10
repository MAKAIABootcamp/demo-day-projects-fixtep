import { addDoc, collection, doc, getDocs} from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { citasTypes } from "../types/citasTypes";

const collectionName = 'citas';

export const actionGetCitaAsync = () => {
    return async (dispatch) => {
        const citaCollection = collection(database, collectionName);
        const querySnapshot = await getDocs(citaCollection);
        const cita = [];
        try {
            querySnapshot.forEach((doc) => {
                cita.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            console.log(cita);
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionGetCitaSync(cita));
        }
    }
}

const actionGetCitaSync = (cita) => {
    return {
        type: citasTypes.GET_CITAS,
        payload: {
            cita: cita
        }
    }
}

export const actionAddCitaAsync = (cita) => {
    return async (dispatch) => {
      try {
        const citaCollection = collection(database, collectionName);
        const docs = await addDoc(citaCollection, cita);
        dispatch(actionAddCitaSync({ id: docs.id, ...cita }));
      } catch (error) {
        console.log(error);
        dispatch(actionAddCitaSync({}));
      }
    };
  };
  
  const actionAddCitaSync = (cita) => {
    return {
      type: citasTypes.ADD_CITAS,
      payload: cita,
    };
  };