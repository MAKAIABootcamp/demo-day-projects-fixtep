import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/firebaseConfig";
import { adminTypes } from "../types/adminTypes";

const collectionName = "contratistas";

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

export const actionEditWorkerAsync = (contratistaEdit) => {
  return async (dispatch) => {
    const contratistaRef = doc(database, collectionName, contratistaEdit.id);
    try {
      await updateDoc(contratistaRef, contratistaEdit);
      dispatch(
        actionEditWorkerSync({
          id: contratistaRef.id,
          ...contratistaEdit,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

const actionEditWorkerSync = (contratistaEdit) => {
  return {
    type: adminTypes.EDIT_WORKER,
    payload: { ...contratistaEdit },
  };
};
