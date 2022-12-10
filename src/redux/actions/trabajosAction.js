import { collection, getDocs } from "firebase/firestore"
import {database} from '../../firebase/firebaseConfig';
import { trabajosTypes } from "../types/trabajosType";


const collectionWorker = "trabajos";

export const actionGetTrabajosAsync = () =>{
    return async (dispatch) => {
        const trabajosCollection = collection(database, collectionWorker);
        const querySnapshot = await getDocs(trabajosCollection);
        const trabajo = [];
        try {
            querySnapshot.forEach((doc)=>{
                trabajo.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            sessionStorage.setItem("trabajos", JSON.stringify(trabajo));
        } catch (error) {
            console.error(error);
        }finally{
            dispatch(actionGetTrabajosSync(trabajo));
        }
     };
    };

    const actionGetTrabajosSync = (trabajo) =>{
        return{
            type: trabajosTypes.GET_TRABAJOS,
            payload:{
                trabajo: trabajo,
            },
        };
    };
