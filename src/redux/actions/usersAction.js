import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { collection, doc, getDocs, query, where, updateDoc, addDoc } from "firebase/firestore"
import { database, auth } from '../../firebase/firebaseConfig';
import { userTypes } from "../types/usersType";

const collectionName = 'users';

export const actionRegisterAsync = ({ email, password, name }) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user);
                const { accessToken } = user.auth.currentUser;
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });
                const docRef = await addDoc(collection(database, collectionName), { name, email, accessToken, admin: true, provider: 'emailPassword' });
                dispatch(
                    actionRegisterSync({
                        id: docRef.id,
                        email,
                        name,
                        accessToken,
                        error: false,
                        admin: true, 
                        provider: 'emailPassword'
                    })
                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                dispatch(actionRegisterAsync({ error: true, errorMessage }));
            });
    };
};

const actionRegisterSync = (user) => {
    return {
        type: userTypes.USER_REGISTER,
        payload: {
            ...user,
        },
    };
};

export const actionLoginAsync = ({ email, password }) => {
    return (dispatch) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          const { displayName, accessToken, admin} = user.auth.currentUser
          console.log(user.auth.currentUser) 
          dispatch(
            actionLoginSync({
                admin,
              email,
              name: displayName,
              accessToken,
              error: false,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          dispatch(actionLoginSync({ email, error: true, errorMessage }));
        });
    };
  };
  
  const actionLoginSync = (user) => {
    return {
      type: userTypes.USER_LOGIN,
      payload: {
        ...user,
      },
    };
  };
  
  export const actionLogoutAsync = () => {
    return (dispatch) => {
      signOut(auth)
        .then(() => {
          dispatch(actionLogoutSync());
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  
  const actionLogoutSync = () => {
    return {
      type: userTypes.USER_LOGOUT,
    };
  };